const Recipe = require("../models/recipe");

module.exports = {
    index
}

async function index(req, res) {
    const recipes = await Recipe.find({});
    const user = req.user; 
    console.log(user);
    res.render('main', { title: 'SIMMER', recipes, user});
  }