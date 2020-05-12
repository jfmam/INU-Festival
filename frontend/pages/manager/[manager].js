import React, { useState, useRef, useCallback, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {useRouter} from 'next/router'
import {MENUPOST_REQUEST, POSTSUCCESS} from '../../store/menu';

const BoothNameDiv=styled.div`
margin-top:2rem;
margin-bottom:2.7rem;
&>img{
    margin-left:1.8rem;
    width:12px;
    height:12px;
}
&>div{
    text-align-last:center;
    margin-top:0.9rem;
    &>input{
        text-align:center;
        width: 300px;
        height: 36px;
        border-radius: 7px;
        background-color: #f0f0f0;
    }
}
`

const Openingtime=styled.div`
&>img{
    margin-left:1.8rem;
    width:12px;
    height:12px;
}
&>div{
    text-align:center;
    margin-top:0.9rem;
    &>input{
        text-align:center;
        width:131px;
        height:36px;
        border-radius:7px;
        background-color: #f0f0f0;
    }
}
`
const FullDiv=styled.div`
margin-top:2.7rem;
margin-bottom:2.7rem;
&>img{
    marginleft:1.8rem;
    width:12px;
    height:12px;
}
&>div{
    text-align:center;
    margin-top:0.9rem;
}
`
const FullBtn=styled.button`
 margin-right:2.3rem;
 text-align:center;
 width:131px;
 height:36px;
 border-radius:7px;
 background-color:#fff;
 border:${props=>props.borderColor};
 color:${props=>props.buttonColor};
`
const EmptyBtn=styled.button`
color:${props=>props.buttonColor};
 border:${props=>props.borderColor};
 text-align:center;
 width:131px;
 height:36px;
 border-radius:7px;
 background-color:#fff;
`
const MenuPost=styled.div`
&>img{
margin-left:1.7rem;
width:12px;
height:12px;
}
&>div{
 display:flex;
 justify-content:center;
}
`
const Table=styled.table`
width:18.75rem; 
border-radius:7px;
background-color:#f0f0f0;
 text-align:center;

`

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const manager2=(props)=>{
    const [rows,setRows]=useState([1,2,3,4,5]);
    const [cols,setCols]=useState([0,1,2]);
    const [fullBtn,setFullBtn]=useState(false);
    const [emptyBtn,setEmptyBtn]=useState(true);
    const [Menu, setMenu] = useState([{ food: '', price: '', soldOut: false }, 
        { food: '', price: '', soldOut: false },
        { food: '', price: '', soldOut: false },{ food: '', price: '', soldOut: false },
        { food: '', price: '', soldOut: false },{ food: '', price: '', soldOut: false },
        { food: '', price: '', soldOut: false },{ food: '', price: '', soldOut: false },
        { food: '', price: '', soldOut: false },{ food: '', price: '', soldOut: false }])
    const [toggle,setToggle]=useState(false);
    const [boothname,setBoothname]=useInput(null);
    const [opTimeOpen,setopTimeOpen]=useInput(null);
    const [opTimeClose,setopTimeClose]=useInput(null);
    console.log(fullBtn,emptyBtn)
    const router=useRouter();
    const dispatch=useDispatch(); 
    const {postSuccess,codeRequest,menuPostRequest,codeInfo}=useSelector(state=>state.menu);
    const changeButton=useCallback((e)=>{
      e.preventDefault();
   if(e.target.textContent==='만석'){
        setFullBtn(true);
        setEmptyBtn(false);
   }
    else{
        setEmptyBtn(true);
        setFullBtn(false);
    }
     },[emptyBtn,fullBtn])
     const onSubmitForm=useCallback(()=>{
         const MenuList=Menu.map((item,index)=>{
             if(item.food&&item.price) return item;
         })
       
        dispatch({
            type:MENUPOST_REQUEST,
            data:{
            code:codeInfo.code,
            boothName:boothname?boothname:codeInfo.boothName,
            opTimeOpen:opTimeOpen?opTimeOpen:codeInfo.opTimeOpen,
            opTimeClose:opTimeClose?opTimeClose:codeInfo.opTimeClose,
            full:fullBtn,
            menu:MenuList
            }
        })
            alert("등록성공");
            router.push('/manager');
            return;
     },[boothname,opTimeOpen,opTimeClose,Menu,codeInfo,fullBtn])
    const addTable=useCallback((e)=>{
        e.preventDefault();
        setRows([...rows,1]);
        console.log(rows.length);
    },[rows]) 

    useEffect(()=>{
        if(codeInfo.full){
            setFullBtn(true);
            setEmptyBtn(false);
        }
        codeInfo.Menus&&setMenu(Menu.map((item,index)=>{
            return codeInfo.Menus[index]?Object.assign(item,codeInfo.Menus[index]):item;
        }))
    },[])

    return(
        <>
        <form onSubmit={onSubmitForm}>
            <BoothNameDiv>
                <img src="/oval1.png" ></img>
                <label>부스이름</label>
                <div>
                <input onChange={setBoothname} defaultValue={codeInfo?(codeInfo.boothName?codeInfo.boothName:''):''} name="boothName" type='text'  placeholder='부스 이름을 적어주세요 (최대 15자)' >
                </input>
                </div>
            </BoothNameDiv>
            <Openingtime>
                <img src="/oval1.png"></img>
                <label>운영시간</label>
                <div>
                <input onChange={setopTimeOpen} defaultValue={codeInfo?(codeInfo.opTimeOpen?codeInfo.opTimeOpen:''):''} name="opTimeOpen"  type='text' placeholder='00 : 00'>
                </input>
                 <label>  ~  </label>
                 <input onChange={setopTimeClose}  defaultValue={codeInfo?(codeInfo.opTimeClose?codeInfo.opTimeClose:''):''} name="opTimeClose"  type='text' placeholder='00 : 00' >
                </input>
            </div>
            </Openingtime>
            <FullDiv>
                <img src="/oval1.png"></img>
                <label>만석여부</label>
                <div>
                <FullBtn type='button' title='만석'  onClick={changeButton} borderColor={fullBtn?'1px solid #f00':'1px solid gray'} buttonColor={fullBtn?'#f00':'gray'}>
                    만석
                </FullBtn>
                 <EmptyBtn type='button'  onClick={changeButton} borderColor={emptyBtn?'1px solid #64a5ff':'1px solid gray'} buttonColor={emptyBtn?"#64a5ff":'gray'}>
                   자리있음
                </EmptyBtn>
                </div>
            </FullDiv>
            <MenuPost>
               <img src="/oval1.png"></img>
               <label>메뉴판</label>
                <div>
                    <Table>
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
                                 i===0&&codeInfo&&<>{codeInfo.Menus.map((ele,j)=>{
                                 return j===index?<>{ele.food}</>:<></>
                                 })}</>
                             }  
                             {
                                 i===1&&codeInfo&&<>{codeInfo.Menus.map((ele,j)=>{
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
                    </Table>
                </div>
            </MenuPost>
            <div style={{textAlign:'center'}}>
                  {rows.length<10&&<label style={{color:'#223ca3',fontSize:13}} onClick={addTable}>+추가하기</label>}
            </div>
        <footer style={{textAlign:'center'}}>
            <img onClick={onSubmitForm} src='/group.png'/>
        </footer>
        </form>
        </>
    )
}   

manager2.getInitialProps=async(ctx)=>{
    return ctx.store.getState.codeInfo
}

export default manager2;