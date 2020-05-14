import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { INDEXIMAGE_REQUEST } from '../store/image';
//toggle을 redux에 넣어주고 나면 opacaty를 0.7정도로주자
const startPage=()=>{
  const {indexImage}=useSelector(state=>state.image);
console.log(indexImage);
    return(
        <>
          <img style={{width:'100%',height:'calc(100%-66px)'}} src={`http://192.168.0.102:5000/${indexImage.lineUp}`}></img>
        </>
    )
}

startPage.getInitialProps=async(context)=>{
  context.store.dispatch({
    type:INDEXIMAGE_REQUEST
  })
}

export default startPage;