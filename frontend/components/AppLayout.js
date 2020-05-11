import React,{ useState, useRef, useCallback } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import {useRouter} from 'next/router'

const App=styled.div`
   @media (max-width:360px||max-height:640px) {
      max-width:360px;
      max-height:640px;
    }
   @media (max-width:411px||max-height:820px) {
    max-width:411px;
    max-height:820px;
    }
    overflow:scroll;
`

const Drawer=styled.aside`
    position:absolute;
    z-index:20;
    width:77%;
    height:96%;
   background-color:#fff;
   top:25px;
   left:22%;
   border:1px solid #d3d3d3;
   overflow:scroll;
`

const Header=styled.header`
    margin-top:20px;
    display:flex;
    align-content:center;
    justify-content:space-around;
    border-bottom:solid 1px #979797;

`
const DrawerBack=styled.div`
position:absolute;
width:96%;
top:25px;
height:96%;
z-index:19;
background-color:rgba(35, 35, 35, 0.7);
opacity:0.7;
`

const AppLayout=({children})=>{
    const Menu=['부스지도','야간셔틀버스','타임테이블'];
    const route=['boothmap','shuttle','timetable'];
    const router=useRouter();
    const [toggle,setToggle]=useState(false);//redux,contextAPI사용
    const getToggle=(bool)=>{
        return new Promise((resolve,reject)=>{
             setToggle(bool);
             resolve(toggle);
        })
    }

    const header=useRef();
    const drawer=useCallback(async()=>{   
     if(!toggle){
        header.current.style.backgroundColor='rgba(35, 35, 35, 0.7)'
        header.current.style.opacity=0.7
    }else{
        header.current.style.backgroundColor = '#fff'
        header.current.style.opacity = 1
    }},[toggle])

    return(
    <App>   
    <Header ref={header}>
        {/* header */}
        <span><img onClick={()=>{router.push('/')}} style={{marginTop:20,width:24,height:21}} src='/path.png'></img></span>
        <span><p style={{marginTop:20,marginLeft:20,marginRight:20}}>INU대동제</p></span>
        <span><img onClick={async()=>{
            await getToggle(true)
            drawer()
        }} style={{width:24,height:21,marginTop:20}} src='/more.png'></img></span>
    </Header>
    {/* drawer부분.. &&사용하기*/}
    {toggle&&
    <div>
    <DrawerBack />
    <Drawer>
        <img style={{marginLeft:'82%',marginTop:13.2}} onClick={async()=>{await getToggle(false);
        await drawer()
        }} src='/xbtn.png'></img>
        <div className='router' style={{marginTop:90,marginLeft:50}}>
        {Menu.map((item,index)=>{
        return <Link  href={{pathname:`/${route[index]}`}}  as={`/${route[index]}`}><a onClick={()=>{
            setToggle(false)
            drawer();
        }}><p key={index} style={{borderBottom:'solid 1px #d3d3d3',width:132,paddingBottom:23.2}}>{item}</p></a></Link>
        })}
        </div>
        <div className='adminPage' style={{marginLeft:'17%',marginTop:'16rem'}}>
            <Link href={{pathname:'/manager'}}><a onClick={()=>{ setToggle(false)
            drawer();}}><strong>운영자페이지</strong></a></Link>
        </div>
    </Drawer>
    </div>
    }
    <section>
    {children}
    </section>
    </App>
    )
}

export default AppLayout;