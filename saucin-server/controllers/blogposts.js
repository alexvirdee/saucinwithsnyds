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
    user: user.id,
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
// @access  Private * Only a Publisher or Admin account can update a blog post *
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
// @access  Private * Only a Publisher or Admin account can delete a blog post *
exports.deleteBlogpost = asyncHandler(async (req, res, next) => {
  let blogpost = await Blogpost.findById(req.params.id);

  if (!blogpost) {
    return next(
      new ErrorResponse(
        `Blog post with id of ${req.params.id} was not found`,
        404
      )
    );
  }

  // Owner of post & admin capable to delete post
  if (blogpost.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `The user ${req.user.id} is not authorized to delete this post`,
        401
      )
    );
  }

  blogpost.remove();

  res.status(200).json({
    success: true,
    data: {},
    msg: `Blog post ${req.params.id} has been successfully removed`
  });
});

// @route     PUT api/v1/blogposts/like/:id
// @desc      Like a Blog Post
// @access    Private
exports.likeBlogpost = asyncHandler(async (req, res, next) => {
  let blogpost = await Blogpost.findById(req.params.id);

  if (!blogpost) {
    return next(
      new ErrorResponse(
        `Blog post with id of ${req.params.id} was not found`,
        404
      )
    );
  }

  // Check if post has already been liked
  if (
    blogpost.likes.filter(like => like.user.toString() === req.user.id).length >
    0
  ) {
    return res.status(400).json({ msg: 'Post has already been liked' });
  }

  blogpost.likes.unshift({ user: req.user.id, name: req.user.name });

  await blogpost.save();

  res.json(blogpost.likes);
});

// @route     PUT api/v1/blogposts/unlike/:id
// @desc      Unlike a Blog post
// @access    Private
exports.unlikeBlogpost = asyncHandler(async (req, res, next) => {
  let blogpost = await Blogpost.findById(req.params.id);

  if (!blogpost) {
    return next(
      new ErrorResponse(
        `Blog post with id of ${req.params.id} was not found`,
        404
      )
    );
  }

  // Check if the post has already been liked
  if (
    blogpost.likes.filter(like => like.user.toString() === req.user.id)
      .length === 0
  ) {
    return res.status(400).json({ msg: 'Post has not yet been liked' });
  }

  // Get remove index
  const removeIndex = blogpost.likes
    .map(like => like.user.toString())
    .indexOf(req.user.id);

  blogpost.likes.splice(removeIndex, 1);

  await blogpost.save();

  res.json(blogpost.likes);
});

// @route     POST api/v1/blogposts/comment/:id
// @desc      Add a Comment to a Blog Post
// @access    Private
exports.commentBlogpost = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');
  const blogpost = await Blogpost.findById(req.params.id);

  if (!blogpost) {
    return next(
      new ErrorResponse(
        `Blog post with id of ${req.params.id} was not found`,
        404
      )
    );
  }

  const newComment = {
    text: req.body.text,
    name: user.name,
    avatar: user.avatar,
    user: req.user.id
  };

  blogpost.comments.unshift(newComment);

  await blogpost.save();

  res.json(blogpost.comments);
});

// @route     DELETE api/v1/blogposts/comment/:id
// @desc      Remove Comment from a Blog Post
// @access    Private
exports.deleteComment = asyncHandler(async (req, res, next) => {
  const blogpost = await Blogpost.findById(req.params.id);

  // Pull out comment
  const comment = blogpost.comments.find(
    comment => comment.id === req.params.comment_id
  );

  // Does the comment exist
  if (!comment) {
    return res.status(404).json({ msg: 'The comment does not exist' });
  }

  // Check the user
  if (comment.user.toString() !== req.user.id) {
    return res
      .status(401)
      .json({ msg: 'User is not authorized to remove comment' });
  }

  const removeIndex = blogpost.comments
    .map(comment => comment.user.toString())
    .indexOf(req.user.id);

  blogpost.comments.splice(removeIndex, 1);

  await blogpost.save();

  res.json(blogpost.comments);
});

// @desc       Upload photo for blogpost
// @route      PUT /api/v1/blogposts/:id/photo
// @access     Private * Only a Publisher or Admin account can upload photo to a blog post *
