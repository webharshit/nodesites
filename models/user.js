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
  password: {
    type: String,
    required: true,
  },
  mobileno: {
    type: String,
    required: true,
  },
  sites: {
    site: [
      {
        siteid: {
          type: Schema.Types.ObjectId,
          ref: "Sites",
          required: true,
        },
      },
    ],
  },
});

//EXPORTING SCHEMA
module.exports = mongoose.model("User", userSchema);
