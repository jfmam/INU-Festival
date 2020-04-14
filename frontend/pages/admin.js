import React, { useState, Fragment } from 'react'
import styled from 'styled-components'


const Admin=()=>{
    const [arr,setArr]=useState([''])
     console.log(arr);
    return(
        <>
        <div>
        <label>시작화면 사진등록하기</label>
        <input type="file" ></input>
        <button>등록하기</button>
        </div>
        <div>
        <label>셔틀버스 사진등록하기</label>
        <input  type="file" ></input>
        <button>등록하기</button>
        </div>
        {/* <label>일정 등록하기</label>
        <div>
        <span>날짜</span><span>시간과 일정입력</span>
        </div> */}
        </>
    )
}
export default Admin;