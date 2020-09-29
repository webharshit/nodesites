//IMPORTING MONGOOSE
const mongoose = require("mongoose");

// CREATING SCHEMA
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
    // required:true
  },
});

//EXPORTING SCHEMA
module.exports = mongoose.model("Site", siteSchema);
