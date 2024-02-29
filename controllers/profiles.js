const User = require("../models/user");
const Recipe = require("../models/recipe");
const data = require("../data/recipe");

module.exports = {
index
};

async function index(req, res) {
    console.log("arenitaaaaaa");
    const recipes = await Recipe.find({});
    let savedRecipes = [{}];
    let user;
    if(req.user) {
        user = req.user;
        console.log("lluser: ");
        user.populate("collection");
        savedRecipes = user.collection;
        console.log(typeof savedRecipes);

    } else{
        user = {id: 0}
    }
    res.render("profile/index", {title: "SIMMER", recipes, savedRecipes, user});
}