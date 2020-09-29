//IMPORTIN MODELS
const user = require("../models/user");

const sites = require("../models/site");

// SETTING USERS CONTROLLER
exports.getusers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "INVALID DATA ENTERED",
    });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const newuser = await usermodel.create(req.body);
    res.status(201).json({
      status: "succses",
      data: {
        user: newuser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "INVALID DATA ENTERED",
    });
  }
};

exports.getoneuser = async (req, res, next) => {
  try {
    const gotuser = await user.findOne({ email: req.body.email });
    res.status(200).json({
      status: "success",
      // results:users.length,
      data: {
        gotuser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "INVALID DATA ENTERED",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updateuser = await user.findOneAndUpdate(
      { email: req.body.email },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      // results:users.length,
      data: {
        updateuser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "INVALID DATA ENTERED",
    });
  }
};

exports.deleteuser = async (req, res) => {
  try {
    const deluser = await user.findOneAndDelete({ email: req.body.email });
    res.status(200).json({
      status: "succuss",
      data: {
        deletedUser: deluser,
        message: "User DELETED SUCCESS",
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "INVALID DATA ENTERED",
    });
  }
};
