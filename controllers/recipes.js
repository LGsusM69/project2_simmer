const Recipe = require("../models/recipe");
const User = require("../models/recipe");
const Axios = require("axios");
const apiKey = process.env.API_KEY;

module.exports = {
new: newRecipe,
create,
show,
addToCollection,
delete: deleteRecipe,
edit,
update
};

async function newRecipe(req, res) {
    res.render("recipes/new",);
}

async function create(req, res) {
  console.log("create");
  let template = req.body;

  //let owner;
  if(req.user) {
    template.owner = req.user._id;
 
  }
    // Remove empty properties so that defaults will be applied
    for (let key in template) {
        if (template[key] === '') delete req.body[key];
    }

  try{

    const recipe = await Recipe.create(template);
    res.redirect("/recipes/new");
  } catch(err) {
    console.log(err);
    //res.render("", {errorMsg: err.message});
  }
}

async function show(req, res) {

  let dbRecipe;
  let aPIRecipe;
  try {
    dbRecipe = await Recipe.findById(req.params.id).populate();
  } catch(err) {

  }

  try{
  } catch(err) {

  }

  try {
    const { id } = req.params;
    const response = await Axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
    aPIRecipe = response.data;
  } catch (error) {

  }
  if(dbRecipe) res.render("recipes/showDB", {recipe: dbRecipe });
  else if(aPIRecipe) res.render('recipes/showAPI', { recipe: aPIRecipe });
}

async function addToCollection(req, res) {
  console.log("add to collection");
  //get collection
  const user = req.user;
  //get recipeID"
  const recipeId = req.body.recipeId
  //get recipe:
  const recipe = await Recipe.findById(recipeId);
  //add recipe to userCollection
  
  let exists = false;
  user.collection.forEach(function(element)
    {
    if(element == recipeId) exists = true;
  }
  );
  if(exists) return;

  try {
    user.collection.push(recipe);
      // Save any changes made to the movie doc
    await user.save();
    res.redirect("/");
  } catch (err) {
    console.log("couldnt add to collection");
    console.log(err);
  }
}

async function deleteRecipe(req, res) {
  console.log("deleteRecipe: called");
  try {
    const collection = req.user.collection
    collection.pull(req.params.id);
    req.user.save();
    console.log(`deleteRecipe: deleted`);
    
  } catch(err) {
      console.log(err);
      console.log("deleteRecipe: failed");
  }
  res.redirect("/");
}

async function edit(req, res) {
  console.log("edit: called");

  const recipe = await Recipe.findById(req.params.id).populate();

  res.render("recipes/edit", {recipe: recipe});

}

async function update(req, res) {
  console.log("Update: called");

  try {
    let recipe = await Recipe.findById(req.params.id);
  
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    for(let key in req.body) {
      recipe[key] = req.body[key];
      await recipe.save();
      res.redirect(`/recipes/${req.params.id}/edit?recipeId=${req.params.id}`);
    }

  } catch(err) {
    console.log("error: ", {err});
    res.redirect(`/recipes/${req.params.id}/edit`);
  }

}

