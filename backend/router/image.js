const express = require('express');
const path = require('path');

const db = require('../models');
const router = express.Router();

router.get('/shuttle',async(req,res,next)=>{
    try{
    const image=await db.Image.findAll({
        attributes:['shuttle']
    })
    res.json(image);
}catch(e){
    res.send(e);
}
})
router.get('/', async (req, res, next) => {
    try{
    const image = await db.Image.findAll({
        attributes: ['lineUp']
    })
    res.json(image);
}
    catch (e) {
        res.send(e);
    }
})
module.exports = router;
