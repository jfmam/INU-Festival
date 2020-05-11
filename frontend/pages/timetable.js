import React, { useCallback, useState,useRef, Children } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { SCHEDULEGET_REQUEST,DATEGET_REQUEST } from '../store/timetable'
import styled from 'styled-components';

const Nav=styled.nav`
display:flex;
justify-content:space-around;
border-bottom:1px solid gray;
margin-top:3rem;
padding-bottom:1.38rem
`
const ScheduleDiv=styled.div`
padding:1rem;
border-bottom:1px solid #979797;
font-size:16px;

`


const TimeTable=({children})=>{
    const [date,setDate]=useState(null)
    const [schedule,setSchedule]=useState([])
    const {scheduleInfo,dateInfo}=useSelector(state=>state.timetable)
    const dispatch=useDispatch();
    const filterSchedule=useCallback((e)=>{
        setSchedule(scheduleInfo.filter((item,index)=>{
            return item.scheduleDate===e.target.textContent
        }))
    },[schedule,scheduleInfo])
   
 return (
    
    <> 
     <Nav>
    {dateInfo&&dateInfo.map((item,index)=>{
        return(
        <strong onClick={filterSchedule} key={index}>{item.DISTINCT}</strong>
        )
    })}
     </Nav>
     <main>
         {schedule&&schedule.map((item,index)=>{
             return(
             <ScheduleDiv>
             <span style={{margin:'2.3rem'}}><strong>{item.time}</strong></span>
             <span style={{margin:'1.88rem'}}>{item.schedule}</span>
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