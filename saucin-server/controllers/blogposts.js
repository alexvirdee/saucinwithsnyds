const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Blogpost = require('../models/Blogpost');
const Profile = require('../models/Profile');
const User = require('../models/User');

// @desc    Get All Blog Posts
// @route   get /api/v1/blogposts
// @access  Public
exports.getBlogposts = asyncHandler(async (req, res, next) => {
  const blogposts = await Blogpost.find().sort({ date: -1 });

  res.json(blogposts);
});

// @desc    Get a Single Blog Post
// @route   get /api/v1/blogposts/:id
// @access  Public
exports.getBlogpost = asyncHandler(async (req, res, next) => {
  const blogpost = await Blogpost.findById(req.params.id);

  if (!blogpost) {
    return next(
      new ErrorResponse(
        `Blog post with if of ${req.params.id} was not found`,
        404
      )
    );
  }

  res.json(blogpost);
});

// @desc    Create a New Blog Post
// @route   POST /api/v1/blogposts
// @access  Private * Only a Publisher or Admin account can create a blog post *
exports.createBlogpost = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');

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
exports.updateBlogpost = asyncHandler(async (req, res, next) => {
  let blogpost = await Blogpost.findById(req.params.id);

  if (!blogpost) {
    return next(
      new ErrorResponse(
        `Blog post with id of ${req.params.id} was not found`,
        404
      )
    );
  }

  blogpost = await Blogpost.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: blogpost });
});

// @desc    Delete a Blog Post
// @route   DELETE /api/v1/blogposts/:id
// @access  Private

// @route     PUT api/blogposts/like/:id
// @desc      Like a Blog Post
// @access    Private

// @route     PUT api/blogposts/unlike/:id
// @desc      Unlike a Blog post
// @access    Private

// @route     POST api/blogposts/comment/:id
// @desc      Add a Comment to a Blog Post
// @access    Private

// @route     DELETE api/blogposts/comment/:id
// @desc      Remove Comment from a Blog Post
// @access    Private
