const Recipe = require("../models/recipe");
const User = require("../models/recipe");
const Axios = require("axios");
const apiKey = process.env.API_KEY;

module.exports = {
new: newRecipe,
create,
show,
addToCollection
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
  //const recipe = await Recipe.findById(req.params.id).populate();
  //console.log("elaidi: " + req.params.id);

  //res.render("recipes/show", {title : recipe.title, recipe});

  const { id } = req.params;
   //console.log(`GET request received for /recipe/${id}`);
   try {
    
    const response = await Axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
    const recipe = response.data;
    res.render('recipes/show', { recipe });
  } catch (error) {
    console.log("arenita");
       console.error('Error fetching recipe:', error.message);
       res.status(500).send('failed get');
   }
}

async function addToCollection(req, res) {
//get collection
const user = req.user;
//get recipeID"
const recipeId = req.body.recipeId
//get recipe:
const recipe = await Recipe.findById(recipeId);
//add recipe to userCollection
//if(User.exists({collection: recipeId})) {
  //console.log("ya existe we");
  console.log("antes:");
  
let exists = false;
user.collection.forEach(function(element)
  {
    if(element == recipeId) exists = true;
  }
);
if(exists) return;
  //console.log(exists);

  console.log("despues");
  //return;
//}
try {
    user.collection.push(recipe);
    // Save any changes made to the movie doc
    await user.save();
  } catch (err) {
    console.log("My glases... i lost my glases");
    console.log(err);
  }


}