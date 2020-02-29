const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Blogpost = require('../models/Blogpost');
const Profile = require('../models/Profile');
const User = require('../models/User');

// @desc    Get All Blog Posts
// @route   get /api/v1/blogposts
// @access  Public

// @desc    Get a Single Blog Post
// @route   get /api/v1/blogposts/:id
// @access  Public

// @desc    Create a New Blog Post
// @route   POST /api/v1/blogposts
// @access  Private
exports.createBlogpost = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');

  // Only a Publisher or Admin account can create a blog post
  if (req.user.role !== 'admin' || req.user.role !== 'publisher') {
    return next(
      new ErrorResponse(
        `${req.user.id} is not authorized to create a blog post`,
        400
      )
    );
  }

  const newPost = new Blogpost({
    title: req.body.title,
    name: user.name,
    avatar: user.avatar,
    body: req.body.body
  });

  const blogpost = await newPost.save();

  res.status(201).json({
    success: true,
    data: blogpost
  });
});

// @desc    Update a Blog Post
// @route   PUT /api/v1/blogposts/:id
// @access  Private

// @desc    Delete a Blog Post
// @route   DELETE /api/v1/blogposts/:id
// @access  Private
