const express = require('express');
const {
  createBlogpost,
  updateBlogpost,
  deleteBlogpost,
  getBlogposts,
  getBlogpost,
  likeBlogpost,
  unlikeBlogpost,
  commentBlogpost,
  deleteComment,
  uploadBlogPhoto
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

router.route('/unlike/:id').put(protect, unlikeBlogpost);

router.route('/comment/:id').post(protect, commentBlogpost);

router.route('/comment/:id/:comment_id').delete(protect, deleteComment);

router
  .route('/:id')
  .get(getBlogpost)
  .put(protect, authorize('publisher', 'admin'), updateBlogpost)
  .delete(protect, authorize('publisher', 'admin'), deleteBlogpost);

// Upload Photo
router
  .route('/:id/photo')
  .put(protect, authorize('publisher', 'admin'), uploadBlogPhoto);

module.exports = router;
