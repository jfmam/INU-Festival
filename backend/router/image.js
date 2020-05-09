const express = require('express');
const path = require('path');
const multer =require('multer')

const db = require('../models');
const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      done(null, file.originalname);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});



router.post('/shuttle',upload.single('shuttleImage'),async(req,res,next)=>{//이미지 등록,multer사용
    try{
        console.log(req.file);
    res.status(200).send('셔틀버스이미지등록')
}catch(e){
    res.send(e);
}

})
router.post('/', upload.single('indexImage'), async (req, res, next) => { //이미지 등록,multer사용
    try{
        console.log(req.file)
        
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
