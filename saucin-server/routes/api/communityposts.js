const express = require('express');
const {
  createCommunitypost,
  updateCommunitypost,
  deleteCommunitypost,
  getCommunityposts,
  getCommunitypost,
  likeCommunitypost,
  unlikeCommunitypost,
  commentCommunitypost,
  deleteComment,
  uploadCommunityPostPhoto
} = require('../../controllers/communityposts');

const Communitypost = require('../../models/Communitypost');

const router = express.Router();

const advancedResults = require('../../middleware/advancedResults');
const { protect } = require('../../middleware/auth');

router
  .route('/')
  .get(getCommunityposts)
  .post(protect, createCommunitypost);

router.route('/like/:id').put(protect, likeCommunitypost);

router.route('/unlike/:id').put(protect, unlikeCommunitypost);

router.route('/comment/:id').post(protect, commentCommunitypost);

router.route('/commend/:id/:comment_id').delete(protect, deleteComment);

router
  .route('/:id')
  .get(getCommunitypost)
  .put(protect, updateCommunitypost)
  .delete(protect, deleteCommunitypost);

// Upload photo for community post
router.route('/:id/photo').put(protect, uploadCommunityPostPhoto);

module.exports = router;
