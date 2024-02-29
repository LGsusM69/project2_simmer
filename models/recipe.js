const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    rating: {type: Number, min: 1, max: 5, required: true},
    comment: String
}, {timestamps: true});

const recipeSchema = new Schema({
    title: {type: "String", required: true},
    description:{type: String, required: true},
    ingredients:{type: [String], required: true},
    privacy: {type: String, required: true,
        enum: ["public", "private"], default: "private"},
    instructions:{type: String, required: true},
    imgURL: String,
    reviews: [reviewSchema],
    owner: {type: Schema.Types.ObjectId, ref: "User", required: false}
}, {timestamps: true});

module.exports = mongoose.model("Recipe", recipeSchema);