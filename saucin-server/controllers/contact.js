const Errorresponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Send Contact Email
// @route   POST /api/v1/contact
// @access  Public
exports.sendContactEmail = asyncHandler(async (req, res, next) => {
  console.log('Data: ', req.body);
  res.json({ msg: 'Message has been received' });
});
