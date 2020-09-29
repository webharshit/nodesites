const express = require('express');

const router= express.Router();

router.get('/admin',(req,res,next){
    res.send('Error')
})


module.exports=router