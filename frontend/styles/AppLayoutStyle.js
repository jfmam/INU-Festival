import styled from 'styled-components';

export const App = styled.div `
   @media (max-width:360px||max-height:640px) {
      max-width:360px;
      max-height:640px;
    }
   @media (max-width:411px||max-height:820px) {
    max-width:411px;
    max-height:820px;
    }
    overflow:scroll;
`

export const Drawer = styled.aside `
    position:absolute;
    z-index:20;
    width:77%;
    height:96%;
   background-color:#fff;
   top:25px;
   left:22%;
   border:1px solid #d3d3d3;
   overflow:scroll;
`

export const Header = styled.header `
    margin-top:20px;
    display:flex;
    align-content:center;
    justify-content:space-around;
    border-bottom:solid 1px #979797;

`
export const DrawerBack = styled.div `
position:absolute;
width:96%;
top:25px;
height:96%;
z-index:19;
background-color:rgba(35, 35, 35, 0.7);
opacity:0.7;
`