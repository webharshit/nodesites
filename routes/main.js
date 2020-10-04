const express = require('express'),
  mongoose = require('mongoose'),
  mongodb = require('mongodb'),
  bodyParser = require('body-parser');

const router = express.Router();
// const usermodel = require("../models/user");
let error='',success='';
const sites = require('../models/site');
const maincont = require('../controller/main');
router.get('/', maincont.getsite, (req, res) => {
  res.render('main/home', {
    title: 'Home',
    path: 'home',
    sites: site,
    err: error,
    success: success,
    currentdate: Date.now(),
    isauth: req.session.isLoggedIn,
  });
  error = '';
  success = '';
});
// router.get('/:page', maincont.getsitepages, (req, res) => {
//   console.log(req.params);
//   res.render('main/home', {
//     title: 'Home',
//     path: 'home',
//     sites: site,
//     err: error,
//     success: success,
//     currentdate: Date.now(),
//     isauth: req.session.isLoggedin,
//   });
//   error = '';
//   success = '';
// });

router.post('/addSite', async (req, res) => {
  try {
    const newsite = await sites.create({
      title: req.body.title,
      subtitle: req.body.subtitle,
      link: req.body.link,
      discription: req.body.discription,
      userid: req.body.userid,
    });
    return (success = 'Added Successfully'), res.redirect('/');
  } catch (err) {
    console.log(err)
    return (error = 'Invalid Data Entered'), res.redirect('/');
  }
});
router.get('/contact',maincont.contact)
// router.get("/contact", (req, res) => {
//   res.render("main/contact", {
//     title: "Contact Us",
//     path: "contact",
//   });
// });
// router.get("/register", (req, res) => {
//   res.render("main/register", {
//     title: "Register",
//     path: "register",
//   });
// });
// router.post("/register", maincont.getusers);

// router.get("/login", (req, res) => {
//   res.render("main/login", {
//     title: "Login",
//     path: "login",
//     err: err,
//   });
// });
// router.post("/login", (req, res) => {
//   let loginerr;
//   users();
//   console.log(userlist);
//   userlist.forEach((user) => {
//     console.log(user);
//     if (user.email == req.body.email) {
//       if (user.password == req.body.password) {
//       } else {
//         loginerr = "Password Not Match";
//         console.log(loginerr);
//       }
//       return (err = loginerr);
//     }
//   });
//   if (loginerr != undefined) {
//     res.redirect("/login");
//   } else {
//     res.redirect("/");
//   }
// });

module.exports = router;
