const express = require('express');
const { getMe } = require('../../controllers/profile');

const router = express.Router();

const { protect } = require('../../middleware/auth');

router.get('/me', protect, getMe);

module.exports = router;
