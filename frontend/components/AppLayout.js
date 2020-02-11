import React,{ useState, useRef, useCallback } from 'react';
import styled from 'styled-components'
import Link from 'next/link'

const Layout = styled.div`
    z-index:-1;
    display:inline-block
`
const Header = styled.header`
    display:
    height:66;
    borderBottom:1px solid black;
    marginTop:32;
`

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
        }
    },[toggle])

    return(
    <div ref={layout} style={{widht:'360',height:'780'}}>
        
    <header className="Header" style={{marginTop:32,display:'flex',borderBottom:'solid 1px #979797',height:66}}>
        {/* header */}
        <span><img style={{marginLeft:23,marginTop:23,width:24,height:21}} src='/path.png'></img></span>
        <span><p style={{marginLeft:90,marginTop:23}}>INUFestival</p></span>
        <span><img onClick={()=>{setToggle(true);
        drawer(toggle);
        }} style={{marginLeft:89,width:24,height:21,marginTop:23}} src='/more.png'></img></span>
    </header>
    {/* drawer부분.. &&사용하기*/}
    {toggle&&<aside style={{position:'absolute',zIndex:20,width:278,height:760
    ,backgroundColor:'#ffffff',top:32,left:'30%',border:'1px solid #d3d3d3'}}>
        <img style={{marginLeft:229,marginTop:46.2}} onClick={()=>{setToggle(false);
        drawer(toggle);
        }} src='/xbtn.png'></img>
        <div style={{marginTop:155,marginLeft:50}}>
        {Menu.map((item,index)=>{
        return <Link href={{pathname:`/${route[index]}`}}  as={`/${route[index]}`}><a><p key={index} style={{borderBottom:'solid 1px #d3d3d3',width:132,paddingBottom:23.2}}>{item}</p></a></Link>
        })}
        </div>
    </aside>}
    {children} 
    </div>
    )
}

export default AppLayout;