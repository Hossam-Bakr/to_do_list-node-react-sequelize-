import React from "react";
import Completed from "../Completed/Completed";
import Important from "../Important/Important";
import OrdinaryTask from "./../OrdinaryTask/OrdinaryTask";

const Mylist = ({data}) => {

  return (
    <>
      <OrdinaryTask data={data.tasks} />
      <Completed />
      <Important />
    </>
  );
};

export default Mylist;
