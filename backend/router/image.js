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
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext); // 제로초.png, ext===.png, basename===제로초
      done(null, basename + new Date().valueOf() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});



router.post('/shuttle',upload.single('shuttleImage'),async(req,res,next)=>{//이미지 등록,multer사용
    try{
    const image=await db.Image.create({
        shuttle:req.body.shuttleImage
    })
    res.status(200).send('셔틀버스이미지등록')
}catch(e){
    res.send(e);
}

})
router.post('/', upload.single('indexImage'), async (req, res, next) => { //이미지 등록,multer사용
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
