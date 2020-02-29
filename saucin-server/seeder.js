const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Load models
const User = require('./models/User');
const Profile = require('./models/Profile');
const Recipe = require('./models/Recipe');
const Blogpost = require('./models/Blogpost');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Read JSON files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);

const profiles = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/profiles.json`, 'utf-8')
);

const recipes = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/recipes.json`, 'utf-8')
);

const blogposts = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/blogposts.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    await User.create(users);
    await Profile.create(profiles);
    await Recipe.create(recipes);
    await Blogpost.create(blogposts);
    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Profile.deleteMany();
    await Recipe.deleteMany();
    await Blogpost.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
