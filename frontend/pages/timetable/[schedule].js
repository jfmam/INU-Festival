import React from 'react'    
import Link from 'next/link'
import Router, { useRouter } from 'next/router'

const Schedule=()=>{
      const dummyDate=['28 월','29 화','30 수','31 목']
     const dummySchedule=['17:00 댄스동아리공연']
        const router=useRouter();
        const {schedule}=router.query
    return(
        <div>
            <nav style={{display:'flex',justifyContent:'space-around',marginTop:49}}>
                <Link href={{pathname:'/timetable'}}><a></a></Link>
                <Link href={{pathname:'/timetable',quary:'second'}}><a></a></Link>
                <Link href={{pathname:'/timetable',quary:'third'}}><a></a></Link>
                <Link href={{pathname:'/timetable',quary:'forth'}}><a></a></Link>
            </nav>    
                {{schedule}&&dummySchedule.splice(0,4).map((item=>{
                    return <span key={item}>{item}</span>
                }))}
                {dummySchedule.splice(5,dummySchedule.length).map((item=>{
                    return <span key={item}>{item}</span>
                }))}
        </div>
    )
}
export default Schedule;