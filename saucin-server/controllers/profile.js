const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Profile = require('../models/Profile');
const User = require('../models/User');

// @route GET api/profile/me
// @desc  Retrieve profile information
// @access Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({
    user: req.user.id
  }).populate('user', ['name', 'avatar']);

  if (!profile) {
    return next(new ErrorResponse('There is no profile for this user'));
  }

  res.status(200).json({
    success: true,
    data: profile
  });
});

// @route POST api/profile
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

  if (profile) {
    // Update
    profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true }
    );

    return res.json(profile);
  }

  // Create
  profile = new Profile(profileFields);

  await profile.save();
  res.json(profile);
});
