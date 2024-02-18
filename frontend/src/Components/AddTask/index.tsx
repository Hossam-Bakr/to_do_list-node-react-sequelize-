import React from "react";
import * as S from "./styles";
import Add from "../../Img/add.svg";

interface PropsType {
  handleClick: () => void;
}

const AddTask: React.FC<PropsType> = ({ handleClick }) => {
  return (
    <S.Container onClick={handleClick}>
      <S.Icon src={Add} />
      <S.Text>Add a task</S.Text>
    </S.Container>
  );
};

export default AddTask;
