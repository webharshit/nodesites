const express = require('express'),
    mongoose = require('mongoose'),
    mongodb = require('mongodb'),
    bodyParser = require('body-parser');

const router = express.Router();
const usermodel = require('../models/user')


router.get('/', (req, res) => {
    res.render('main/home', {
        title: 'Home',
        path: 'home'
    });
})
router.get('/contact', (req, res) => {
    res.render('main/contact', {
        title: 'Contact Us',
        path: 'contact'
    });
})
router.get('/register', (req, res) => {
    res.render('main/register', {
        title: 'Register',
        path: 'register'
    });
})
router.post('/register', (req, res, next) => {
    const email = req.body.email,
    password = req.body.password,
    mobile = req.body.mobile
    const user = usermodel.create({
        email: email,
        password: password,
        mobileno: mobile
    })
    console.log(req.body.email)
    console.log('email')
    
    res.redirect('/login')
});

router.get('/login', (req, res) => {
    res.render('main/login', {
        title: 'Login',
        path: 'login'
    });
})

module.exports = router