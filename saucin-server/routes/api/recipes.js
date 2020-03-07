const express = require('express');
const {
  getRecipes,
  getMyRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  recipePhotoUpload
} = require('../../controllers/recipes');

const Recipe = require('../../models/Recipe');

const router = express.Router();

const { protect, authorize } = require('../../middleware/auth');

router
  .route('/')
  .get(getRecipes)
  .post(protect, authorize('publisher', 'admin'), createRecipe);

router.route('/me').get(getMyRecipes);

router
  .route('/:id')
  .get(getRecipe)
  .put(protect, authorize('publisher', 'admin'), updateRecipe)
  .delete(protect, authorize('publisher', 'admin'), deleteRecipe);

router
  .route('/:id/photo')
  .put(protect, authorize('publisher', 'admin'), recipePhotoUpload);

module.exports = router;
