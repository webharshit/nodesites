const mongoose = require("mongoose");

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

userSchema.methods.addSite = () => {
  const siteid = this.sites.site.findIndex((site) => {
    return site.siteid.toString() === site._id.toString();
  });
  return this.save();
};

userSchema.methods.removesite = (siteid) => {
  const updateUserSite = this.sites.site.filter((site) => {
    return this.siteid.toString !== siteid.toString();
  });
};

module.exports = mongoose.model("User", userSchema);
