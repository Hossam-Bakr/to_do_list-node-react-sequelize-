import React, { useState } from "react";
import * as S from "./styles";
import axios from "axios";

interface PropsType {
  setShowAdd: React.Dispatch<React.SetStateAction<boolean>>;
  userToken: string;
}

const AddModal: React.FC<PropsType> = ({ setShowAdd, userToken }) => {
  const [taskContent, setTaskContent] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskContent(event.target.value);
  };
  const handleDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDesc(event.target.value);
  };

  const addHandler = () => {
    const taskData = {
      content: taskContent,
      description: taskDesc,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    axios
      .post("http://127.0.0.1:3000/api/v1/todos/", taskData, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        setShowAdd(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    setShowAdd(false);
  };

  return (
    <S.Background>
      <S.Container>
        <S.Text>Enter Content</S.Text>
        <S.TitleInput
          placeholder="Task Content"
          onChange={handleName}
          value={taskContent}
        />
        <S.Text>Enter a Description</S.Text>
        <S.TitleInput
          placeholder="Task Description"
          onChange={handleDesc}
          value={taskDesc}
        />

        <S.Buttons>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
          <S.AddButton onClick={addHandler}>Add</S.AddButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default AddModal;
