const path = require('path');
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
exports.getRecipe = asyncHandler(async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    return next(
      new ErrorResponse(
        `Recipe with id ${req.params.id} could not be found`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: recipe
  });
});

// @desc    Create a Recipe
// @route   POST /api/v1/recipes
// @access  Private
exports.createRecipe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');

  const newRecipe = new Recipe({
    title: req.body.title,
    name: user.name,
    user: user.id,
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
exports.updateRecipe = asyncHandler(async (req, res, next) => {
  let recipe = await Recipe.findById(req.params.id);

  console.log(recipe);

  if (!recipe) {
    return next(
      new ErrorResponse(`Recipe with id ${req.params.id} could not be found`)
    );
  }

  console.log(recipe.user);

  // Make sure user is the owner of the recipe
  if (recipe.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update the recipe ${recipe._id}`,
        401
      )
    );
  }

  recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: recipe
  });
});

// @desc   Delete a recipe
// @route  DELETE /api/v1/recipe/:id
// @access Private
exports.deleteRecipe = asyncHandler(async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    return next(
      new ErrorResponse(
        `Recipe with id of ${req.params.id} was not found.`,
        404
      )
    );
  }

  // Make sure user is the recipe owner or admin
  if (recipe.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `The user ${req.user.id} is not authorized to delete this recipe.`,
        401
      )
    );
  }

  recipe.remove();

  res
    .status(200)
    .json({ success: true, data: {}, msg: 'Recipe has been deleted' });
});

// @desc       Upload photo for recipe
// @route      PUT /api/v1/recipes/:id/photo
// @access     Private
exports.recipePhotoUpload = asyncHandler(async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.id);

  if (!recipe) {
    return next(
      new ErrorResponse(
        `The recipe with id of ${req.params.id} could not be found`
      )
    );
  }

  // Make sure the user is owner of recipe
  if (recipe.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this recipe`,
        401
      )
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure the file being uploaded is an image
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse(`Please upload an image`, 400));
  }

  // Check the filesize
  if (!file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  // Create a custom filename
  file.name = `photo_${recipe._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Recipe.findByIdAndUpdate(req.params.id, { image: file.name });

    res.status(200).json({
      success: true,
      data: file.name
    });
  });
});
