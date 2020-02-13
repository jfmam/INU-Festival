import React from 'react'

const admin2=()=>{
    return(
        <>
        <form>
            <div style={{ marginTop:'2em',marginBottom:'2.7em'}}>
                <img src="/oval1.png" style={{width:12,height:12}}></img>
                <label>부스이름</label>
                <div style={{textAlignLast:'center',marginTop:'0.9em'}}>
                <input type='text' placeholder='부스 이름을 적어주세요 (최대 15자)' 
                style={{ textAlign:'center', width: 300, height: 36,borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                </input>
                </div>
            </div>
            <div>
                <img src="/oval1.png" style={{width:12,height:12}}></img>
                <label>운영시간</label>
                <div style={{textAlign:'center',marginTop:'0.9em'}}>
                <input type='text' placeholder='00 : 00' 
                style={{  textAlign:'center',width: 131,height: 36,borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                </input>
                 <label> ~ </label>
                 <input type='text' placeholder='00 : 00' 
                style={{  textAlign:'center',width: 131,height: 36,borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                </input>
            </div>
            </div>
            <div style={{marginTop:'2.7em',marginBottom:'2.7em'}}>
                <img src="/oval1.png" style={{width:12,height:12}}></img>
                <label>만석여부</label>
                <div style={{textAlign:'center',marginTop:'0.9em'}}>
                <button type='button' title='만석' 
                style={{ marginRight:'2.3em' ,textAlign:'center',width: 131,height: 36,borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                    만석
                </button>

                 <button type='button' placeholder='자리있음' 
                style={{  textAlign:'center',width: 131,height: 36,borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                    자리있음
                </button>
                </div>
            </div>
            <div>
               <img src="/oval1.png" style={{width:12,height:12}}></img>
               <label>메뉴판</label>
                <div style={{ display:'flex',justifyContent:'center'}}>
                    <table  style={{width:'18.75em',height:'15.75em',borderRadius: 7,backgroundColor: '#f0f0f0'}}>
                        <thead> 
                           
                            <th></th>
                             <th colSpan={3} style={{border:'1px solid white'}}>음식</th>
                            <th></th>
                            <th colSpan={2} style={{border:'1px solid white'}}>가격</th>
                            <th></th>
                            <th colSpan={1} style={{border:'1px solid white'}} >품질</th>
                        </thead>
                        <tbody >
                          
                        </tbody>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </form>
        </>
    )
}   
export default admin2;