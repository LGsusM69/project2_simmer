const User = require("../models/user");
const Recipe = require("../models/recipe");
const data = require("../data/recipe");

module.exports = {
index
};

async function index(req, res) {
    console.log("arenitaaaaaa");
    const recipes = await Recipe.find({});
    //const savedRecipes = data.savedRecipes;
    //const savedRecipes = await Recipe.find({})
    let savedRecipes = [{}];
    if(req.user) {
        console.log("lluser: ");
        const user = req.user;
        user.populate("collection");
        savedRecipes = user.collection;
        console.log(typeof savedRecipes);

    }
    res.render("profile/index", {title: "SIMMER", recipes, savedRecipes});
}