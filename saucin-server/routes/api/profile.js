const express = require('express');
const { getMe, createProfile } = require('../../controllers/profile');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const { protect } = require('../../middleware/auth');

router.get('/me', protect, getMe);
router.post(
  '/',
  protect,
  [
    check('username', 'Username is required')
      .not()
      .isEmpty(),
    check('favoriteFoods', 'Please add some of your favorite foods')
      .not()
      .isEmpty()
  ],
  createProfile
);

module.exports = router;
