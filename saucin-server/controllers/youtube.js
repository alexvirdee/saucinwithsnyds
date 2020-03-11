const asyncHandler = require('../middleware/async');
const axios = require('axios');

// @desc  Get YouTube Videos
// @route GET https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCpTcPmCRuve81pg-5s4tapg&key=[YOUR_API_KEY]
// @access Public
exports.getYoutube = asyncHandler(async (req, res, next) => {
  const channelId = 'UCpTcPmCRuve81pg-5s4tapg';
  const API_KEY = process.env.YOUTUBE_API_KEY;

  const youtube_res = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
  );

  res.status(200).json({
    success: true,
    data: youtube_res.data
  });
});

// Construct video URL
// http://www.youtube.com/watch?v={video_id_here}
