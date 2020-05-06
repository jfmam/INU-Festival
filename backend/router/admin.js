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
    res.status(200).json(adminCode)
   
}catch(e){
    console.error(e);
    next(e);
}
})

router.patch('/',async(req,res,next)=>{//부스 등록
    try{
        
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
          return db.Menu.create({ food: item.food,price:item.price,soldOut:item.soldOut});
            }))
            await newAdmin.addMenus(menu);
        }
        res.status(200).send("등록성공")
    }
    }catch(e){
        res.send(e);
    }
})



module.exports = router;