const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String,
    collection: [{type: Schema.Types.ObjectId, ref: "Recipe", required: true, default: []}]
  }, {
      timestamps: true
  });



module.exports = mongoose.model("User", userSchema);