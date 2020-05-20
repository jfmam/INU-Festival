import styled from 'styled-components';
export const OriginMarker = styled.img `
    position:absolute;
    left:${props=>props.left};
    top:${props=>props.top};
`
export const ClickMarker = styled.img `
    position:absolute;
    left:${props=>props.left};
    top:${props=>props.top};
`
export const OverLay = styled.div `
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
overflow:hidden;
`
export const Modal = styled.div `
z-index:501;
position:absolute;
background:white;
border-radius:22px;
width:18rem;
height:24rem;
text-align:center;
margin-top:6.6rem;
`

export const BoothInfo = styled.div `
margin-top:24px;
`
export const MenuInfo = styled.div `
margin-top:40px;
display:inline-block;
padding-bottom:8px;
width:16.5rem;
border-bottom:1px solid rgba(35,35,35,0.7);
overflow-y:auto
`

export const MenuInfoDetail = styled.div `
clear:both;
display:inline-block;
padding:7px;
width:15.6rem;
border-bottom:1px solid rgba(35,35,35,0.7);
`