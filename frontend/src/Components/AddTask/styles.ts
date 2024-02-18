import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 70vw;
  border: 1px solid #ccc;
  border-radius: 16px;
  display: flex;
  margin: 8px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background: #082ccc;

  &:hover {
    background: #0726b0;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 24px;
`;

export const Text = styled.p`
  color: #eee;
  font-size: 20px;
  font-weight: 400;
  margin: 16px;
`;
