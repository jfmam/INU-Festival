import React,{ useState, useRef, useCallback } from 'react';
import styled from 'styled-components'
import Link from 'next/link'



const AppLayout=({children})=>{
    const Menu=['부스지도','야간셔틀버스','타임테이블'];
    const route=['boothmap','shuttle','timetable']
    

    const [toggle,setToggle]=useState(false);//redux,contextAPI사용
    const layout=useRef(null);

    const drawer=useCallback((toggle)=>{
        if(toggle){
            layout.current.style.backgroundColor="#fff"
        }
        else{
             layout.current.style.backgroundColor="rgba(35, 35, 35, 0.7)"
             layout.current.style.zIndex=21
        }
    },[toggle])

    return(
    <div ref={layout}>   
    <header className="Header" style={{marginTop:32,display:'flex',
    alignContent:'center',justifyContent:'space-around',
    borderBottom:'solid 1px #979797',height:66}}>
        {/* header */}
        <span><img style={{marginTop:23,width:24,height:21}} src='/path.png'></img></span>
        <span><p style={{marginTop:23,marginLeft:20,marginRight:20}}>INUFestival</p></span>
        <span><img onClick={()=>{setToggle(true);
        drawer(toggle);
        }} style={{width:24,height:21,marginTop:23}} src='/more.png'></img></span>
    </header>
    {/* drawer부분.. &&사용하기*/}
    {toggle&&
    <div>
    <div style={{position:'absolute',zIndex:30,backgroundColor:"#d3d3d3",}}></div>
    <aside style={{position:'absolute',zIndex:20,width:'77%',height:'96%'
    ,backgroundColor:'#ffffff',top:32,left:'30%',border:'1px solid #d3d3d3'}}>
        <img style={{marginLeft:'82%',marginTop:13.2}} onClick={()=>{setToggle(false);
        drawer(toggle);
        }} src='/xbtn.png'></img>
        <div style={{marginTop:90,marginLeft:50}}>
        {Menu.map((item,index)=>{
        return <Link href={{pathname:`/${route[index]}`}}  as={`/${route[index]}`}><a><p key={index} style={{borderBottom:'solid 1px #d3d3d3',width:132,paddingBottom:23.2}}>{item}</p></a></Link>
        })}
        </div>
        <div style={{marginLeft:'17%',marginTop:'21em'}}>
            <Link href='admin'><a><strong>운영자페이지</strong></a></Link>
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