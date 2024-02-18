import React from "react";
import * as S from "./styles";
import Edit from "../../Img/edit.svg";
import Erase from "../../Img/erase.svg";
import axios from "axios";

interface TaskCardProps {
  id: number;
  content: string;
  description: string;
  color?: string;
  is_complete: boolean;
  setTaskId: React.Dispatch<React.SetStateAction<number | undefined>>;
  onDelete: () => void;
  onUpdaTe: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  content,
  description,
  is_complete,
  setTaskId,
  onDelete,
  onUpdaTe,
}) => {
  function handleCheck() {
    console.log("checked!");
  }

  const handleUpdate = () => {
    setTaskId(id);
    onUpdaTe();
  };

  const handleDelete = () => {
    setTaskId(id);
    onDelete();
  };

  return (
    <S.Container>
      <S.CheckField>
        <S.CheckboxRing onClick={handleCheck}>
          <S.CheckFill done={is_complete} />
        </S.CheckboxRing>
      </S.CheckField>
      <S.Description>
        <S.Name done={is_complete}>{content}</S.Name>
        <S.ListBelong>
          {/* <S.ColorTag color={color}/> */}
          <S.ListName>{description}</S.ListName>
        </S.ListBelong>
      </S.Description>

      <S.Icon src={Edit} onClick={handleUpdate} />
      <S.Icon src={Erase} onClick={handleDelete} />
    </S.Container>
  );
};

export default TaskCard;
