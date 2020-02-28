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
