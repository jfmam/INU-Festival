import React, { useEffect, useState, useCallback, useRef, Fragment} from "react";
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import * as position from '../components/position'
import {GETALLBOOTHINFO_REQUEST} from '../store/menu'

const OriginMarker=styled.img`
    position:absolute;
    left:${props=>props.left};
    top:${props=>props.top};
`
const ClickMarker=styled.img`
    position:absolute;
    left:${props=>props.left};
    top:13.75rem
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
overflow-y:scroll
`


const Boothmap=()=>{
    const [toggle,setToggle]=useState(false)
    const [detail,setDetail]=useState(false)
    const [markerPosition,setMarkerPosition]=useState([{code:1,left:position.CONS8_7_6_5_RIGHT,top:position.TOP2}]);
    //position.js참조 
    const [boothInfo,setBoothInfo]=useState();//클릭한 부스의 정보를 보여준다

    const backgroundImage=useRef();

    const {allBoothInfo}=useSelector(state=>state.menu)
    const markerClick=useCallback(element=>()=>{
        setToggle(true);
        backgroundImage.current.style.height='32rem'
        setBoothInfo(allBoothInfo.filter((item,index)=>{
            return item.code===element.code}));
    },[toggle,allBoothInfo,boothInfo])
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
            {markerPosition.map((item,index)=>{return <ClickMarker left={`${item.left.slice(0,2)-2}%`} top={`${item.top.slice(0,2)-3.75}rem`} src='/clickShape.png' onClick={markerUnClick}/>})} 
               {/* left는 -2 right는 -3.75해준다 */}
               <div style={{marginTop:24}}>  
                    <div>
            <span style={{fontSize:15,color:"#003e94",marginLeft:'2rem'}}><strong>{boothInfo[0].boothName}</strong></span>
            <span style={{float:'right',fontSize:15,color:"#333",marginRight:'2rem'}}>{`${boothInfo[0].opTimeOpen}~${boothInfo[0].opTimeClose}`}</span>
                    </div>
            {boothInfo[0].full&&<div><label style={{float:'right',fontSize:13,color:'#f00',marginTop:8,marginRight:'2rem'}}>만석</label></div>}   
               </div>
                 {detail?   
                 <OverLay>
                    <Modal>
                       <img style={{float:'right',margin:15}} src='/xbtn.png' onClick={closeBtn}/>
                    {
                    boothInfo[0].Menus&&  
                    <> 
                    <div style={{clear:'both',textAlign:'center'}}>
                        <div>
                        <strong style={{fontSize:15,color:"#003e94"}}>{boothInfo[0].boothName}</strong>
                        </div>
                        <div style={{margin:11}}><label> 
                        {`${boothInfo[0].opTimeOpen}~${boothInfo[0].opTimeClose}`} 
                        </label> </div>
                        <div style={{marginTop:50,display:'inline-block',paddingBottom:8,width:'16rem',borderBottom:'1px solid rgba(35,35,35,0.7)'}}>
                            <strong>메뉴</strong> 
                        </div>
                      </div>
                     
                    {boothInfo[0].Menus.map((item,index)=>{
                        return(
                        <>
                        <div style={{clear:"both",display:'inline-block',padding:8,width:'16rem',borderBottom:'1px solid rgba(35,35,35,0.7)'}}>
                        <span style={{float:'left',padding:4,marginLeft:'1rem'}}>{item.food}</span>
                        {item.soldOut
                        ?<span style={{float:'right',padding:4,marginRight:'1rem',color:'#f00'}}>품절</span>
                        :<span style={{float:'right',padding:4,marginRight:'1rem'}}>{item.price}</span>
                        }
                        </div>
                        </>
                        )
                    })}
                  </>
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

Boothmap.getInitialProps=async(context)=>{
    context.store.dispatch({
        type:GETALLBOOTHINFO_REQUEST
    })
}

export default Boothmap;