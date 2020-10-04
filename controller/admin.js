const session = require('express-session');
const user = require('../models/user');
const mongodb = require('mongodb')
const ObjectID = require('mongodb').ObjectId
const sites = require('../models/site');
const mongoose = require('mongoose')
const bcypt = require('bcrypt');
const flash = require('flash');
const site = require('../models/site');
const { findOneAndDelete } = require('../models/user');
let error = '',
    success = '';
exports.getlogin = (req, res, next) => {
    res.render('admin/login', {
        path: 'login',
        title: 'Login',
        err: error,
        success: success
    });
    error = ''
    success = ''
};

exports.postlogin = async (req, res, next) => {
    const users = await user.findOne({email: req.body.email})
    if (users == 0) {
        return(error = `User Not Found`),
        res.redirect('/login');
    } else {
        const matched = await bcypt.compare(req.body.password, users.password)
        if (! matched) {
            return(error = 'Password Not Match '),
            res.redirect('/login');
        } else {
            req.session.isLoggedIn = true;
            req.session.user = await user.findOne({email: req.body.email})
            await req.session.save()
            return(success = 'Logged In '),
            res.redirect('/')

        }
    }
}

exports.getreg = (req, res, next) => {
    req.session.isLoggedIn = false;
    res.render('admin/register', {
        path: 'register',
        title: 'Register',
        err: error,
        success: success,
        isauth: req.session.isLoggedIn
    });
    error = '';
    success = '';
};

exports.postreg = async (req, res, next) => {
    try {
        const userfind = await user.findOne({email: req.body.email});
        if (userfind == null) {
            if (req.body.password == req.body.confirmPassword) {
                bcypassword = bcypt.hashSync(req.body.password, 15);
                const newuser = await user.create({email: req.body.email, password: bcypassword, confirmpassword: bcypassword, mobileno: req.body.mobile});
                return(success = 'User Created'),
                res.redirect('/login');
            } else {
                return(error = `Password And Confirm Password Not March`);
            }
        } else {
            return(error = 'User Already Exist');
        }
    } catch (err) {
        console.log(err);
        return(error = 'Invalid Input'),
        res.redirect('/register');
    }
}

exports.logout = async (req, res, next) => {
    await req.session.destroy()
    res.redirect('/')
}


exports.getsiteid= async (req,res,next)=>{
    req.session.siteid= req.params.id
    await req.session.save()
    next()

}
exports.getEdit = async (req, res, next) => {
    try {
        const sitelist = await sites.find({})
        sitelist.forEach(site => {
            if (site._id.toString() == req.session.editid ) {
                return res.render('admin/editsite', {
                    site: site,
                    path: 'edit',
                    title: 'Edit Site'
                })
            }
        })

    } catch (err) {
        console.log(err)

    }
}

exports.postEdit= async(req,res,next)=>{
    try{
        sitelist = await sites.findOneAndUpdate({_id:mongodb.ObjectId(req.session.editid)},{
            title: req.body.title,
            subtitle: req.body.subtitle,
            discription: req.body.discription,
            link: req.body.link,
            lastUpdatedon: Date.now()
        })
        req.session.editid= null
        res.redirect('/')

    }catch(err){
        console.log(err)
    }
}



exports.getdelete= async (req,res,next)=>{
    try{
        await sites.findOneAndDelete({_id: mongodb.ObjectId(req.session.siteid)})
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
}