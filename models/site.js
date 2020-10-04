//IMPORTING MONGOOSE
const mongoose = require("mongoose");

// CREATING SCHEMA
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle:{
    type:String,
    required:true
  },
  createdon:{
    type:Date,
    required:true,
    default:Date.now()
  },
  discription: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  userid:{
    type: String,
    required:true
  },
  lastUpdatedon:{
    type:Date
  }

});

//EXPORTING SCHEMA
module.exports = mongoose.model("site", siteSchema);
