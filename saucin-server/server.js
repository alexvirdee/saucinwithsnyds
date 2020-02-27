const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Route files
const home = require('./routes/index');
const auth = require('./routes/auth');
const users = require('./routes/users');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to Atlas
connectDB();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Developer loggin middleware for http requests
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/home', home);
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on PORT:${process.env.PORT}`
      .blue.bold
  )
);

module.exports = app;
