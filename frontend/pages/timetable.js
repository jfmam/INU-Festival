import React, { useCallback, useState,useRef, Children } from 'react'
import Link from 'next/link'


const TimeTable=({children})=>{
    const [dummydate,setDummyDate]=useState([{Date:'28월'},{Date:'29화'},{Date:'30수'},{Date:'31목'}])
 return (
    
    <> 
     <nav style={{display:'flex',justifyContent:'space-around',borderBottom:'1px solid gray',marginTop:'3rem'
    ,paddingBottom:'1.38rem'
    }}>
    {dummydate.map((item,index)=>{
        return(
        <Link  href={{pathname:`/timetable/[timetable]`}} as={`/timetable/${item.Date.slice(0,2)}`}    key={index}>
           <a><strong>{item.Date}</strong></a>
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