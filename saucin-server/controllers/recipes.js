const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Recipe = require('../models/Recipe');

// @desc     Get all recipes users have created
// @route    GET /api/v1/recipes
// @access   Public
exports.getRecipes = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc    Get single recipe
// @route   GET /api/v1/recipes/:id
// @access  Public

// @desc   Create a Recipe
// @route  POST /api/v1/recipe
// @access Private

// @desc   Update a recipe
// @route  PUT /api/v1/recipes/:id
// @access Private

// @desc   Delete a recipe
// @route  DELETE /api/v1/recipe/:id
// @access Private
