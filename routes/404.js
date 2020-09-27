const express = require('express');

const router= express.Router();

const isauth= require('../middleware/isauth') 
router.get('/',(req,res)=>{
    res.status(404).render('404',{
        title: 'Page Note Found',   
        path: 'home'
    });
})
router.get('/login',(req,res)=>{
    res.status(404).render('404',{
        title: 'Page Note Found',   
        path: 'home'
    });
})
module.exports= router