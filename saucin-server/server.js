const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const colors = require('colors');
const fileupload = require('express-fileupload');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Route files
const auth = require('./routes/api/auth');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const blogposts = require('./routes/api/blogposts');
const communityposts = require('./routes/api/communityposts');
const recipes = require('./routes/api/recipes');
const contact = require('./routes/api/contact');
const instagram = require('./routes/api/instagram');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to Atlas
connectDB();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Developer loggin middleware for http requests
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// File Uploading
app.use(fileupload());

// Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/profile', profile);
app.use('/api/v1/blogposts', blogposts);
app.use('/api/v1/communityposts', communityposts);
app.use('/api/v1/recipes', recipes);
app.use('/api/v1/contact', contact);
app.use('/api/v1/instagram', instagram);

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('API is running'));

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on PORT:${process.env.PORT}`
      .blue.bold
  )
);

module.exports = app;
