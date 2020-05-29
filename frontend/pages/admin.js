import React, { useState, Fragment, useCallback, useRef, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { INDEXPOST_REQUEST ,SHUTTLEPOST_REQUEST} from '../store/image';
import {CODECREATE_REQUEST} from '../store/menu'
import {SCHEDULEGET_REQUEST,SCHEDULEPOST_REQUEST,SCHEDULEDELETE_REQUEST} from '../store/timetable'
const Admin=()=>{
    const [index,setIndex]=useState();
    const [shuttle,setShuttle]=useState();
    const [code,setCode]=useState(0);
    const [sc, setSc] = useState();
    const {scheduleInfo}=useSelector(state=>state.timetable);
    const [postSchedule,setPostSchedule]=useState();
    const [updateSchedule,setUpdateSchedule]=useState();
    const dispatch=useDispatch();
    const indexImgChange=useCallback((e)=>{
        setIndex(e.target.files)
    },[index])
    const shuttleImgChange=useCallback((e)=>{
        setShuttle(e.target.files)
    },[shuttle])
    const codeCreate=useCallback((e)=>{
        setCode(e.target.value)
    },[code]);

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
   const onSubmitCode=useCallback((e)=>{
       e.preventDefault();
       dispatch({
           type:CODECREATE_REQUEST,
           data:Number(code)
       })
   })
   const onChangeSchedule=useCallback((i)=>e=>{
       e.preventDefault();
       if(i===1) setPostSchedule({...postSchedule,scheduleDate:e.target.value});
       else if(i===2) setPostSchedule({...postSchedule,time:e.target.value});
       else setPostSchedule({...postSchedule,schedule:e.target.value});
   },[postSchedule]);
   const onSubmitSchedule=useCallback((e)=>{
       e.preventDefault();
       dispatch({
           type:SCHEDULEPOST_REQUEST,
           data:postSchedule
       })
   },[postSchedule])

   const removeSchedule=useCallback(index=>e=>{
    setUpdateSchedule(updateSchedule.filter((item,i)=>i!==index));
    dispatch({
        type:SCHEDULEDELETE_REQUEST,
        data:Number(index+1)
    })
   }, [updateSchedule])
   useEffect(()=>{
       setUpdateSchedule(scheduleInfo);
   },[scheduleInfo]);

    return(
        <>
        <form encType="multipart/form-data" onSubmit={onSubmitIndexImage}>
        <div>
        <label>시작화면 사진등록하기</label>
        <input type="file"  onChange={indexImgChange} ></input>
        <button htmlType="submit">등록하기</button>
        </div>
        </form>
        
        <form encType="multipart/form-data" onSubmit={onSubmitShuttleImage}>
        <div>
        <label>셔틀버스 사진등록하기</label>
        <input  onChange={shuttleImgChange} type="file" ></input>
        <button htmlType="submit">등록하기</button>
        </div>
        </form>    

        <form onSubmit={onSubmitCode}>
            <div>
                <label>코드생성하기(숫자만 입력)</label>
                <input onChange={codeCreate} type="text"/>
                 <button htmlType="submit">생성하기</button>
            </div>
        </form>
        <form onSubmit={onSubmitSchedule}>
          <label>날짜 등록(28 월)</label><input type='text' onChange={onChangeSchedule(1)} />
            <label>시간 등록(17:00)</label><input type='text' onChange={onChangeSchedule(2)}/>
            <label>일정 등록</label><input type='text' onChange={onChangeSchedule(3)}/>
            <button htmlType="submit">등록하기</button> 
        </form>

        <form>
        {updateSchedule&&updateSchedule.map((item,index)=>{
            return(
                <div>
                <label>{item.scheduleDate}</label>
                <label>{item.time}</label>
                <label>{item.schedule}</label>
                <button type="button" onClick={removeSchedule(index)}>삭제하기</button>
                </div>
            )
        })}
        </form>
        </>
    )
}

Admin.getInitialProps=async(context)=>{
    context.store.dispatch({
        type:SCHEDULEGET_REQUEST
    })
}

export default Admin;