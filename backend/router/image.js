const express = require('express');
const path = require('path');

const db = require('../models');
const router = express.Router();


router.post('/shuttle',async(req,res,next)=>{//이미지 등록,multer사용
    try{
    const image=await db.Image.create({
        shuttle:req.body.shuttleImage
    })
    res.status(200).send('셔틀버스이미지등록')
}catch(e){
    res.send(e);
}
})
router.post('/', async (req, res, next) => {//이미지 등록,multer사용
    try{
    const image = await db.Image.create({
        lineUp:req.body.indexImage
    })
    res.status(200).send('인덱스이미지등록')
}
    catch (e) {
        res.send(e);
    }
})

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
