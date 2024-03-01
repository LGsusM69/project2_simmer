const Recipe = require("../models/recipe");

module.exports = {
    index
}

async function index(req, res) {
    const recipes = await Recipe.find({});
    let collection;
    if(req.user) collection = req.user.collection;
    res.render('main', { title: 'SIMMER', recipes,collection });
    
}