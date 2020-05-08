import React, { useState, Fragment, useCallback, useRef } from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import { INDEXPOST_REQUEST ,SHUTTLEPOST_REQUEST} from '../store/image';

const Admin=()=>{
    const [index,setIndex]=useState();
    const [shuttle,setShuttle]=useState();
    const dispatch=useDispatch();

    const indexImgChange=useCallback((e)=>{
        setIndex(e.target.files)
    },[index])
    const shuttleImgChange=useCallback((e)=>{
        setShuttle(e.target.files)
    },[shuttle])
    const onSubmitIndexImage=useCallback((e)=>{
          e.preventDefault();
        const imgFormData=new FormData();
        console.log(index);
        imgFormData.append('indexImage',index);
        dispatch({
            type:INDEXPOST_REQUEST,
            data: imgFormData
        })
    },[index])
   const onSubmitShuttleImage=useCallback((e)=>{
         e.preventDefault();
         const imgFormData = new FormData();
         imgFormData.append('shuttleImage', shuttle);
         dispatch({
             type: SHUTTLEPOST_REQUEST,
             data: imgFormData
         })
   }, [shuttle])
    return(
        <>
        <form encType="multipart/form-data" onSubmit={onSubmitIndexImage}>
        <div>
        <label>시작화면 사진등록하기</label>
        <input type="file"  onChange={indexImgChange} ></input>
        <button htmlType="submit">등록하기</button>
        </div>
        </form>
        <form ype="multipart/form-data" onSubmit={onSubmitShuttleImage}>
        <div>
        <label>셔틀버스 사진등록하기</label>
        <input  onChange={shuttleImgChange} type="file" ></input>
        <button htmlType="submit">등록하기</button>
        </div>
        </form>
        {/* <label>일정 등록하기</label>
        <div>
        <span>날짜</span><span>시간과 일정입력</span>
        </div> */}
        </>
    )
}
export default Admin;