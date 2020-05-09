import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { INDEXIMAGE_REQUEST } from '../store/image';
//toggle을 redux에 넣어주고 나면 opacaty를 0.7정도로주자
const startPage=()=>{
  const dispatch=useDispatch();
  const {indexImage}=useSelector(state=>state.image);
console.log(indexImage)
    return(
        <>
          <img style={{width:'100%',height:'38rem'}} src={`http://localhost:5000/dummyImage1588920910451.png`}></img>
        </>
    )
}


export default startPage;