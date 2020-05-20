import React, { useCallback, useState,useRef, Children, useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { SCHEDULEGET_REQUEST,DATEGET_REQUEST } from '../store/timetable'
import {Nav,ScheduleDiv,Strong} from '../styles/TimetableStyles'


const TimeTable=({children})=>{
    const [date,setDate]=useState(null)
    const [schedule,setSchedule]=useState([])
    const {scheduleInfo,dateInfo}=useSelector(state=>state.timetable)
    const dispatch=useDispatch();
    const filterSchedule=useCallback((e)=>{
        setDate(date.map((item,index)=>{
            return item.day===e.target.textContent?{day:item.day,color:"#003e94"}:{day:item.day,color:"#9b9b9b"};
        }))
        setSchedule(scheduleInfo.filter((item,index)=>{
            return item.scheduleDate===e.target.textContent
        }))
    },[schedule,scheduleInfo,date])

    useEffect(()=>{
        dateInfo&&setDate(dateInfo.map((item,index)=>{
            return {day:item.DISTINCT,color:"#9b9b9b"};
        }))
    },[dateInfo])
 return (
    
    <> 
     <Nav>
    {date&&date.map((item,index)=>{
        return(
        <Strong color={item.color} onClick={filterSchedule} key={index}>{item.day}</Strong>
        )
    })}
     </Nav>
     <main>
         {schedule&&schedule.map((item,index)=>{
             return(
             <ScheduleDiv key={index}>
             <span style={{margin:'1.5rem'}}><strong>{item.time}</strong></span>
             <span style={{marginLeft:'5rem'}}>{item.schedule}</span>
             </ScheduleDiv>
             )
         })}
     </main>
     </>
 )
}

TimeTable.getInitialProps=async(context)=>{
    context.store.dispatch({
        type:DATEGET_REQUEST
    })
    context.store.dispatch({
        type:SCHEDULEGET_REQUEST
    })
}

export default TimeTable;