const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const sendEmail = require('../utils/sendEmail');

// @desc    Send Contact Email
// @route   POST /api/v1/contact
// @access  Public
exports.sendContactEmail = asyncHandler(async (req, res, next) => {
  const { name, email, message } = req.body;

  try {
    await sendEmail({
      name: name,
      email: email,
      subject: 'Saucinwithsnyds',
      message: message
    });

    res.status(200).json({ success: true, data: 'Email Sent' });
  } catch (err) {
    console.error(err);

    return next(new ErrorResponse('Email could not be sent', 500));
  }
});
