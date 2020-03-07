const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const axios = require('axios');

// @desc    Get Saucinwithsnyds Instagram Account
// @route   GET https://api.instagram.com/{user-id}
// @access  Public
exports.getInstagram = asyncHandler(async (req, res, next) => {
  axios
    .get(
      `https://graph.instagram.com/17841401482270651?fields=id,username&access_token=IGQVJXa3p0NEwyZA2ZA4U05NbzJLQlhDQ1N3eHlXaS1jSFBEcEI3SWh4N0ZAOQXp0ZAFlrbFBoSEV1OVNvUEZAORl9vVnZALM1F1QXg2QXhMM3ZAlMHVyUUVqdFBSUzRweUdCZAV9ITzJTQTNHejh6YXZAiYW5HZAEZAXdnBDTGo4MVpz`
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
});
