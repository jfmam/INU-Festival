import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { INDEXIMAGE_REQUEST } from '../store/image';
import {Img} from '../styles/AppLayoutStyle'

//toggle을 redux에 넣어주고 나면 opacaty를 0.7정도로주자
const startPage=()=>{
  const {indexImage}=useSelector(state=>state.image);
console.log(indexImage);
    return(
        <>
          <Img  src={`http://192.168.0.2:5000/${indexImage.lineUp}`}></Img>
        </>
    )
}

startPage.getInitialProps=async(context)=>{
  context.store.dispatch({
    type:INDEXIMAGE_REQUEST
  })
}

export default startPage;