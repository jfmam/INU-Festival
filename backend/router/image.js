const express = require('express');
const path = require('path');

const db = require('../models');
const router = express.Router();

router.get('/shuttle',async(req,res,next)=>{
    const image=await db.Image.findAll({
        attributes:['shuttle']
    })
})
router.get('/', async (req, res, next) => {
    const image = await db.Image.findAll({
        attributes: ['lineUp']
    })
})

