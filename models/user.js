const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    recipe: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }]
});
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, min: 8},
    collection: {type: collectionSchema, required: true}
});


module.exports = mongoose.model("User", userSchema);