import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";

interface PropsType {
  setShowUpdate: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  userToken: string;
  taskId: number | undefined;
}

const UpdateModal: React.FC<PropsType> = ({
  setShowUpdate,
  userToken,
  taskId,
}) => {
  const [taskData, setTaskData] = useState<TaskType>();
  const [newTaskContent, setNewTaskContent] = useState("");
  const [newTaskDesc, setNewTaskDesc] = useState("");
  const [newIs_complete, setNewIs_complete] = useState(false);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskContent(event.target.value);
  };
  const handleDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskDesc(event.target.value);
  };
  const handleIsComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewIs_complete(event.target.checked);
  };

  useEffect(() => {
    console.log(taskId);
    axios
      .get(
        `http://127.0.0.1:3000/api/v1/todo/${taskId}?authorization=Bearer ${userToken}`
      )
      .then((response) => {
        console.log(response);
        setTaskData(response.data.task);
        setNewTaskContent(response.data.task.content);
        setNewTaskDesc(response.data.task.description);
        setNewIs_complete(response.data.task.is_complete)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userToken, taskId]);

  const updateHandler = () => {
    console.log(taskData);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const payloud = {
      "content": newTaskContent,
      "description": newTaskDesc,
      "is_complete": newIs_complete,
    };

    console.log("payloud",payloud);
    axios
      .put(`http://127.0.0.1:3000/api/v1/todo/${taskData?.id}`, payloud, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        setShowUpdate(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    setShowUpdate(false);
  };

  return (
    <S.Background>
      <S.Container>
        <S.Text>Enter Content</S.Text>
        <S.TitleInput
          placeholder="Update Task Content"
          onChange={handleName}
          value={newTaskContent}
        />
        <S.Text>Enter a Description</S.Text>
        <S.TitleInput
          placeholder="Update Task Description"
          onChange={handleDesc}
          value={newTaskDesc}
        />
        <S.Text>Is Task Done?</S.Text>
        <S.CheckboxInput
          type="checkbox"
          onChange={handleIsComplete}
          checked={newIs_complete}
        />

        <S.Buttons>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
          <S.AddButton onClick={updateHandler}>Update</S.AddButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default UpdateModal;

type TaskType = {
  id: number;
  content: string;
  description: string;
  is_complete: boolean;
  createdAt: string;
  updatedAt: string;
  userId: number;
};
