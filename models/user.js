//INPORTING MONGOOSE
const mongoose = require("mongoose");

// CREATING SCHEMA
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role:{
    type:String,
    enum:['user','admin'],
    default:'user'
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword:{
    type: String,
    required: true
  },
  passwordchangedat:{
    type: Date
  },
  mobileno: {
    type: String,
    required: true,
  },
  createdon:{
    type: Date,
    required:true,
    default: new Date()
  },
  sites: {
    site: [
      {
        siteid: {
          type: Schema.Types.ObjectId,
          ref: "Sites",
          // required: true,
        },
        // ref: sites
      }
    ],
  },
});

//EXPORTING SCHEMA
module.exports = mongoose.model("User", userSchema);
