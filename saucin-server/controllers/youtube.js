const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const axios = require('axios');

// @desc  Get Saucinwithsnyds YouTube Videos
// @route GET https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCpTcPmCRuve81pg-5s4tapg&key=[YOUR_API_KEY]
// @access Public
exports.getYoutube = asyncHandler(async (req, res, next) => {
  let channelId = 'UCpTcPmCRuve81pg-5s4tapg';

  axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
});
