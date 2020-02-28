const express = require('express');
const { getProfile, createProfile } = require('../../controllers/profile');

const router = express.Router();

const { protect } = require('../../middleware/auth');

router.get('/me', protect, getProfile);
router.post('/', protect, createProfile);

module.exports = router;
