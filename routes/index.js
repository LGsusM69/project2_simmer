var express = require('express');
var router = express.Router();
const passport =  require('passport');

const indexCtrl = require("../controllers/index");

const data = require("../data/recipe.js");

/* GET home page. */
/*router.get('/', function(req, res, next) {
  recipes = data.recipes;
  res.render('main', { title: 'Simmer', recipes });
});*/

router.get("/", indexCtrl.index);

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    prompt: "select_account"
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
