const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Profile = require('../models/Profile');
const User = require('../models/User');

const normalize = require('normalize-url');

// @route GET api/v1/profile/me
// @desc  Retrieve profile information
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({
    user: req.user.id
  }).populate('User', ['name', 'avatar']);

  if (!profile) {
    return next(new ErrorResponse(`There is no profile for that user`));
  }

  res.status(200).json(profile);
});

// @route    POST api/v1/profile
// @desc     Create or update a user profile
// @access   Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  const {
    username,
    website,
    location,
    image,
    bio,
    nickname,
    favoriteMeal,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  } = req.body;

  // Build the profile object
  const profileFields = {
    user: req.user.id,
    website: website === '' ? '' : normalize(website, { forceHttps: true }),
    location,
    nickname,
    image,
    bio,
    favoriteMeal
  };

  // Build social object and add to profileFields
  const socialfields = { youtube, twitter, instagram, linkedin, facebook };

  for (let [key, value] of Object.entries(socialfields)) {
    if (value !== undefined && value.length > 0)
      socialfields[key] = normalize(value, { forceHttps: true });
  }
  profileFields.social = socialfields;

  try {
    // Use upsert (Creates a new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.status(200).json({
      success: true,
      data: profile
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/v1/profiles
// @desc     Get all profiles in db
// @access   Public
exports.getProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find().populate('User', ['name', 'avatar']);
  res.json(profiles);
});

// @route  GET api/profile/user/:user_id
// @desc   Get profile by ID
// @access Public
exports.getUserProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({
    user: req.params.user_id
  }).populate('User', ['name', 'avatar']);

  if (!profile) {
    return next(
      new ErrorResponse(`There is no profile for the user ${req.user.name}`)
    );
  }

  res.status(200).json({
    success: true,
    data: profile
  })
});

// @route  DELETE api/v1/profile
// @desc   Delete profile and user {Account Deletion}
// @access Private
exports.deleteProfile = asyncHandler(async (req, res, next) => {
  // TODO: Remove the users associated posts
  // Remove Profile
  await Profile.findOneAndRemove({ user: req.user.id });

  // Remove User
  await User.findOneAndRemove({ _id: req.user.id });

  res.json({ msg: 'User Deleted' });
});

// @desc       Upload photo for profile
// @route      PUT /api/v1/profile/:id/photo
// @access     Private * Only authorized logged in user *
exports.profilePhotoUpload = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findById(req.params.id);

  if (!profile) {
    return next(
      new ErrorResponse(
        `Profile with id of ${req.params.id} was not found`,
        404
      )
    );
  }

  // Make sure the user is owner of blogpost
  if (profile.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this profile`,
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
  file.name = `photo_${profile._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Profile.findByIdAndUpdate(req.params.id, { image: file.name });

    res.status(200).json({
      success: true,
      data: file.name
    });
  });
});
