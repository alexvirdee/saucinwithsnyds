const express = require('express');
const {
  createBlogpost,
  updateBlogpost,
  getBlogposts,
  getBlogpost
} = require('../../controllers/blogposts');

const Blogpost = require('../../models/Blogpost');

const router = express.Router();

const advancedResults = require('../../middleware/advancedResults');
const { protect, authorize } = require('../../middleware/auth');

router
  .route('/')
  .get(getBlogposts)
  .post(protect, authorize('publisher', 'admin'), createBlogpost);

router
  .route('/:id')
  .get(getBlogpost)
  .put(protect, authorize('publisher', 'admin'), updateBlogpost);

module.exports = router;
