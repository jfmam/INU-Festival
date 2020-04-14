import React from 'react'
import {useDispatch} from 'react-redux'
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

export default startPage;