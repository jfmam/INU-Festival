import React, { useCallback, useState,useRef, Children } from 'react'
import Schedule from './timetable/[schedule]'

const TimeTable=()=>{
    const dummyDate=['28 월','29 화','30 수','31 목']
    const [click,setClick]=useState(false)
    const p=useRef(null)
    const i=useState(0)

    const colorChange=useCallback(()=>{
            p.current.style.color='#003e94'   
    },[])
    return(
    <div>
        <nav style={{display:'flex',justifyContent:'space-around',marginTop:49}}>
            {/* 후에 수정 */}
                <Link href={{pathname:'/timetable',quary:'first'}}><a>28 월</a></Link>
                <Link href={{pathname:'/timetable',quary:'second'}}><a>29 화</a></Link>
                <Link href={{pathname:'/timetable',quary:'third'}}><a>30 수</a></Link>
                <Link href={{pathname:'/timetable',quary:'forth'}}><a>31 목</a></Link>
            </nav>    
        <Schedule></Schedule>
    </div>
    )
}

export default TimeTable;