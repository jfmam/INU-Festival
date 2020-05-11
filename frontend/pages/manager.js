import React, { useState, useCallback, useRef, Fragment,useEffect } from 'react'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {CODE_REQUEST} from '../store/menu';
import styled from 'styled-components';

const CodeInput=styled.div`
display:block;
text-align:center;
margin-top:188px;
&>p{
font-size:15px;
}
&>input{
width:225px;
height:41px;
border-radius:7px;
text-align:center;
font-size:15px;
background-color:#f0f0f0;
margin-bottom:23px;
margin-top:23px;
}
`
const CodeInquire=styled.div`
text-align:center;
margin-top:12rem;
&>img{
    vertical-align:middle
}
`

const manager=()=>{
    const [code,setCode]=useState('')
    const dispatch=useDispatch();
    const onChangeCode=useCallback((e)=>{
        e.preventDefault();  
        setCode(e.target.value)
    },[code])
    const inputEL=useRef(null)
    const router=useRouter();
    const {codeInfo,codeRequest}=useSelector(state=>state.menu)
    
    const codeDispatch=useCallback(async(resolve,reject)=>{
            return await new Promise((resolve,reject)=>{
            dispatch({
            type:CODE_REQUEST,
            data:code
            });
            resolve();
    }
            )
    },[code])



    const codeConfirm=useCallback(async()=>{
        if(code===undefined){
            alert('코드를 입력해주세요');
            return;
        }
        // if(code===0000){
        //     let pwd=prompt('비밀번호 입력');
        //     if(pwd===0000) {               
        //     }
        // }
        await codeDispatch()
       
    },[code])

    useEffect(()=>{
    if (codeInfo && !codeRequest&&code) router.push({pathname:`/manager/${code}`,as:`/manager/${code}`});
    },[codeRequest,codeInfo])
   return( 
    <>
   <CodeInput style={{display:'block',textAlign:'center',marginTop:188}}>
    <form onSubmit={codeConfirm}>
       <p>코드를 입력해주세요</p>     
            <input ref={inputEL} type='text' onChange={onChangeCode}
                    value={code}>
        </input>
        <img onClick={codeConfirm} src="/group.png"></img>
    </form>
           {/* 코드 검사후 없으면 admoin2.js 있으면 [adminpage]로 이동한다. */}
    </CodeInput>
    <CodeInquire>
        <label>* 코드 문의: </label>
       <a href='https://pf.kakao.com/_xgxaSLd'><img src="group-4.jpg"/></a>
    </CodeInquire>
   </>
   )
}
export default manager;