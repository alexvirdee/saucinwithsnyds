const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const axios = require('axios');

// @desc    Get Saucinwithsnyds Instagram Account
// @route   GET https://api.instagram.com/{user-id}
// @access  Public
exports.getInstagram = asyncHandler(async (req, res, next) => {

  const appId = process.env.INSTAGRAM_CLIENT_ID
  const secret = process.env.INSTAGRAM_CLIENT_SECRET

  const access_token = await axios.get(`https://api.instagram.com/`)
    
    res.status(200).json({
      success: true,
      data: inst_res.data
    });
});
