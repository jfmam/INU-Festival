import React, { useCallback, useState,useRef, Children } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { SCHEDULEGET_REQUEST,DATEGET_REQUEST } from '../store/timetable'
import {} from 'react-slick'

const TimeTable=({children})=>{
    const [date,setDate]=useState(null)
    const [schedule,setSchedule]=useState([])
    const {scheduleInfo,dateInfo}=useSelector(state=>state.timetable)
    const dispatch=useDispatch();

    const filterSchedule=useCallback((e)=>{
        setSchedule(scheduleInfo.filter((item,index)=>{
            return item.scheduleDate===e.target.textContent
        }))
    },[schedule])
   
 return (
    
    <> 
     <nav style={{display:'flex',justifyContent:'space-around',borderBottom:'1px solid gray',marginTop:'3rem'
    ,paddingBottom:'1.38rem'
    }}>
    {dateInfo&&dateInfo.map((item,index)=>{
        return(
        <strong onClick={filterSchedule} key={index}>{item.DISTINCT}</strong>
        )
    })}
     </nav>
     <main>
         {schedule&&schedule.map((item,index)=>{
             return(
             <div style={{padding:'1rem',borderBottom:'1px solid #979797',fontSize:16}}>
             <span style={{margin:'2.3rem'}}><strong>{item.time}</strong></span>
             <span style={{margin:'1.88rem'}}>{item.schedule}</span>
             </div>
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