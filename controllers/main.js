const axios = require('axios');
require('dotenv').config();


const apiKey = process.env.API_KEY;


async function getMainPage(req, res) {
   console.log('GET request received for /');
   res.render('main');
}


async function searchRecipes(req, res) {
   const { query } = req.body;
   console.log(`POST request received for /search with query: ${query}`);
   try {
       const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`)
       const recipes = response.data.results;
       res.render('results', { recipes });
   } catch (error) {
       console.error('Error fetching recipes:', error.message);
       res.status(500).send('failed post');
   }
}


async function getRecipeDetail(req, res) {
   const { id } = req.params;
   console.log(`GET request received for /recipe/${id}`);
   try {
       const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
       const recipe = response.data;
       res.render('recipe', { recipe });
   } catch (error) {
       console.error('Error fetching recipe:', error.message);
       res.status(500).send('failed get');
   }
}


module.exports = {
   getMainPage,
   searchRecipes,
   getRecipeDetail
};
