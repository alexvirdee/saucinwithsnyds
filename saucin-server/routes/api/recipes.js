const express = require('express');
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe
} = require('../../controllers/recipes');

const Recipe = require('../../models/Recipe');

const router = express.Router();

const { protect } = require('../../middleware/auth');

router
  .route('/')
  .get(getRecipes)
  .post(protect, createRecipe);

router
  .route('/:id')
  .get(getRecipe)
  .put(protect, updateRecipe);

module.exports = router;
