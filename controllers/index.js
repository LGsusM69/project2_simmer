const Recipe = require("../models/recipe");

module.exports = {
    index
}

async function index(req, res) {
    const recipes = await Recipe.find({});
    res.render('main', { title: 'SIMMER', recipes });
}