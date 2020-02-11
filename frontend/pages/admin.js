import React, { useState, useCallback, useRef, Fragment } from 'react'

const Admin=()=>{
    const [code,setCode]=useState(null)
    const onChangeCode=useCallback((e)=>{
        setCode(e.target.value)
    },[code])
    const inputEL=useRef(null)

   return( 
    <Fragment>
   <div style={{display:'block',textAlign:'center',marginTop:188}}>
       <p style={{fontSize:15,}}>코드를 입력해주세요</p>     
            <input ref={inputEL} type='text' onChange={(e)=>{onChangeCode(e)}} 
                    value={code} style={{width: 225, height:41,borderRadius: 7,
                     backgroundColor: '#f0f0f0',marginBottom:23,marginTop:23}}>
        </input>
        <img src="/group.png"></img>
    </div>
    <div style={{textAlign:'center',marginTop:205}}>
        <span><label style={{fontSize:15}}>* 코드문의:  </label></span>
        <span><img src="group-4.jpg"/></span>
    </div>
   </Fragment>
   )
}
export default Admin;