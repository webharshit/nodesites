//IMPORTIN MODELS
const mongoose= require('mongoose')
const sites = require("../models/site");

// SETTING USERS CONTROLLER
exports.getsitepages = async (req,res,next) => {
  try {
    let Pagereq= req.params.page.split('=')[1]
    console.log(pagereq)
    let skipsites= (Pagereq -1)*12
    console.log(skipsites)
    return site = await sites.find().skip(skipsites).limit(12),next();
    
  } catch (err) {
    return site= undefined,next();
    }
};
exports.getsite = async (req,res,next) => {
  try {
    return site = await sites.find(),next();
  } catch (err) {
     return site= undefined,next();
  }
};



exports.addSite = async (req, res, next) => {
  try {
    const newsite = await sitemodel.create({
      title:req.body.title,
      subtitle: req.body.subtitle,
      link:req.body.link,
      discription: req.body.discription,
      userid: req.body.userid
    });
    return success='Site Added',next()
  } catch (err) {
    return error= err,next()  }
};

// exports.getoneuser = async (req, res, next) => {
//   try {
//     const gotuser = await user.findOne({ email: req.body.email });
//     res.status(200).json({
//       status: "success",
//       // results:users.length,
//       data: {
//         gotuser,
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: "INVALID DATA ENTERED",
//     });
//   }
// };

// exports.updateUser = async (req, res) => {
//   try {
//     const updateuser = await user.findOneAndUpdate(
//       { email: req.body.email },
//       req.body,
//       {
//         new: true,
//       }
//     );
//     res.status(200).json({
//       status: "success",
//       // results:users.length,
//       data: {
//         updateuser,
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: "INVALID DATA ENTERED",
//     });
//   }
// };

// exports.deleteuser = async (req, res) => {
//   try {
//     const deluser = await user.findOneAndDelete({ email: req.body.email });
//     res.status(200).json({
//       status: "succuss",
//       data: {
//         deletedUser: deluser,
//         message: "User DELETED SUCCESS",
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: "INVALID DATA ENTERED",
//     });
//   }
// };





exports.contact= (req,res,next)=>{
  res.render('main/contact',{
    path: 'contact',
    title:'Contact'
  })
}