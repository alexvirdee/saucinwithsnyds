const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to Atlas
connectDB();

const app = express();

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

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
