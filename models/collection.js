const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  recipes: [{
    type: Schema.Types.ObjectId,
    ref: "Recipe"
  }]
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;