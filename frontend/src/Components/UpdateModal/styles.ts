
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
    width: 40vw;
    height: 40vh;
    background: white;
    border-radius:16px;
    opacity: 1;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    padding-top:32px;

`

export const Buttons = styled.div`
height: 80px;
display: flex;
justify-content:space-around;
align-items:center;
`



export const CancelButton = styled.button`
background: #d40b0b;
color: #eee;
border: 0px;
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

export const AddButton = styled.button`
background: #082ccc;
border: 0px;
color:#eee;
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

export const TitleInput = styled.input`
    width: 32vw;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #999;
    padding-left:8px;
    font-size: 20px;
    color: #555;
    box-sizing: border-box;
    
    &:focus{
        border: 1px solid #999;
        outline:none;
    }

    &::placeholder{
        color: #bbb;
    }

`

export const CheckboxInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  margin-right: 5px;

  &:checked {
    background-color: #007bff;
    border-color: #007bff;
  }

  &:checked::after {
    content: '\\2713';
    font-size: 16px;
    color: white;
    text-align: center;
    line-height: 20px;
  }
`;

export const Text = styled.p`
font-size:20px;
color:#555;
`