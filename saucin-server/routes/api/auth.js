const express = require('express');
const {
  register,
  getAuthUser,
  login,
  logout,
  updateDetails,
  updatePassword,
  forgotPassword
} = require('../../controllers/auth');

const router = express.Router();

const { protect } = require('../../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/', protect, getAuthUser);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.post('/forgotpassword', forgotPassword);

module.exports = router;
