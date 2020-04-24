
/*global kakao*/
import React, { useEffect, useState, useCallback, useRef} from "react";
import styled from 'styled-components'

const OriginMarker=styled.img`
    position:absolute;
    left:35%;
    top:17rem
`
const ClickMarker=styled.img`
    position:absolute;
    left:32%;
    top:15rem
`

const Boothmap=()=>{
    const [toggle,setToggle]=useState(false)
    const backgroundImage=useRef();
    const markerClick=useCallback(()=>{
        setToggle(true);
        backgroundImage.current.style.height='35rem'
    },[])
      const markerUnClick=useCallback(()=>{
        setToggle(false);
        backgroundImage.current.style.height='38rem'
    },[])

    return(
        <>
        <img src='/boothmap.jpg' onClick={markerUnClick} ref={backgroundImage} style={{width:'100%',height:'38rem'}}/>
        {!toggle
        ?<OriginMarker src='/shape.png' onClick={markerClick}/>
        :<ClickMarker src='/clickShape.png' onClick={markerUnClick}/>
    }
        {toggle&&
      
                <div>
                    <div ><span><strong>부스이름</strong></span><span>오픈시간</span></div>
               <div><label>만석여부</label></div>                
               <div style={{textAlign:'center'}}><button>더 보기</button></div> 
                </div>
        }
        </>
    )
}

export default Boothmap;