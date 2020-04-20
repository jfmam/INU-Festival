import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { INDEXIMAGE_REQUEST } from '../store/image';
//toggle을 redux에 넣어주고 나면 opacaty를 0.7정도로주자
const startPage=()=>{
  const dispatch=useDispatch();
  const {indexImage}=useSelector(state=>state.image);
  useEffect(()=>{
    dispatch({
      type:INDEXIMAGE_REQUEST
    })
  },[])
    return(
        <>
          <img style={{width:'100%',height:'38em'}} src="/dummyImage.png"></img>
        </>
    )
}

// startPage.getInitialProps=async(context)=>{
//   context.store.dispatch({
//       type: INDEXIMAGE_REQUEST
//   })
// }

export default startPage;