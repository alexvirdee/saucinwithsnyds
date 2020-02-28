const express = require('express');
const {
  getProfile,
  createProfile,
  getProfiles,
  getUserProfile,
  deleteProfile
} = require('../../controllers/profile');

const router = express.Router();

const { protect } = require('../../middleware/auth');

router.get('/me', protect, getProfile);
router.post('/', protect, createProfile);
router.get('/', getProfiles);
router.get('/user/:user_id', getUserProfile);
router.delete('/', protect, deleteProfile);

module.exports = router;
