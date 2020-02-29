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
  descriptions: {
    type: String,
    required: [true, 'Please add a description for recipe']
  },
  servings: {
    type: Number,
    required: [true, 'Please add number of servings recipe will make']
  },
  time: {
    type: Date,
    required: true
  },
  ingredients: [
    {
      amount: {
        type: Number,
        required: true
      },
      ingredient: {
        type: String,
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
