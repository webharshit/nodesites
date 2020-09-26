const express = require('express');

const router= express.Router();

router.get('/',(req,res)=>{
    res.status(404).render('404',{
        title: 'Page Note Found',   
        path: 'home'
    });
})
module.exports= router