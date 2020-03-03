const express = require('express');
const {
  createBlogpost,
  updateBlogpost,
  deleteBlogpost,
  getBlogposts,
  getBlogpost,
  likeBlogpost
} = require('../../controllers/blogposts');

const Blogpost = require('../../models/Blogpost');

const router = express.Router();

const advancedResults = require('../../middleware/advancedResults');
const { protect, authorize } = require('../../middleware/auth');

router
  .route('/')
  .get(getBlogposts)
  .post(protect, authorize('publisher', 'admin'), createBlogpost);

router.route('/like/:id').put(protect, likeBlogpost);

router
  .route('/:id')
  .get(getBlogpost)
  .put(protect, authorize('publisher', 'admin'), updateBlogpost)
  .delete(protect, authorize('publisher', 'admin'), deleteBlogpost);

module.exports = router;
