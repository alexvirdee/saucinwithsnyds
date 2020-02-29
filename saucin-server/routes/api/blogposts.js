const express = require('express');
const { createBlogpost } = require('../../controllers/blogposts');

const Blogpost = require('../../models/Blogpost');

const router = express.Router();

const advancedResults = require('../../middleware/advancedResults');
const { protect, authorize } = require('../../middleware/auth');

router
  .route('/blogposts')
  .post(protect, authorize('publisher', 'admin'), createBlogpost);

module.exports = router;
