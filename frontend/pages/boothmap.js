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
    top:13.5rem
`
const OverLay=styled.div`
zIndex:500;
position:absolute;
width:100%;
height:calc(100%+23px);
opacity:0.7;
backgroundColor:rgba(35, 35, 35, 0.7);
top:0px;
left:0px;
`


const Boothmap=()=>{
    const [toggle,setToggle]=useState(false)
    const [detail,setDetail]=useState(true)
    const [markerPosition,setMarkerPosition]=useState([])

    const backgroundImage=useRef();
    const boothMap=useRef();

    const markerClick=useCallback(()=>{
        setToggle(true);
        backgroundImage.current.style.height='32rem'
    },[])
      const markerUnClick=useCallback(()=>{
        setToggle(false);
        backgroundImage.current.style.height='38rem'
    },[])
    const more=useCallback(()=>{
       setDetail(false);
    },[])
    
    return(
        <>
        {detail?
        <>
            <img src='/boothmap.jpg' onClick={markerUnClick} ref={backgroundImage} style={{width:'100%',height:'38rem'}}/>
            {!toggle
             ?<OriginMarker src='/shape.png' onClick={markerClick}/>
             :<ClickMarker src='/clickShape.png' onClick={markerUnClick}/>
             }
            {toggle&&
                <div  style={{marginTop:24}}>
                    <div>
                    <span style={{fontSize:15,color:"#003e94",marginLeft:'2rem'}}><strong>부스이름</strong></span>
                    <span style={{float:'right',fontSize:15,color:"#333",marginRight:'2rem'}}>17:00~20:00</span>
                    </div>
               <div><label style={{float:'right',fontSize:13,color:'#f00',marginTop:8,marginRight:'2rem'}}>만석</label></div>                
                   <div style={{clear:'both',textAlign:'center',marginTop:'2rem'}}>
                   <img onClick={more} src="/moreMenu.png"/>
                   </div> 
                </div>
        }
         </>
        :
        <OverLay>

        </OverLay>
        }
        </>
    )
}

export default Boothmap;