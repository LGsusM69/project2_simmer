var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
require('./config/database');

const recipes = require("./data/recipe");

var indexRouter = require('./routes/index');
const recipesRouter = require("./routes/recipes");
const reviewsRouter = require("./routes/reviews");
const profilesRouter = require("./routes/profiles");
var usersRouter = require('./routes/users');

var app = express();

const port = 3000;
app.get('/', (req, res) => {
  res.render('./main', {title: "simmer", recipes})
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
