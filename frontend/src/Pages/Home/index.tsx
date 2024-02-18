import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import TaskFill from "../../Img/taskFill.png";
import Settings from "../../Img/settings.svg";
import Folder from "../../Img/folder.svg";
import Logout from "../../Img/logout.svg";
import SidebarItem from "../../Components/SidebarItem";
import TaskCard from "../../Components/TaskCard";
import AddTask from "../../Components/AddTask";
import AddModal from "../../Components/AddModal";

import axios from "axios";
import { UserData } from "../../App";
import DeleteModal from "../../Components/DeleteModal";
import UpdateModal from "../../Components/UpdateModal";
// import ExpandSidebarItem from './../../Components/ExpandSidebarItem/index';

interface PropsType {
  userToken: string;
  userData: UserData | undefined;
  onLogout: () => void;
}

const Home: React.FC<PropsType> = ({ userToken, userData, onLogout }) => {
  const [userTasks, setUserTasks] = useState<TaskType[]>();
  const [taskId, setTaskId] = useState<number | undefined>();

  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean | undefined>(false);
  const [showUdate, setShowUpdate] = useState<boolean | undefined>(false);

  const getAllTasks = useCallback(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };
    axios
      .get("http://127.0.0.1:3000/api/v1/todos/", { headers: headers })
      .then((response) => {
        console.log("all tasks", response.data.tasks);
        setUserTasks(response.data.tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userToken]);

  useEffect(() => {
    getAllTasks();
  }, [getAllTasks, userToken, showAdd, showDelete, showUdate]);

  function handleShowAdd() {
    setShowAdd(true);
  }
  const handleDelete = () => {
    setShowDelete(true);
  };
  const handleUpdate = () => {
    setShowUpdate(true);
  };

  return (
    <S.Page>
      <S.Sidebar>
        <S.Img src={Logo} />
        <S.Tabs>
          <SidebarItem
            icon={TaskFill}
            name="Tasks"
            isActive={true}
          ></SidebarItem>
          {/* <ExpandSidebarItem
            icon={Folder}
            name="Categories"
          ></ExpandSidebarItem> */}
          <SidebarItem
            icon={Settings}
            name="Settings"
            isActive={false}
          ></SidebarItem>
        </S.Tabs>
        <S.Tabs onClick={onLogout}>
          <SidebarItem
            icon={Logout}
            name="Logout"
            isActive={false}
          ></SidebarItem>
        </S.Tabs>
      </S.Sidebar>
      <S.Main>
        <S.Header>Hi {userData && userData.name}</S.Header>
        <S.Header>All your tasks</S.Header>

        {userTasks &&
          userTasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              content={task.content}
              description={task.description}
              //   color={task.color}
              is_complete={task.is_complete ? true : false}
              setTaskId={setTaskId}
              onDelete={handleDelete}
              onUpdaTe={handleUpdate}
            />
          ))}
        <AddTask handleClick={handleShowAdd} />
      </S.Main>
      {showDelete && (
        <DeleteModal
          setShowDelete={setShowDelete}
          taskId={taskId}
          userToken={userToken}
        />
      )}
      {showAdd && <AddModal setShowAdd={setShowAdd} userToken={userToken} />}
      {showUdate && (
        <UpdateModal
          setShowUpdate={setShowUpdate}
          taskId={taskId}
          userToken={userToken}
        />
      )}
    </S.Page>
  );
};

export default Home;

type TaskType = {
  content: string;
  createdAt: string;
  description: string;
  id: 2;
  is_complete: string;
  updatedAt: string;
  userId: 2;
};
