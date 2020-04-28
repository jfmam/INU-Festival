import React, { useEffect, useState, useCallback, useRef, Fragment} from "react";
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import * as position from '../components/position'

const OriginMarker=styled.img`
    position:absolute;
    left:${props=>props.left};
    top:${props=>props.top};
`
const ClickMarker=styled.img`
    position:absolute;
    left:${props=>`calc(32%- 10px)`}};
    top:13.5rem
`
const OverLay=styled.div`
z-index:500;
background-color:rgba(35,35,35,0.7);
display:flex;
justify-content:center;
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
right:0;
bottom:0;
`
const Modal=styled.div`
z-index:501;
position:absolute;
background:white;
border-radius:22px;
width:18rem;
height:24rem;
text-align:center;
margin-top:11.6rem;
`


const Boothmap=()=>{
    const [toggle,setToggle]=useState(false)
    const [detail,setDetail]=useState(false)
    const [markerPosition,setMarkerPosition]=useState([{code:1,left:position.CONS8_7_6_5_RIGHT,top:position.TOP2}])
    const [boothInfo,setBoothInfo]=useState();
    //marker에 모두 code를 부여해준다.code를 부여해준다음에

    const backgroundImage=useRef();
    const boothMap=useRef();

    const {allBoothInfo}=useSelector(state=>state.menu)


    const markerClick=useCallback(element=>()=>{
        setToggle(true);
        backgroundImage.current.style.height='32rem'
        setBoothInfo(allBoothInfo.filter((item,index)=>item.code===element.code));
    },[toggle])
      const markerUnClick=useCallback(()=>{
        setToggle(false);
        backgroundImage.current.style.height='38rem'
         setBoothInfo(null);
    },[toggle])
    const more=useCallback(()=>{
       setDetail(true);
    },[detail])
    const closeBtn=useCallback(()=>{
        setDetail(false);
    },[detail])
    
    return(
        <>
            <img src='/boothmap.jpg' onClick={markerUnClick} ref={backgroundImage} style={{width:'100%',height:'38rem'}}/>
            {toggle?
            <Fragment>
            {markerPosition.map((item,index)=>{return <ClickMarker left={item.left} top={item.top} src='/clickShape.png' onClick={markerUnClick}/>})} 
               <div style={{marginTop:24}}>  
                    <div>
            <span style={{fontSize:15,color:"#003e94",marginLeft:'2rem'}}><strong>{boothInfo.boothName}</strong></span>
            <span style={{float:'right',fontSize:15,color:"#333",marginRight:'2rem'}}>{`${boothInfo.opTimeOpen}~${boothInfo.opTimeClose}`}</span>
                    </div>
            {boothInfo.full&&<div><label style={{float:'right',fontSize:13,color:'#f00',marginTop:8,marginRight:'2rem'}}>만석</label></div>}   
               </div>}
                 {detail?   
                 <OverLay>
                    <Modal>
                       <img style={{float:'right',margin:15}} src='/xbtn.png' onClick={closeBtn}/>
                    {
                    boothInfo.Menus&&   
                    <div style={{clear:'both'}}>
                        부스정보
                    </div>
                    }   
                    </Modal>  
                 </OverLay>
                :
                <div style={{clear:'both',textAlign:'center',marginTop:'2rem'}}>
                   <img onClick={more} src="/moreMenu.png"/>
                 </div> 
                 }
            </Fragment> 
                :markerPosition.map((item,index)=>{return (
                <OriginMarker left={item.left} top={item.top} src='/shape.png' onClick={markerClick(item)}/>) 
             }) 
        }
         </>
    )
}

// Boothmap.getInitialProps=async(context)=>{
//     context.store.dispatch({
//         type:GETALLBOOTHINFO_REQUEST
//     })
// }

export default Boothmap;