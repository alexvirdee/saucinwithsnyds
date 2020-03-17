const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Communitypost = require('../models/Communitypost');
const Profile = require('../models/Profile');
const User = require('../models/User');

// @desc    Get All Community Posts
// @route   get /api/v1/communityposts
// @access  Public
exports.getCommunityposts = asyncHandler(async (req, res, next) => {
  const communityposts = await Communitypost.find().sort({ date: -1 });

  res.json(communityposts);
});

// @desc    Get a Single Community Post
// @route   get /api/v1/communityposts/:id
// @access  Public
exports.getCommunitypost = asyncHandler(async (req, res, next) => {
  const communitypost = await Communitypost.findById(req.params.id);

  if (!communitypost) {
    return next(
      new ErrorResponse(`Post with if of ${req.params.id} was not found`, 404)
    );
  }

  res.json(communitypost);
});


// @desc    Get All Community Posts by Category 'Cooking'
// @route   get /api/v1/communityposts/category/cooking
// @access  Public
exports.getCommunitypostsCooking = asyncHandler(async (req, res, next) => {
  const communityposts = await Communitypost.find({category: 'cooking'}).sort({ date: -1 });

  res.json(communityposts);
});

// @desc    Get All Community Posts by Category 'lifestyle'
// @route   get /api/v1/communityposts/category/cooking
// @access  Public
exports.getCommunitypostsLifestyle = asyncHandler(async (req, res, next) => {
  const communityposts = await Communitypost.find({category: 'lifestyle'}).sort({ date: -1 });

  res.json(communityposts);
});

// @desc    Get All Community Posts by Category 'Cooking'
// @route   get /api/v1/communityposts/category/cooking
// @access  Public
exports.getCommunitypostsGeneral = asyncHandler(async (req, res, next) => {
  const communityposts = await Communitypost.find({category: 'general'}).sort({ date: -1 });

  res.json(communityposts);
});


// @desc    Create a New Post to the community page
// @route   POST /api/v1/communityposts
// @access  Private * Only a logged in user can contribute to the community *
exports.createCommunitypost = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');

  const newPost = new Communitypost({
    title: req.body.title,
    category: req.body.category,
    user: user.id,
    name: user.name,
    avatar: user.avatar,
    body: req.body.body
  });

  const communitypost = await newPost.save();

  res.status(201).json({
    success: true,
    data: communitypost
  });
});

// @desc    Update a Post
// @route   PUT /api/v1/communityposts/:id
// @access  Private * Only logged in user can update their post *
exports.updateCommunitypost = asyncHandler(async (req, res, next) => {
  let communitypost = await Communitypost.findById(req.params.id);

  if (!communitypost) {
    return next(
      new ErrorResponse(`Post with id of ${req.params.id} was not found`, 404)
    );
  }

  communitypost = await Communitypost.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).json({ success: true, data: communitypost });
});

// @desc    Delete a Post
// @route   DELETE /api/v1/communityposts/:id
// @access  Private * Only a logged in user can delete their post (Might not use this feature) *
exports.deleteCommunitypost = asyncHandler(async (req, res, next) => {
  let communitypost = await Communitypost.findById(req.params.id);

  if (!communitypost) {
    return next(
      new ErrorResponse(`Pst with id of ${req.params.id} was not found`, 404)
    );
  }

  // Owner of post & admin capable to delete post
  if (
    communitypost.user.toString() !== req.user.id &&
    req.user.role !== 'admin'
  ) {
    return next(
      new ErrorResponse(
        `The user ${req.user.id} is not authorized to delete this post`,
        401
      )
    );
  }

  communitypost.remove();

  res.status(200).json({
    success: true,
    data: {},
    msg: `Post ${req.params.id} has been successfully removed`
  });
});

// @route     PUT api/v1/communityposts/like/:id
// @desc      Like a Post
// @access    Private
exports.likeCommunitypost = asyncHandler(async (req, res, next) => {
  let communitypost = await Communitypost.findById(req.params.id);

  if (!communitypost) {
    return next(
      new ErrorResponse(`Post with id of ${req.params.id} was not found`, 404)
    );
  }

  // Check if post has already been liked
  if (
    communitypost.likes.filter(like => like.user.toString() === req.user.id)
      .length > 0
  ) {
    return res.status(400).json({ msg: 'Post has already been liked' });
  }

  communitypost.likes.unshift({ user: req.user.id, name: req.user.name });

  await communitypost.save();

  res.json(communitypost.likes);
});

// @route     PUT api/v1/communityposts/unlike/:id
// @desc      Unlike a Post
// @access    Private
exports.unlikeCommunitypost = asyncHandler(async (req, res, next) => {
  let communitypost = await Communitypost.findById(req.params.id);

  if (!communitypost) {
    return next(
      new ErrorResponse(`Post with id of ${req.params.id} was not found`, 404)
    );
  }

  // Check if the post has already been liked
  if (
    communitypost.likes.filter(like => like.user.toString() === req.user.id)
      .length === 0
  ) {
    return res.status(400).json({ msg: 'Post has not yet been liked' });
  }

  // Get remove index
  const removeIndex = communitypost.likes
    .map(like => like.user.toString())
    .indexOf(req.user.id);

  communitypost.likes.splice(removeIndex, 1);

  await communitypost.save();

  res.json(communitypost.likes);
});

// @route     POST api/v1/communityposts/comment/:id
// @desc      Add a Comment to a Post on the community page
// @access    Private
exports.commentCommunitypost = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');
  const communitypost = await Communitypost.findById(req.params.id);

  if (!communitypost) {
    return next(
      new ErrorResponse(`Post with id of ${req.params.id} was not found`, 404)
    );
  }

  const newComment = {
    text: req.body.text,
    name: user.name,
    avatar: user.avatar,
    user: req.user.id
  };

  communitypost.comments.unshift(newComment);

  await communitypost.save();

  res.json(communitypost.comments);
});

// @route     DELETE api/v1/communityposts/comment/:id/:comment_id
// @desc      Remove Comment from a Community Post
// @access    Private
exports.deleteComment = asyncHandler(async (req, res, next) => {
  const communitypost = await Communitypost.findById(req.params.id);

  // Pull out comment
  const comment = communitypost.comments.find(
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

  const removeIndex = communitypost.comments
    .map(comment => comment.user.toString())
    .indexOf(req.user.id);

  communitypost.comments.splice(removeIndex, 1);

  await communitypost.save();

  res.json(communitypost.comments);
});

// @desc       Upload photo for post
// @route      PUT /api/v1/communityposts/:id/photo
// @access     Private * Only user who is creating post can add photo *
exports.uploadCommunityPostPhoto = asyncHandler(async (req, res, next) => {
  const communitypost = await Communitypost.findById(req.params.id);

  if (!communitypost) {
    return next(
      new ErrorResponse(`Post with id of ${req.params.id} was not found`, 404)
    );
  }

  // Make sure the user is owner of post
  if (
    communitypost.user.toString() !== req.user.id &&
    req.user.role !== 'admin'
  ) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this post`,
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
  file.name = `photo_${communitypost._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Communitypost.findByIdAndUpdate(req.params.id, {
      $push: { image: file.name }
    });

    res.status(200).json({
      success: true,
      data: file.name
    });
  });
});
