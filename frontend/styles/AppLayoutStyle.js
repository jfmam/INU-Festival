import styled from 'styled-components';

export const AppDiv=styled.div`
   @media (max-width:360px||max-height:640px) {
      max-width:360px;
      max-height:640px;
    }
   @media (max-width:411px||max-height:820px) {
    max-width:411px;
    max-height:820px;
    }
    @media (max-width:1024px||max-height:820px) {
    max-width:360px;
    max-height:640px;
    }
 
`

export const Drawer=styled.aside`
    position:absolute;
    z-index:20;
    width:77%;
    height:100%;
   background-color:#fff;
   top:0;
   left:22%;
   border:1px solid #d3d3d3;
`

export const Header=styled.header`
 display:flex;
 align-content:center;
 justify-content:space-around;
border-bottom:solid 1px #979797;
margin-top:19px;
height:46px;
`
export const DrawerBack=styled.div`
position:absolute;
width:96%;
top:0;
height:100%;
z-index:19;
background-color:rgba(35, 35, 35, 0.7);
`

export const Img=styled.img`
width:100%;
height:calc(100%-66px);
`