const express = require('express');
const path = require('path');

const db = require('../models');
const router = express.Router();

router.get('/:code',async(req,res,next)=>{//부스 조회
    try{
        
    const adminCode=await db.Admin.findAll({
        where:{code:req.params.code},  
    });
    if(adminCode) {res.json(adminCode)}
   
}catch(e){
    console.error(e);
    next(e);
}
})

router.post('/',async(req,res,next)=>{//부스 등록
    try{
        const adminCode=await db.Admin.create({
            boothName:req.body.boothName,
            opTimeOpen:req.body.opTimeOpen,
            opTimeClose:req.body.opTimeClose,
            full:req.body.full
        })
        if(req.body.Menu){
            if(Array.isArray(req.body.menu)){
                  const menu = await Promise.all(req.body.Menu.map((item,index) => {
          return db.Menu.create({ food: item.food,price:item.price,soldOut:item.soldOut,AdminCode:req.body.code });
            }))
        }
    }

    }catch(e){
        res.send(e);
    }
})

router.patch('/',async(req,res,next)=>{
    try{
        db.Admin.update({
           boothName:req.body.boothName,
            opTimeOpen:req.body.opTimeOpen,
            opTimeClose:req.body.opTimeClose,
            full:req.body.full
        },{
            where:{code:req.body.code}
        })
        await db.Menu.destroy({
            where:{AdminCode:req.body.code}
        })
        if(req.body.menu){
             if(Array.isArray(req.body.menu)){
                  const menu = await Promise.all(req.body.Menu.map((item,index) => {
          return db.Menu.create({ food: item.food,price:item.price,soldOut:item.soldOut,AdminCode:req.body.code });
            }))
        
        }
        }
    }catch(e){

    }
})

module.exports = router;