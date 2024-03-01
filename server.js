var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
const axios = require('axios');


require('dotenv').config();
const api_key = process.env.API_KEY;
console.log(process.env.API_KEY);

require('./config/database');
require('./config/passport');

const recipeData = require("./data/recipe");

var indexRouter = require('./routes/index');
const recipesRouter = require("./routes/recipes");
const reviewsRouter = require("./routes/reviews");
const profilesRouter = require("./routes/profiles");
const mainRouter = require('./routes/main');

var usersRouter = require('./routes/users');
const { request } = require('http');
const { db } = require('./models/recipe');


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


app.use('/', indexRouter);
app.use("/recipes", recipesRouter);
app.use("/reviews", reviewsRouter);
app.use("/profiles", profilesRouter);
app.use('/', mainRouter);


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
