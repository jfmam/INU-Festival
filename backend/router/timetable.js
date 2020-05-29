const express = require('express');
const db = require('../models');
const router = express.Router();


router.post('/',async(req,res,next)=>{//일정등록하기
    try {
        console.log(req.body);
            const result=await db.Timetable.create({
            scheduleDate:req.body.scheduleDate,
            time:req.body.time,
            schedule:req.body.schedule
        })
        if(result)
        res.status(200).send("일정 등록 성공");
    } catch (e) {
        res.send(e)
    }
})

router.delete('/:id',async(req,res,next)=>{
    try{
        const result=await db.Timetable.destroy({
            where:{id:req.params.id}
        });
        if(result) res.send("삭제 성공!");
    }catch(e){
        res.send(e);
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
        const dateSchedule=await db.Timetable.findAll({//타임테이블 모두보여주기
        where:{}
        }) 
        res.json(dateSchedule);
    } catch (e) {
        res.send(e);
    }
})

module.exports = router;