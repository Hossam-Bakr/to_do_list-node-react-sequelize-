import styled from "styled-components";


export const Background = styled.div`
    width:100vw;
    height:100vh;
    position:fixed;
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    background: rgba(0,0,0,0.6);
`

export const Container=styled.div`
    width: 25vw;
    height: 25vh;
    background: white;
    border-radius:16px;
    opacity: 1;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;

`

export const Text = styled.p`
    font-size:24px;
    color: #555;
    wrap: wrap;
    text-align:center;
    padding:20px;
`

export const Buttons = styled.div`
    height: 80px;
    display: flex;
    justify-content:space-around;
    align-items:center;
`

export const CancelButton = styled.button`
background: #082ccc;
color: #eee;
border: 0px;
width: 120px;
height: 40px;
border-radius: 8px;
font-size: 20px;
margin: 8px;

&:hover{
    cursor: pointer;
    background: #0726b0;
}
`

export const DeletButton = styled.button`
background: #d40b0b;
border: 0px;
color:#eee;
width: 120px;
height: 40px;
border-radius: 8px;
font-size: 20px;
margin: 8px;


&:hover{
    background: #a30707;
    cursor: pointer;
}
`