import React, { useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { SHUTTLEIMAGE_REQUEST } from '../store/image';

const Shuttle=()=>{
  const dispatch=useDispatch();
  const {shuttleImage}=useSelector(state=>state.image);
  console.log(shuttleImage);
 
  return(

        <>   
          <img style={{width:'100%',height:'38em'}}  src={`http://localhost:5000/${shuttleImage.shuttle}`}></img>
        </>
    )     
}

Shuttle.getInitialProps=async(context)=>{
  context.store.dispatch({
    type:SHUTTLEIMAGE_REQUEST
  })
}

export default Shuttle;