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

router.get('/',async (req,res,next)=>{
    try {
        const date=await db.Timetable.findAll({//타임테이블 일 보여주기
            attributes: [Sequelize.fn('DISTINCT', Sequelize.col('scheduleDate')), 'scheduleDate']     
        })
        res.json(date);
    } catch (e) {
        res.send(e);
    }
})

router.get('/:date', async (req, res, next) => {//타임테이블 일별로 일정보여주기
    try{
    const schedule = await db.Timetable.findAll({
    where:{
             scheduleDate: {
                   [Op.like]: "%" + req.query.date + "%"
                }
            },
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