const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String
  }, {
    timestamps: true
  });


const collectionSchema = new Schema({
    recipe: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }]
});



module.exports = mongoose.model("User", userSchema);