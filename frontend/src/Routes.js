import React from "react";
import { Routes, Route } from "react-router-dom";
import Important from "./pages/Important/Important";
import Completed from "./pages/Completed/Completed";
import Mylist from "./pages/MyList/Mylist";
import Trashed from "./pages/Trashed/Trashed";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Mylist />}>
        <Route path="important-tasks" element={<Important />} />
        <Route path="completed-tasks" element={<Completed />} />
      </Route>

      <Route path="/trashed-tasks" element={<Trashed />} />
    </Routes>
  );
};

export default RoutesComponent;
