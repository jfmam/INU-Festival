import React,{ useState, useRef, useCallback } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {INDEXIMAGE_REQUEST} from '../store/image'

const AppDiv=styled.div`
   @media (max-width:360px||max-height:640px) {
      max-width:360px;
      max-height:640px;
    }
   @media (max-width:411px||max-height:820px) {
    max-width:411px;
    max-height:820px;
    }
 
`

const Drawer=styled.aside`
    position:absolute;
    z-index:20;
    width:77%;
    height:100%;
   background-color:#fff;
   top:0;
   left:22%;
   border:1px solid #d3d3d3;
`

const Header=styled.header`
 display:flex;
 align-content:center;
 justify-content:space-around;
border-bottom:solid 1px #979797;
margin-top:19px;
height:46px;
`
const DrawerBack=styled.div`
position:absolute;
width:96%;
top:0;
height:100%;
z-index:19;
background-color:rgba(35, 35, 35, 0.7);

`

const AppLayout=({children})=>{
    const Menu=['부스지도','야간 셔틀버스','타임테이블'];
    const route=['boothmap','shuttle','timetable'];
    const [title,setTitle]=useState('INU대동제');
    const router=useRouter();
    const [toggle,setToggle]=useState(false);//redux,contextAPI사용
    const getToggle=(bool)=>{
        return new Promise((resolve,reject)=>{
             setToggle(bool);
             resolve(toggle);
        })
    }

    // const header=useRef();
    // const drawer=useCallback(()=>{   
    //  if(!toggle){
    //     header.current.style.backgroundColor='rgba(35, 35, 35, 0.7)'
    //     header.current.style.opacity=0.7
    // }else{
    //     header.current.style.backgroundColor = '#fff'
    //     header.current.style.opacity = 1
    // }},[toggle])

    return(
    <AppDiv>   
    <Header >
        {/* header */}
        <span><img onClick={()=>{
            setTitle('INU대동제');
            router.push('/')}} style={{width:24,height:21,}} src='/path.png'></img></span>
        <span style={{marginLeft:20,marginRight:20,}}><strong>{title}</strong></span>
        <span><img onClick={async()=>{
            await getToggle(true)
            // drawer()
        }} style={{width:24,height:21}} src='/more.png'></img></span>
    </Header>
    {/* drawer부분.. &&사용하기*/}
    {toggle&&
    <div>
    <DrawerBack />
    <Drawer>
        <img style={{marginLeft:'82%',marginTop:15}} onClick={async()=>{await getToggle(false);
        // await drawer()
        }} src='/xbtn.png'></img>
        <div  style={{marginTop:90,marginLeft:50}}>
        {Menu.map((item,index)=>{
        return <Link key={index} href={{pathname:`/${route[index]}`}}  as={`/${route[index]}`}><a onClick={()=>{
            setToggle(false)
            setTitle(Menu[index]);
            // drawer();
        }}><p key={index} style={{borderBottom:'solid 1px #d3d3d3',width:132,paddingBottom:23.2}}>{item}</p></a></Link>
        })}
        </div>
        <div style={{marginLeft:'17%',marginTop:'16rem'}}>
            <Link href={{pathname:'/manager'}}><a onClick={()=>{
            setTitle('운영자 페이지');
            setToggle(false)
            // drawer();
            }}><strong>운영자페이지</strong></a></Link>
        </div>
    </Drawer>
    </div>
    }
    <section>
    {children}
    </section>
    </AppDiv>
    )
}


export default AppLayout;