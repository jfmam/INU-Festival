import React from 'react'

const drawerPage=()=>{
    return(
         <aside className='drawer' style={{position:'absolute',zIndex:20,width:'77%',height:'96%'
   ,backgroundColor:'#ffffff',top:32,left:'30%',border:'1px solid #d3d3d3'}}>
        <img style={{marginLeft:'82%',marginTop:13.2}} onClick={async()=>{await getToggle(false);
        await drawer()
        }} src='/xbtn.png'></img>
        <div style={{marginTop:90,marginLeft:50}}>
        {Menu.map((item,index)=>{
        return <Link  href={{pathname:`/${route[index]}`}}  as={`/${route[index]}`}><a onClick={()=>{
            setToggle(false)
            drawer();
        }}><p key={index} style={{borderBottom:'solid 1px #d3d3d3',width:132,paddingBottom:23.2}}>{item}</p></a></Link>
        })}
        </div>
        <div style={{marginLeft:'17%',marginTop:'21em'}}>
            <Link href={{pathname:'/manager'}}><a onClick={()=>{ setToggle(false)
            drawer();}}><strong>운영자페이지</strong></a></Link>
        </div>
    </aside>
    )
}

export default drawerPage;