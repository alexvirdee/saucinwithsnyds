const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Recipe = require('../models/Recipe');
const User = require('../models/User');

// @desc     Get all recipes
// @route    GET /api/v1/recipes
// @access   Public
exports.getRecipes = asyncHandler(async (req, res, next) => {
  const recipes = await Recipe.find().sort({ date: -1 });

  res.status(200).json({
    success: true,
    count: recipes.length,
    data: recipes
  });
});

// @desc    Get single recipe
// @route   GET /api/v1/recipes/:id
// @access  Public

// @desc    Create a Recipe
// @route   POST /api/v1/recipes
// @access  Private
exports.createRecipe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');

  const newRecipe = new Recipe({
    title: req.body.title,
    name: user.name,
    avatar: user.avatar,
    description: req.body.description,
    servings: req.body.servings,
    prepTime: req.body.prepTime,
    cookTime: req.body.cookTime,
    image: req.body.image,
    ingredients: req.body.ingredients,
    directions: req.body.directions,
    ratings: req.body.ratings,
    comments: req.body.comments
  });

  const recipe = await newRecipe.save();

  res.status(201).json({
    success: true,
    data: recipe
  });
});

// @desc   Update a recipe
// @route  PUT /api/v1/recipes/:id
// @access Private

// @desc   Delete a recipe
// @route  DELETE /api/v1/recipe/:id
// @access Private
