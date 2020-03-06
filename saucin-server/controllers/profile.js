const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Profile = require('../models/Profile');
const User = require('../models/User');

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
    favoriteMeal,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  } = req.body;

  // Build the profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (username) profileFields.username = username;
  if (website) profileFields.website = website;
  if (location) profileFields.location = location;
  if (image) profileFields.image = image || '';
  if (bio) profileFields.bio = bio;
  if (favoriteMeal) {
    profileFields.favoriteMeal = favoriteMeal
      .split(',')
      .map(favoriteMeal => favoriteMeal.trim());
  }

  // Build the social object
  profileFields.social = {};
  if (youtube) profileFields.social.youtube = youtube;
  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;
  if (linkedin) profileFields.social.linkedin = linkedin;
  if (instagram) profileFields.social.instagram = instagram;

  if (req.file) {
    profileFields.image = '/uploads/' + req.file.filename;
  }

  let profile = await Profile.findOne({ user: req.user.id });

  if (profile) {
    // Update
    profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: 'Profile Updated',
      data: profile
    });
  }

  // Create
  profile = new Profile(profileFields);

  await profile.save();
  res.json(profile);
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

  res.json(profile);
});

// @route  DELETE api/profile
// @desc   Delete profile and user
// @access Private
exports.deleteProfile = asyncHandler(async (req, res, next) => {
  // TODO: Remove the users associated posts
  // Remove Profile
  await Profile.findOneAndRemove({ user: req.user.id });

  // Remove User
  await User.findOneAndRemove({ _id: req.user.id });

  res.json({ msg: 'User Deleted' });
});
