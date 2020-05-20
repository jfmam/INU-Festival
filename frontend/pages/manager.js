import React, { useState, useCallback, useRef, Fragment,useEffect } from 'react'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {CODE_REQUEST, RESET} from '../store/menu';
import {CodeInput,CodeInquire} from '../styles/ManagerStyles'


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
    if (codeInfo &&!codeRequest&&code) {router.push(`/manager/[manager]`,`/manager/${code}`);}
    },[codeRequest,codeInfo,code])
   return( 
    <>
   <CodeInput>
    <form onSubmit={codeConfirm}>
       <strong>코드를 입력해주세요</strong>     
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

manager.getInitialProps=async(context)=>{
    context.store.dispatch({
        type:RESET
    })
}
export default manager;