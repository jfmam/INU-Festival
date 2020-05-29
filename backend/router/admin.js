const express = require('express');
const path = require('path');

const db = require('../models');
const router = express.Router();


router.get('/boothmap', async (req, res, next) => { //부스 조회
    try {
        const boothInfo = await db.Admin.findAll({
            where:{},
            include:[{
                model:db.Menu,
                attributes:['food','price','soldOut']
            }]
        });
        console.log(boothInfo)
        res.json(boothInfo)

    } catch (e) {
        console.error(e);
        next(e);
    }
})

router.get('/:code',async(req,res,next)=>{//부스 조회 api/admin
    try{          
    const adminCode=await db.Admin.findOne({
        where:{code:req.params.code},  
       include:[{
           model:db.Menu,
           attributes:['food','price','soldOut']
       }]
    });
    console.log(adminCode);
    res.status(200).json(adminCode)
   
}catch(e){
    console.error(e);
    next(e);
}
})


router.patch('/',async(req,res,next)=>{//부스 등록
    try{
           const Menus=await db.Menu.findAll({
            where:{AdminCode:req.body.code}
        })
        console.log(Menus)
        if(Menus){
                    await db.Menu.destroy({
                    where:{AdminCode:req.body.code}
                })     
            }
        const newAdmin=await db.Admin.update({
            boothName:req.body.boothName,
            opTimeOpen:req.body.opTimeOpen,
            opTimeClose:req.body.opTimeClose,
            full:req.body.full
        },{
            where:{code:req.body.code}
        })
    
        if(req.body.menu){
            if(Array.isArray(req.body.menu)){
                  const menu = await Promise.all(req.body.menu.map((item,index) => {
          return db.Menu.create({AdminCode:req.body.code, food: item.food,price:item.price,soldOut:item.soldOut});
            }))
        }
    }
        res.status(200).send("등록성공")
    }catch(e){
        res.send(e);
    }
})

router.post('/code',async(req,res,next)=>{
    try{
        const codeFind=await db.Admin.findOne({
            where:req.body.code
        })
        if(codeFind){
            res.send("이미 존재하는 코드입니다")
            return;
        }
        const codeCretate=await db.Admin.create({
            code:req.body.code
        })
        res.send("코드등록 성공");
    }catch(e){
        res.send(e);
    }
})


module.exports = router;