const User = require("../models/user");
const Recipe = require("../models/recipe");
const data = require("../data/recipe");

module.exports = {
index
};

async function index(req, res) {
    const recipes = await Recipe.find({});
    const savedRecipes = data.savedRecipes;
    res.render("profile/index", {recipes, savedRecipes});
}