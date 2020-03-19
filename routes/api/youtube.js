const express = require('express');
const { getYoutube } = require('../../controllers/youtube');

const router = express.Router();

const { protect } = require('../../middleware/auth');

router.route('/').get(protect, getYoutube);

module.exports = router;
