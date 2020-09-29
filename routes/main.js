const express = require("express"),
  mongoose = require("mongoose"),
  mongodb = require("mongodb"),
  bodyParser = require("body-parser");

const router = express.Router();
const usermodel = require("../models/user");
const sitemodel = require("../models/site");

const maincont = require("../controller/main");
router.get("/", (req, res) => {
  res.render("main/home", {
    title: "Home",
    path: "home",
  });
});
router.get("/contact", (req, res) => {
  res.render("main/contact", {
    title: "Contact Us",
    path: "contact",
  });
});
router.get("/register", (req, res) => {
  res.render("main/register", {
    title: "Register",
    path: "register",
  });
});
router.post("/register", maincont.getusers);

router.get("/login", (req, res) => {
  res.render("main/login", {
    title: "Login",
    path: "login",
    err: err,
  });
});
router.post("/login", (req, res) => {
  let loginerr;
  users();
  console.log(userlist);
  userlist.forEach((user) => {
    console.log(user);
    if (user.email == req.body.email) {
      if (user.password == req.body.password) {
      } else {
        loginerr = "Password Not Match";
        console.log(loginerr);
      }
      return (err = loginerr);
    }
  });
  if (loginerr != undefined) {
    res.redirect("/login");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
