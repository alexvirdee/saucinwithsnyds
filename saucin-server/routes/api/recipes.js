const express = require('express');
const { getRecipes, createRecipe } = require('../../controllers/recipes');

const Recipe = require('../../models/Recipe');

const router = express.Router();

const { protect } = require('../../middleware/auth');

router
  .route('/')
  .get(getRecipes)
  .post(protect, createRecipe);

module.exports = router;
