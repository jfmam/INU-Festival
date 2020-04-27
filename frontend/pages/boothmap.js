import React, { useEffect, useState, useCallback, useRef, Fragment} from "react";
import styled from 'styled-components'
import {useDispatch} from 'react-redux'

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
    const [markerPosition,setMarkerPosition]=useState([])

    const backgroundImage=useRef();
    const boothMap=useRef();

    const {allBoothInfo}=useSelector(state=>state.menu)


    const markerClick=useCallback(()=>{
        setToggle(true);
        backgroundImage.current.style.height='32rem'
    },[toggle])
      const markerUnClick=useCallback(()=>{
        setToggle(false);
        backgroundImage.current.style.height='38rem'
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
            <ClickMarker src='/clickShape.png' onClick={markerUnClick}/>
                <div  style={{marginTop:24}}>
                    <div>
                    <span style={{fontSize:15,color:"#003e94",marginLeft:'2rem'}}><strong>부스이름</strong></span>
                    <span style={{float:'right',fontSize:15,color:"#333",marginRight:'2rem'}}>17:00~20:00</span>
                    </div>
               <div><label style={{float:'right',fontSize:13,color:'#f00',marginTop:8,marginRight:'2rem'}}>만석</label></div>
              </div>
                 {detail?   
                 <OverLay>
                    <Modal>
                       <img style={{float:'right',margin:15}} src='/xbtn.png' onClick={closeBtn}/>
                    <div style={{clear:'both'}}>
                        부스정보
                    </div>

                    </Modal>  
                 </OverLay>
                :
                <div style={{clear:'both',textAlign:'center',marginTop:'2rem'}}>
                   <img onClick={more} src="/moreMenu.png"/>
                 </div> 
                 }
            </Fragment> 
                :<OriginMarker src='/shape.png' onClick={markerClick}/>  
        }
         </>
    )
}

// Boothmap.getInitialProps=async(context)=>{
//     Boothmap.store.dispatch({
//         type:GETALLBOOTHINFO_REQUEST
//     })
// }

export default Boothmap;