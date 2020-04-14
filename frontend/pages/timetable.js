import React, { useCallback, useState,useRef, Children } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { SCHEDULEGET_REQUEST } from '../store/timetable'


const TimeTable=({children})=>{
    const [dummydate,setDummyDate]=useState([{Date:'28월'},{Date:'29화'},{Date:'30수'},{Date:'31목'}])
    const {scheduleInfo}=useSelector(state=>state.timetable)
    const dispatch=useDispatch();
 return (
    
    <> 
     <nav style={{display:'flex',justifyContent:'space-around',borderBottom:'1px solid gray',marginTop:'3rem'
    ,paddingBottom:'1.38rem'
    }}>
    {dummydate.map((item,index)=>{
        return(
        <Link  href={{pathname:`/timetable/[timetable]`}} as={`/timetable/${item.Date.slice(0,2)}`}  key={index}>
           <a onClick={()=>{
               dispatch({
               type:SCHEDULEGET_REQUEST,
               data:item.Date.slice(0,2)
           })}}><strong>{item.Date}</strong></a> 
        </Link>
        )
    })}
     </nav>
     <section>
      {children}
     </section>
     </>
 )
}

export default TimeTable;