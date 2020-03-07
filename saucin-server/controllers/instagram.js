const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const axios = require('axios');

// @desc    Get Saucinwithsnyds Instagram Account
// @route   GET https://api.instagram.com/{user-id}
// @access  Public
exports.getInstagram = asyncHandler(async (req, res, next) => {
  axios
    .get(
      `https://graph.instagram.com/17841401482270651?fields=id,username&access_token=IGQVJWRzV5RU5aRUgxR3dldldrUEZAUWlBHdE9qazJpUDJYUURHWkMwX3FTM0hvYVhVUFBBd0RaSU1wWkwxWGxPRDVIZATh3ZATVKTzd6ZAjl2cHlsQWFaMHk4WUw0Xy04aHJZAQkxhZAmJiX29uNXh0R212RW9tSXlUeERpQVE0`
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
});
