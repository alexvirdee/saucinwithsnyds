const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
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
    default: ''
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
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('recipe', RecipeSchema);
