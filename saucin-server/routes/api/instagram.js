const express = require('express');
const { getInstagram } = require('../../controllers/instagram');

const router = express.Router();

const { protect } = require('../../middleware/auth');

router.route('/').get(protect, getInstagram);

module.exports = router;
