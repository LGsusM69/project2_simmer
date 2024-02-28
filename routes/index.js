var express = require('express');
var router = express.Router();
//const recipe = require('../models/recipe');

const indexCtrl = require("../controllers/index");

const data = require("../data/recipe.js");

/* GET home page. */
/*router.get('/', function(req, res, next) {
  recipes = data.recipes;
  res.render('main', { title: 'Simmer', recipes });
});*/

router.get("/", indexCtrl.index);

module.exports = router;
