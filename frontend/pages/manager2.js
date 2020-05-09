import React, { useState, useRef, useCallback, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {useRouter} from 'next/router'
import {MENUPOST_REQUEST, POSTSUCCESS} from '../store/menu';


export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const manager2=()=>{
    const [rows,setRows]=useState([1,2,3,4,5]);
    const [cols,setCols]=useState([0,1,2]);
    const [Btn,setBtn]=useState(false);
    const [emptyBtn,setEmptyBtn]=useState(false);
    const [Menu, setMenu] = useState([{ food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }
        , { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }
        , { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }])
    const [toggle,setToggle]=useState(false);
    const [boothname,setBoothname]=useInput(null);
    const [opTimeOpen,setopTimeOpen]=useInput(null);
    const [opTimeClose,setopTimeClose]=useInput(null);

    const router=useRouter();
    const dispatch=useDispatch(); 
    const fBtn=useRef();
    const eBtn=useRef();
    const {postSuccess,codeInfo,codeRequest,menuPostRequest}=useSelector(state=>state.menu);
    const changeButton=useCallback((e)=>{
      e.preventDefault();
    Btn?setBtn(false):setBtn(true);

    if(!Btn){
        eBtn.current.style.borderColor="#64a5ff"
        eBtn.current.style.color='#64a5ff'
        fBtn.current.style.borderColor = "#333"
        fBtn.current.style.color = '#333'
    }
   else {
        fBtn.current.style.borderColor = "#f00"
        fBtn.current.style.color = '#f00'
        eBtn.current.style.borderColor = "#333"
        eBtn.current.style.color = '#333'
    }
     },[Btn])
     const onSubmitForm=useCallback(()=>{
         console.log("전송");
        dispatch({
            type:MENUPOST_REQUEST,
            data:{
            code:codeInfo.code,
            boothName:boothname?boothname:codeInfo.boothName,
            opTimeOpen:opTimeOpen?opTimeOpen:codeInfo.opTimeOpen,
            opTimeClose:opTimeClose?opTimeClose:codeInfo.opTimeClose,
            full:Btn,
            menu:Menu
            }
        })
     },[boothname,opTimeOpen,opTimeClose,Btn,Menu,codeInfo])
    const addTable=useCallback(()=>{
        setRows([...rows,1])
    },[rows]) 

    useEffect(()=>{
        codeInfo.Menus&&setMenu(Menu.map((item,index)=>{
            return codeInfo.Menus[index]?Object.assign(item,codeInfo.Menus[index]):item;
        }))
        if (postSuccess) {
             alert("등록성공");
             dispatch({
                 type:POSTSUCCESS,
                 data:false
             })
         }
         if(postSuccess&&!menuPostRequest) router.push('/manager');
        
    },[postSuccess,codeInfo,menuPostRequest])

    return(
        <>
        <form onSubmit={onSubmitForm}>
            <div style={{marginTop:'2em',marginBottom:'2.7em'}}>
                <img src="/oval1.png" style={{marginLeft:'1.8em',width:12,height:12}}></img>
                <label>부스이름</label>
                <div style={{textAlignLast:'center',marginTop:'0.9em'}}>
                <input onChange={setBoothname} defaultValue={codeInfo?(codeInfo.boothName?codeInfo.boothName:''):''} name="boothName" type='text'  placeholder='부스 이름을 적어주세요 (최대 15자)' 
                style={{ textAlign:'center', width: 300, height: 36,borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                </input>
                </div>
            </div>
            <div>
                <img src="/oval1.png" style={{marginLeft:'1.8em',width:12,height:12}}></img>
                <label>운영시간</label>
                <div style={{textAlign:'center',marginTop:'0.9em'}}>
                <input onChange={setopTimeOpen} defaultValue={codeInfo?(codeInfo.opTimeOpen?codeInfo.opTimeOpen:''):''} name="opTimeOpen"  type='text' placeholder='00 : 00' 
                style={{  textAlign:'center',width: 131,height: 36,borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                </input>
                 <label>  ~  </label>
                 <input onChange={setopTimeClose}  defaultValue={codeInfo?(codeInfo.opTimeClose?codeInfo.opTimeClose:''):''} name="opTimeClose"  type='text' placeholder='00 : 00' 
                style={{  textAlign:'center',width: 131,height: 36,borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                </input>
            </div>
            </div>
            <div style={{marginTop:'2.7em',marginBottom:'2.7em'}}>
                <img src="/oval1.png" style={{marginLeft:'1.8em',width:12,height:12}}></img>
                <label>만석여부</label>
                <div style={{textAlign:'center',marginTop:'0.9em'}}>
                <button type='button' title='만석' ref={fBtn} onClick={changeButton}  defaultChecked={codeInfo&&codeInfo.full&&codeInfo.full}
                style={{ marginRight:'2.3em' ,textAlign:'center',width: 131,height: 36,borderRadius: 7,backgroundColor: '#fff'}}>
                    만석
                </button>
                 <button type='button' placeholder='자리있음' ref={eBtn} onClick={changeButton} defaultChecked={codeInfo&&codeInfo.full&&!(codeInfo.full)}
                style={{  color:'#64a5ff',border:'1px solid #64a5ff',textAlign:'center',width: 131,height: 36,borderRadius: 7,backgroundColor: '#fff'}}>
                    자리있음
                </button>
                </div>
            </div>
            <div>
               <img src="/oval1.png" style={{marginLeft:'1.7rem',width:12,height:12}}></img>
               <label>메뉴판</label>
                <div style={{ display:'flex',justifyContent:'center'}}>
                    <table  style={{width:'18.75rem',borderRadius: 7,backgroundColor: '#f0f0f0',textAlign:'center'}}>
                        <thead> 
                           <tr>
                            <th style={{borderBottom:'1px solid white',width:'50%'}}>음식</th>
                            <th style={{borderLeft:'1px solid white',borderRight:'1px solid white',borderBottom:'1px solid white',
                            width:'31%'}}>가격</th>
                            <th style={{borderBottom:'1px solid white',width:'19%'}} >품질</th>
                            </tr>
                        </thead>
                        <tbody>
                         {rows.fill(rows.length).map((item,index)=>{
                             return(
                            <tr style={{height:36}} key={index}>
                                {cols.fill(cols.length).map((ele,i)=>{
                                  return( 
                                <Fragment>
                             <td  suppressContentEditableWarning={true} contentEditable={true} onKeyUp={
                                 (e)=>{
                                     i===0?setMenu(
                                      Menu.map((v,ind)=>{return ind===index?Object.assign(v,{food:e.target.textContent}) :v})
                                     )
                                     :    
                                     setMenu(
                                       Menu.map((v,ind)=>{return ind===index?Object.assign(v,{price:e.target.textContent}) :v})
                                     )                                   
                                 }
                             } style={{border:'1px solid white'}}>

                             {
                                 i===0&&codeInfo.Menus&&<>{codeInfo.Menus.map((ele,j)=>{
                                 return j===index?<>{ele.food}</>:<></>
                                 })}</>
                             }  
                             {
                                 i===1&&codeInfo.Menus&&<>{codeInfo.Menus.map((ele,j)=>{
                                 return j===index?<>{ele.price}</>:<></>
                                 })}</>
                             }  
                             { 
                                 i===2&&(Menu[index].soldOut
                                 ?<img onClick={()=>{
                                    setMenu(
                                       Menu.map((v,ind)=>{return ind===index?Object.assign(v,{soldOut:false}) :v})
                                           )   
                                    }} src='/unreveal.png'/>
                                 :<img onClick={()=>{
                                     setMenu(
                                        Menu.map((v,ind)=>{return ind===index?Object.assign(v,{soldOut:true}) :v})
                                            )   
                             }     
                             } src='/reveal.png'/>
                             )}    
                             
                             </td>
                             </Fragment>
                                  )
                                })}
                            </tr>
                             )
                         })
                         }         
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{textAlign:'center'}}>
                  <label style={{color:'#223ca3',fontSize:13}} onClick={(e)=>{
                      e.preventDefault()
                      addTable()}}>+추가하기</label>
            </div>
              <footer style={{textAlign:'center'}}>
            <img onClick={onSubmitForm} src='/group.png'/>
        </footer>
        </form>
        </>
    )
}   

export default manager2;