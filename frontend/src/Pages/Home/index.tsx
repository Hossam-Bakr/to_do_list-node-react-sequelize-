import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import TaskFill from "../../Img/taskFill.png";
import Settings from "../../Img/settings.svg";
import Folder from "../../Img/folder.svg";
import Logout from "../../Img/logout.svg";
import SidebarItem from "../../Components/SidebarItem";
import ExpandSidebarItem from "../../Components/ExpandSidebarItem";
import TaskCard from "../../Components/TaskCard";
import AddTask from "../../Components/AddTask";
import AddModal from "../../Components/AddModal";

import axios from "axios";
import { UserData } from "../../App";

interface PropsType {
  userToken: string;
  userData: UserData | undefined;
  onLogout: () => void;
}

const Home: React.FC<PropsType> = ({ userToken, userData, onLogout }) => {
  const [userTasks, setUserTasks] = useState<TaskType[]>();
  const [showAdd, setShowAdd] = useState<boolean>(false);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };
    axios
      .get("http://127.0.0.1:3000/api/v1/todos/", { headers: headers })
      .then((response) => {
        console.log(response.data.tasks);
        setUserTasks(response.data.tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userTasks, userToken]);

  function handleClick() {
    setShowAdd(true);
  }

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
          <ExpandSidebarItem
            icon={Folder}
            name="Categories"
          ></ExpandSidebarItem>
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
        <S.TitleAndFilter>
          {/* <S.Title onClick={handleDone}>Tasks </S.Title> */}
          {/* <S.FilterField>
            <div onClick={handleAll}>
              <FilterTag name="All" active={allActive} />
            </div>
            <div onClick={handleDone}>
              <FilterTag name="Done" active={doneActive} />
            </div>
            <div onClick={handleNotDone}>
              <FilterTag name="Not done" active={notDoneActive} />
            </div>
            <S.FilterIcon src={Filter} />
          </S.FilterField> */}
        </S.TitleAndFilter>
        {userTasks &&
          userTasks.map((task) => (
            <TaskCard
              key={task.id}
              name={task.content}
              list={task.description}
              //   color={task.color}
              done={task.is_complete ? true : false}
            />
          ))}
        <AddTask handleClick={handleClick} />
      </S.Main>
      {/* {showDelete && <DeleteModal/>} */}
      {showAdd && <AddModal setShowAdd={setShowAdd} userToken={userToken} />}
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

// const{taskList, doneTasks, notDoneTasks} = useContext(TaskListContext) as TaskListType;
// const{showDelete} = useContext(DeleteContext) as DeleteType;
// const{showAdd} =  useContext(AddContext) as AddType;
// const [listToDisplay, setListToDisplay] = useState(0);
// const listOfLists = [taskList, doneTasks, notDoneTasks];
// const [allActive, setAllActive] = useState(true);
// const [doneActive, setDoneActive] = useState(false);
// const [notDoneActive, setNotDoneActive] = useState(false);
// const {setUserData} = useContext(AuthContext) as AuthType;

// function handleAll(){
//     setListToDisplay(0);
//     setAllActive(true);
//     setDoneActive(false);
//     setNotDoneActive(false);
// };

// function handleDone(){
//     setListToDisplay(1);
//     setAllActive(false);
//     setDoneActive(true);
//     setNotDoneActive(false);
// };
// function handleNotDone(){
//     setListToDisplay(2);
//     setAllActive(false);
//     setDoneActive(false);
//     setNotDoneActive(true);
// };

// function handleLogout(){
//     localStorage.removeItem('@Project:email');
//     setUserData({email:""});
// };
