var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');

require('dotenv').config();
require('./config/database');
require('./config/passport');

const recipeData = require("./data/recipe");

var indexRouter = require('./routes/index');
const recipesRouter = require("./routes/recipes");
const reviewsRouter = require("./routes/reviews");
const profilesRouter = require("./routes/profiles");
var usersRouter = require('./routes/users');
const { request } = require('http');

var app = express();

const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.user = req.user;
  console.log("request", req.user)
  console.log("response", res.locals.user);
  next();
});

// app.get('/', (req, res) => {
//  const user = req.user; // Assuming req.user is set by a middleware like passport.js
//   console.log("serveruser:", req.user);
//   res.render('./partials/header', { title: 'Simmer',});
// });
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/recipes", recipesRouter);
app.use("/reviews", reviewsRouter);
app.use("/profiles", profilesRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
