import React, { useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { SHUTTLEIMAGE_REQUEST } from '../store/image';

const Shuttle=()=>{
  const dispatch=useDispatch();
  const {shuttleImage}=useSelector(state=>state.image);
  useEffect(()=>{
    dispatch({
      type:SHUTTLEIMAGE_REQUEST
    })
  },[])
 
  return(
    
        <>

          <img style={{width:'100%',height:'38em'}} onClick={()=>{console.log(Menu[0])}} src="/shuttle.png"></img>
        </>
    )   

    
}

export default Shuttle;