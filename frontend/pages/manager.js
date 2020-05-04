import React, { useState, useCallback, useRef, Fragment,useEffect } from 'react'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {CODE_REQUEST} from '../store/menu'




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
        await codeDispatch()

    },[code])

    useEffect(()=>{
        if(codeInfo&&!codeRequest){router.push('/manager/[manager]',`/manager/${code}`);}
    },[codeInfo,codeRequest])
   return( 
    <Fragment>
   <div style={{display:'block',textAlign:'center',marginTop:188}}>
    <form onSubmit={codeConfirm}>
       <p style={{fontSize:15,}}>코드를 입력해주세요</p>     
            <input ref={inputEL} type='text' onChange={onChangeCode}
                    value={code} style={{width: 225, height:41,borderRadius: 7,textAlign:"center",
                     fontSize:15,backgroundColor: '#f0f0f0',marginBottom:23,marginTop:23}}>
        </input>
        <img onClick={codeConfirm} src="/group.png"></img>
    </form>
           {/* 코드 검사후 없으면 admoin2.js 있으면 [adminpage]로 이동한다. */}
    </div>
    <div style={{textAlign:'center',marginTop:'12em'}}>
        <label>* 코드 문의: </label>
       <a href='https://pf.kakao.com/_xgxaSLd'><img  style={{verticalAlign:'middle'}} src="group-4.jpg"/></a>
    </div>
   </Fragment>
   )
}
export default manager;