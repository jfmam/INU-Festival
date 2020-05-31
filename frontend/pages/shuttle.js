import React, { useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { SHUTTLEIMAGE_REQUEST } from '../store/image';
import {Img} from '../styles/AppLayoutStyle'

const Shuttle=()=>{
  const {shuttleImage}=useSelector(state=>state.image);
  return(
        <>   
          <Img src={`http://192.168.0.2:5000/${shuttleImage.shuttle}`}></Img>
        </>
    )     
}

Shuttle.getInitialProps=async(context)=>{
  context.store.dispatch({
    type:SHUTTLEIMAGE_REQUEST
  })
}

export default Shuttle;