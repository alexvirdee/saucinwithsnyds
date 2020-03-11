const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const axios = require('axios');

// @desc  Get Saucinwithsnyds YouTube Videos
// @route GET https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCpTcPmCRuve81pg-5s4tapg&key=[YOUR_API_KEY]
// @access Public
exports.getYoutube = asyncHandler(async (req, res, next) => {
  const channelId = 'UCpTcPmCRuve81pg-5s4tapg';

  const youtube_res = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
  );

  if (req.err) {
    return next(new ErrorResponse(`Could not make youtube request`));
  }

  res.status(200).json({
    success: true,
    data: youtube_res.data
  });
});

// Construct video URL
// http://www.youtube.com/watch?v={video_id_here}
