const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, required: true},
    comment: String
});

const recipeSchema = new Schema({
    title: {type: "String", required: true},
    description:{type: String, required: true},
    ingredients:{type: [String], required: true},
    instructions:{type: String, required: true},
    imgURL: String,
    reviews: [reviewSchema]
});

module.exports = mongoose.model("Recipe", recipeSchema);