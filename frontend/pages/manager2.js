import React, { useState, useRef, useCallback, useEffect, Fragment } from 'react'
import styled from 'styled-components'


const Input=styled.input`
    border:'none'
    backgroundColor='#f0f0f0'
`

const manager2=()=>{
    // let Menu=new Array(10).fill({food:'',price:'',soldOut:true});
    const [rows,setRows]=useState([1,2,3,4,5]);
    const [cols,setCols]=useState([0,1,2]);
    const [fullBtn,setFullBtn]=useState(false);
    const [emptyBtn,setEmptyBtn]=useState(false);
    const [Menu, setMenu] = useState([{ food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }
        , { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }
        , { food: '', price: '', soldOut: false }, { food: '', price: '', soldOut: false }])
    const [boothname,setBoothname]=useState('');

    const fBtn=useRef();
    const eBtn=useRef();
    // function changeButton(){
        
    // }

    const submitBooth=()=>{

    }

    if(emptyBtn){
        eBtn.current.style.borderColor="#64a5ff"
        eBtn.current.style.color='#64a5ff'
        fBtn.current.style.borderColor = "#333"
        fBtn.current.style.color = '#333'
    }
    if (fullBtn) {
        fBtn.current.style.borderColor = "#f00"
        fBtn.current.style.color = '#f00'
        eBtn.current.style.borderColor = "#333"
        eBtn.current.style.color = '#333'
    }
  
    //  const switchSoldOut=useCallback((index)=>{
    //      Menu[index].soldOut ? Menu[index].soldOut = false : Menu[index].soldOut=true;
    //  },[Menu])
    const addTable=useCallback(()=>{
        setRows([...rows,1])
    },[rows])


    useEffect(()=>{
        console.log(Menu)
    },[Menu])
    return(
        <>
        <form onSubmit={()=>{submitBooth}}>
            <div style={{marginTop:'2em',marginBottom:'2.7em'}}>
                <img src="/oval1.png" style={{marginLeft:'1.8em',width:12,height:12}}></img>
                <label>부스이름</label>
                <div style={{textAlignLast:'center',marginTop:'0.9em'}}>
                <input name="boothName" type='text'  placeholder='부스 이름을 적어주세요 (최대 15자)' 
                style={{ textAlign:'center', width: 300, height: 36,borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                </input>
                </div>
            </div>
            <div>
                <img src="/oval1.png" style={{marginLeft:'1.8em',width:12,height:12}}></img>
                <label>운영시간</label>
                <div style={{textAlign:'center',marginTop:'0.9em'}}>
                <input name="opTimeOpen"  type='text' placeholder='00 : 00' 
                style={{  textAlign:'center',width: 131,height: 36,borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                </input>
                 <label>  ~  </label>
                 <input  name="opTimeClose"  type='text' placeholder='00 : 00' 
                style={{  textAlign:'center',width: 131,height: 36,borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                </input>
            </div>
            </div>
            <div style={{marginTop:'2.7em',marginBottom:'2.7em'}}>
                <img src="/oval1.png" style={{marginLeft:'1.8em',width:12,height:12}}></img>
                <label>만석여부</label>
                <div style={{textAlign:'center',marginTop:'0.9em'}}>
                <button type='button' title='만석' ref={fBtn} onClick={(e)=>{
                    e.preventDefault();
                    setFullBtn(true);setEmptyBtn(false)}}
                style={{ marginRight:'2.3em' ,textAlign:'center',width: 131,height: 36,borderRadius: 7,backgroundColor: '#fff'}}>
                    만석
                </button>

                 <button type='button' placeholder='자리있음' ref={eBtn} onClick={(e)=>{
                     e.preventDefault();
                     setEmptyBtn(true);setFullBtn(false)}} defaultChecked={true}
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
                             <td contentEditable={true} onKeyUp={
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
                             i===2&&(Menu[index].soldOut===false?<img onClick={()=>{
                                 setMenu(
                                         Menu.map((v,ind)=>{return ind===index?Object.assign(v,{soldOut:true}) :v})
                                     )   
                             }     
                             } src='reveal.png'/>
                             :<img onClick={(e)=>{
                                setMenu(
                                         Menu.map((v,ind)=>{return ind===index?Object.assign(v,{soldOut:false}) :v})
                                     )   
                             }} src='unreveal.png'/>)}    
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
        </form>
        <footer style={{textAlign:'center'}}>
            <img src='group.png'/>
        </footer>
        </>
    )
}   
export default manager2;