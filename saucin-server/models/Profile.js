const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  username: {
    type: String,
    require: true
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  nickname: {
    type: String
  },
  bio: {
    type: String
  },
  image: {
    type: String,
    default: 'no-photo.jpg'
  },
  favoriteMeal: {
    type: [String],
    required: true
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
