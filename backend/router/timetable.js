const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/timetable', async (req, res, next) => {//timetable은 단순히 축제날만보내준다
    try{
    const shedule = await db.Image.findAll({
     attributes:['Date']
    })
    res.json(shedule);
}catch(e){
    console.error(e);
}
})
