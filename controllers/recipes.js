const Recipe = require("../models/recipe");

module.exports = {
new: newRecipe
};

async function newRecipe(req, res) {
    res.render("recipes/new");
}