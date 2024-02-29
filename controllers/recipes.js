const Recipe = require("../models/recipe");

module.exports = {
new: newRecipe,
create,
show
};

async function newRecipe(req, res) {
    res.render("recipes/new",);
}

async function create(req, res) {
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
  try{
    const recipe = await Recipe.create(req.body);
    //res.redirect();
  } catch(err) {
    console.log(err);
    //res.render("", {errorMsg: err.message});
  }
}

async function show(req, res) {
  const recipe = await Recipe.findById(req.params.id).populate();
  req.render("recipes/show", {title : recipe.title, recipe});
}