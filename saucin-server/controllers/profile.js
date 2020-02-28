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
  }).populate('user', ['name', 'avatar']);

  if (!profile) {
    return next(new ErrorResponse('There is no profile for this user'));
  }

  res.status(200).json(profile);
});

// @route POST api/v1/profile
// @desc Create or update a user profile
// @access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  const {
    username,
    website,
    location,
    bio,
    favoriteFoods,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  } = req.body;

  // Build the profile object
  const profileFields = {};
  if (username) profileFields.username = username;
  if (website) profileFields.website = website;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;
  if (favoriteFoods) {
    profileFields.favoriteFoods = favoriteFoods
      .split(',')
      .map(favoriteFoods => favoriteFoods.trim());
  }

  // Build the social object
  profileFields.social = {};
  if (youtube) profileFields.social.youtube = youtube;
  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;
  if (linkedin) profileFields.social.linkedin = linkedin;
  if (instagram) profileFields.social.instagram = instagram;

  let profile = await Profile.findOne({ user: req.user.id });

  // Create
  profile = new Profile(profileFields);

  await profile.save();
  res.json(profile);
});
