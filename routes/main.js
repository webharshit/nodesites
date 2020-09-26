const express = require('express');

const router= express.Router();

router.get('/contact',(req,res)=>{
    res.render('main/contact',{
        title: 'Contact Us',   
        path: 'contact'
    });
})


module.exports=router