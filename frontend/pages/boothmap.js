import React, { useEffect, useState, useCallback, useRef, Fragment} from "react";
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import * as position from '../components/position'
import {GETALLBOOTHINFO_REQUEST} from '../store/menu'
import {OriginMarker,ClickMarker,OverLay,Modal,BoothInfo,MenuInfo,MenuInfoDetail}from '../styles/BoothmapStyles'

const Boothmap=()=>{
    const [detail,setDetail]=useState(false)//부스 상세정보 보기 
    const [clear,setClear]=useState(false);//마커클릭시 클릭한 마커외에는 모두 사라짐
    const [markerPosition,setMarkerPosition]=useState([
        {code:1,left:position.CONS8_7_6_5_RIGHT,top:position.TOP2},
        {code:2,left:position.CONS8_7_6_5_RIGHT,top:position.TOP3}
        ]);
        //position.js참조 code와 position 위치를 넣는다.
       const [toggle,setToggle]=useState(Array(markerPosition.length).fill(false));//true인것만 보여준다.
        const [boothInfo,setBoothInfo]=useState();//클릭한 부스의 정보를 보여준다
    
    const backgroundImage=useRef();//백그라운드 이미지 클릭시에 스타일을 건드려야한다
    const {allBoothInfo}=useSelector(state=>state.menu)//모든 부스정보를 가져오는곳
    const markerClick=useCallback((element,i)=>()=>{//마커클릭시 일어나는 메소드
        setToggle(toggle.map((item,index)=>{
            return index===i?true:item
        }))
        setClear(true);
        backgroundImage.current.style.height='27rem'//-6rem을 해준값으로한다
        setBoothInfo(allBoothInfo.filter((item,index)=>{
            return item.code===element.code}));
        setMarkerPosition(markerPosition.map((item,index)=>{
            return Object.assign(item,{left:`${item.left.slice(0,2)-2}%`,top:`${item.top.slice(0,item.top.length-3)-3.75}rem`});
        }))//마커클릭시 스타일 변환 left는 -2만큼 top은 -3.75만큼해준다
    },[toggle,allBoothInfo,boothInfo,markerPosition])
      const markerUnClick=useCallback(()=>{//마커 해제시 필요한부분
        setToggle(
            Array(markerPosition.length).fill(false)
        );//모두 false로 돌린다
        setClear(false);//파란색마커가 전부 다시 나오게한다
          setMarkerPosition(markerPosition.map((item,index)=>{
            return Object.assign(item,{left:`${Number(item.left.slice(0,2))+2}%`,top:`${Number(item.top.slice(0,item.top.length-3))+3.75}rem`});
        }))//마커포지션 원상복귀
        backgroundImage.current.style.height='33rem'
         setBoothInfo(null);
    },[toggle,boothInfo,markerPosition])
    const more=useCallback(()=>{
       setDetail(true);
    },[detail])
    const closeBtn=useCallback(()=>{
        setDetail(false);
    },[detail])
  console.log(toggle)
    return(
        <>
            <img src='/boothmap.jpg' ref={backgroundImage} style={{width:'100%',height:'33rem'}}/>
            {toggle.map((element,i)=>{
            return element?(  
            <Fragment>
            {markerPosition.map((item,index)=>{
                return i===index&&<ClickMarker key={index} left={item.left} top={item.top} src='/clickShape.png' onClick={markerUnClick}/>})} 
               {/* left는 -2 right는 -3.75해준다 i===index가없으면 element가 true이면 mp 모두 클릭상태로 출력됌 */}
               <BoothInfo>  
                    <div>
            <span style={{fontSize:15,color:"#003e94",marginLeft:'2rem'}}><strong>{boothInfo[0].boothName}</strong></span>
            <span style={{float:'right',fontSize:15,color:"#333",marginRight:'2rem'}}>{`${boothInfo[0].opTimeOpen}~${boothInfo[0].opTimeClose}`}</span>
                    </div>
            {boothInfo[0].full&&<div><label style={{float:'right',fontSize:13,color:'#f00',marginTop:8,marginRight:'2rem'}}>만석</label></div>}   
               </BoothInfo>
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
                        <MenuInfo>
                            <strong>메뉴</strong> 
                        </MenuInfo>
                      </div>
                     
                    {boothInfo[0].Menus.map((item,index)=>{
                        return(
                        <>
                        <MenuInfoDetail key={index}>
                        {item.soldOut
                        ?(
                        <>
                         <span style={{float:'left',padding:4,marginLeft:'1rem',color:'rgba(35,35,35,0.7)'}}>{item.food}</span>
                        <span style={{float:'right',padding:4,marginRight:'1rem',color:'#f00'}}>품절</span>
                        </>
                        )
                        :(
                         <>   
                         <span style={{float:'left',padding:4,marginLeft:'1rem'}}>{item.food}</span>
                        <span style={{float:'right',padding:4,marginRight:'1rem'}}>{item.price}</span>
                        </>
                        )
                        }
                        </MenuInfoDetail>
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
             )
                :!clear&&markerPosition.map((item,index)=>{
                return (
                <OriginMarker key={index} left={item.left} top={item.top} src='/shape.png' onClick={markerClick(item,index)}/>) 
             }) })
            
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