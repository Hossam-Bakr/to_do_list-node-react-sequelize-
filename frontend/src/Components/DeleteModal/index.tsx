import React, { useEffect } from "react";
import * as S from "./styles";
import axios from "axios";

interface DeleteProps {
  taskId: number|undefined;
  userToken: string;
  setShowDelete:React.Dispatch<React.SetStateAction<boolean |undefined >>;
}

const DeleteModal: React.FC<DeleteProps> = ({ taskId, userToken, setShowDelete }) => {

  const deleteCanceled =()=> {
    setShowDelete(false);
  }

  function deletConfirmed() {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      };
      axios
        .delete(`http://127.0.0.1:3000/api/v1/todo/${taskId}`, {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
          if (response.data.status === "success") {
            //   getAllTasks();
            console.log("Success");
            setShowDelete(false)
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }

  return (
    <S.Background>
      <S.Container>
        <S.Text>Are you sure you want to delete this task?</S.Text>
        <S.Buttons>
          <S.CancelButton onClick={deleteCanceled}>Cancel</S.CancelButton>
          <S.DeletButton onClick={deletConfirmed}>Delete</S.DeletButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default DeleteModal;
