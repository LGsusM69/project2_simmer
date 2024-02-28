const Recipe = require("../models/recipe");

module.exports = {
    index
}

async function index(req, res) {
    const recipes = await Recipe.find({});
    const asdf = res.
    res.render('main', { title: 'SIMMER', recipes });
  }