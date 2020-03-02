const express = require('express');
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  recipePhotoUpload
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
  .put(protect, updateRecipe)
  .delete(protect, deleteRecipe);

router.route('/:id/photo').put(protect, recipePhotoUpload);

module.exports = router;
