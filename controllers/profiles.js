const User = require("../models/user");
const Recipe = require("../models/recipe");
const data = require("../data/recipe");

module.exports = {
index
};

async function index(req, res) {
    if((req.user) === undefined) {
        res.redirect("auth/google");
        return;
    }
    let recipes = await Recipe.find({});
    let collection;
    if(req.user) collection = req.user.collection;
    let user;
    if(req.user) {
        user = req.user;
        user.populate("collection");
        savedRecipes = user.collection;

    } else{
        user = {id: 0}
    }
    recipes = savedRecipes;
    res.render("profile/index", {title: "SIMMER", recipes, collection, user});
}