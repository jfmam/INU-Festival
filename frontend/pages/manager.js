import React, { useState, useCallback, useRef, Fragment } from 'react'
import {useRouter} from 'next/router'

const manager=()=>{
    const [code,setCode]=useState(null)
    const onChangeCode=useCallback((e)=>{
        setCode(e.target.value)
    },[code])
    const inputEL=useRef(null)
    const router=useRouter();

   return( 
    <Fragment>
   <div style={{display:'block',textAlign:'center',marginTop:188}}>
       <p style={{fontSize:15,}}>코드를 입력해주세요</p>     
            <input ref={inputEL} type='text' onChange={(e)=>{onChangeCode(e)}} 
                    value={code} style={{width: 225, height:41,borderRadius: 7,textAlign:"center",
                     fontSize:15,backgroundColor: '#f0f0f0',marginBottom:23,marginTop:23}}>
        </input>
        <img onClick={()=>{router.push('/manager2')}} src="/group.png"></img>
           {/* 코드 검사후 없으면 admoin2.js 있으면 [adminpage]로 이동한다. */}
    </div>
    <div style={{textAlign:'center',marginTop:'12em'}}>
        <label>* 코드 문의: </label>
       <img style={{verticalAlign:'middle'}} src="group-4.jpg"/>
    </div>
   </Fragment>
   )
}
export default manager;