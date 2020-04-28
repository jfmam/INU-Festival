const express = require('express');
const db = require('../models');
const router = express.Router();


router.post('/',async(req,res,next)=>{//일정등록하기
    try {
        if(Array.isArray(req.body.timeSchedule)){
        const result=await Promise.all((req.body.timeSchedule.map((item,index)=>{
            return db.Timetable.create({
            scheduleDate:req.body.scheduleDate,
            schedule:req.body.schedule
        })
        })))    
    }
        res.status(200).send("일정 등록 성공");
    } catch (e) {
        res.send(e)
    }
})

router.get('/date', async (req, res, next) => {
    try {
        const dateSchedule = await db.Timetable.aggregate( //타임테이블 일 보여주기
            'scheduleDate',
            'DISTINCT',
            {plain:false}
        )
        res.json(dateSchedule);
    } catch (e) {
        res.send(e);
    }
})

router.get('/',async (req,res,next)=>{
    try {
        const dateSchedule=await db.Timetable.findAll({//타임테이블 일 보여주기
        where:{}
        }) 
        res.json(dateSchedule);
    } catch (e) {
        res.send(e);
    }
})

module.exports = router;