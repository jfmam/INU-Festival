import React, { useCallback, useState,useRef, Children } from 'react'
import Link from 'next/link'
import Timetable from '../timetable'
import {useDispatch,useSelector} from 'react-redux'
import {useRouter} from 'next/router'

const TimeTableDetail=()=>{
     const [dummmySchedue,setDummySchedule]=useState(['17:00 댄스동아리공연','18:00 장기자랑',])
      const {scheduleInfo}=useSelector(state=>state.timetable)
 return (
     <> 
     <Timetable>
     <main>
         {dummmySchedue.map((item,index)=>{
             return(
             <div style={{padding:'1rem',borderBottom:'1px solid #979797',fontSize:16}}>
             <span style={{margin:'2.3rem'}}><strong>{item.slice(0,6)}</strong></span>
             <span style={{margin:'1.88rem'}}>{item.slice(6,item.length)}</span>
             </div>
             )
         })}
     </main>
     </Timetable>
     </>
     
 )
}

// TimeTableDetail.getInitialProps=async(context)=>{
//     const router=useRouter();
//     const {timetable}=router.query
//     console.log({timetable})
//     context.store.dispatch({

//     })
// }

export default TimeTableDetail;