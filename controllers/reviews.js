const Recipe = require("../models/recipe");

module.exports = {
new: newReview,
deleteReview
};

async function newReview(req, res) {
    res.render("reviews/new");
}

async function deleteReview(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    const recipe = await Recipe.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    // Rogue user!
    if (!recipe) return res.redirect('/recipes');
    // Remove the review using the remove method available on Mongoose arrays
    recipe.reviews.remove(req.params.id);
    // Save the updated movie doc
    await recipe.save();
    // Redirect back to the movie's show view
    res.redirect(`/recipes/${recipe._id}`);
  }