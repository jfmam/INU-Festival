const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/timetable/:date', async (req, res, next) => {//timetable은 단순히 축제날만보내준다
    try{
    const schedule = await db.Timetable.findAll({
    where:req.params.date,
    include:[{
        model:db.Schedule,
        attributes:'schedule'
    }]
    })
    res.json(schedule);
}catch(e){
    console.error(e);
}
})
module.exports = router;