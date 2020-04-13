const express = require('express');
const path = require('path');

const db = require('../models');
const router = express.Router();

router.get('/',async(req,res,next)=>{
    try{
    const adminCode=await db.admin.findAll({
        where:{code:req.params.code},
        include:[{
            models:db.Menu,
              attributes: ['food', 'price','soldOut']
        }]
    });
    if(adminCode) {res.json(adminCode)}
   
}catch(e){
    console.error(e);
    next(e);
}
})

router.post('/',async(req,res,next)=>{
    try{
        const adminCode=await db.admin.create({
            opTimeOpen:req.body.opTimeOpen,
            opTimeClose:req.body.opTimeClose,
            full:req.body.full
        })
        if(req.body.Menu){
            if(Array.isArray(req.body.menu)){
                  const menu = await Promise.all(req.body.Menu.map((item,index) => {
          return db.Menu.create({ food: item.food,price:item.price,soldOut:item.soldOut });
            }))
            await newAdmin.addMenu(menu);
        }
    }
        // const menuPost=await db.Menu.create({
        //     food:req.
        // })
    }catch(e){
        res.send(e);
    }
})
module.exports = router;