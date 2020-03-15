const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
 category: {
    type: String,
    required: [true, 'Please select a category']
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a title for recipe']
  },
  description: {
    type: String,
    required: [true, 'Please add a description for recipe']
  },
  servings: {
    type: Number,
    required: [true, 'Please add number of servings recipe will make']
  },
  prepTime: {
    type: Number,
    required: true,
    min: 0,
    max: 59,
    required: true
  },
  cookTime: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    default: 'no-photo.jpg'
  },
  ingredients: [
    {
      ingredient: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      }
    }
  ],
  directions: [
    {
      step: {
        type: Number,
        required: true
      },
      direction: {
        type: String,
        required: true
      }
    }
  ],
  ratings: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      rating: {
        type: Number,
        min: 1,
        max: 10
      }
    }
  ],
  avgRating: {
    type: Number
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

// Get the average recipe rating
RecipeSchema.statics.getAverageRating = async function(recipe) {
  const obj = await this.aggregate([
    {
      $match: { recipe: recipe }
    },
    {
      $project: {
        avgRating: { $avg: '$ratings.rating' }
      }
    }
  ]);

  try {
    console.log(
      `Average Rating for recipe ${obj[0]._id} is: ${obj[0].avgRating}`
    );
    await this.model('recipe').findByIdAndUpdate(recipe, {
      avgRating: obj[0].avgRating
    });
  } catch (err) {
    console.error(err);
  }
};

// Call getAverageRating after save
RecipeSchema.post('save', function() {
  this.constructor.getAverageRating(this.avgRating);
});

RecipeSchema.pre('remove', async function() {
  await this.constructor.getAverageRating(this.avgRating);
});

module.exports = mongoose.model('recipe', RecipeSchema);
