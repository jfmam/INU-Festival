import React,{ useState, useRef, useCallback } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import {useRouter} from 'next/router'



const AppLayout=({children})=>{
    const Menu=['부스지도','야간셔틀버스','타임테이블'];
    const route=['boothmap','shuttle','timetable']
    const router=useRouter();
    const [toggle,setToggle]=useState(false);//redux,contextAPI사용
    const getToggle=(bool)=>{
        return new Promise((resolve,reject)=>{
             setToggle(bool);
             resolve(toggle);
        })
    }

    const header=useRef()

    const drawer=useCallback(async()=>{   
     if(!toggle){
        header.current.style.backgroundColor='rgba(35, 35, 35, 0.7)'
        header.current.style.opacity=0.7
    }else{
        header.current.style.backgroundColor = '#fff'
        header.current.style.opacity = 1
    }},[toggle])

    return(
    <div>   
    <header ref={header} style={{marginTop:32,display:'flex',
    alignContent:'center',justifyContent:'space-around',
    borderBottom:'solid 1px #979797',height:66}}>
        {/* header */}
        <span><img onClick={()=>{router.push('/')}} style={{marginTop:23,width:24,height:21}} src='/path.png'></img></span>
        <span><p style={{marginTop:23,marginLeft:20,marginRight:20}}>INUFestival</p></span>
        <span><img onClick={async()=>{
            await getToggle(true)
            drawer()
        }} style={{width:24,height:21,marginTop:23}} src='/more.png'></img></span>
    </header>
    {/* drawer부분.. &&사용하기*/}
    {toggle&&
    <div>
    <div style={{position:'absolute',width:'100%',height:'100%',zIndex:19,backgroundColor:'rgba(35, 35, 35, 0.7)',opacity:0.7}}></div>
    <aside style={{position:'absolute',zIndex:20,width:'77%',height:'96%'
    ,backgroundColor:'#ffffff',top:32,left:'30%',border:'1px solid #d3d3d3'}}>
        <img style={{marginLeft:'82%',marginTop:13.2}} onClick={async()=>{await getToggle(false);
        await drawer()
        }} src='/xbtn.png'></img>
        <div style={{marginTop:90,marginLeft:50}}>
        {Menu.map((item,index)=>{
        return <Link  href={{pathname:`/${route[index]}`}}  as={`/${route[index]}`}><a onClick={()=>{
            setToggle(false)
            drawer();
        }}><p key={index} style={{borderBottom:'solid 1px #d3d3d3',width:132,paddingBottom:23.2}}>{item}</p></a></Link>
        })}
        </div>
        <div style={{marginLeft:'17%',marginTop:'21em'}}>
            <Link href={{pathname:'/manager'}}><a onClick={()=>{ setToggle(false)
            drawer();}}><strong>운영자페이지</strong></a></Link>
        </div>
    </aside>
    </div>
    }
    <section>
    {children}
    </section>
    </div>
    )
}

export default AppLayout;