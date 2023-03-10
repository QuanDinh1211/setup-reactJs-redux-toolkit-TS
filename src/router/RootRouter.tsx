import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

const RootRouter = () => {
  return (
    <Routes>
      <Route
        path="/users"
        element={
          <span>
            Users <Outlet />
          </span>
        }
      >
        <Route path="me" element={<span>me</span>} />
        <Route path="id" element={<span>id</span>} />
      </Route>
      <Route path="/" element={<span>Home</span>} />
    </Routes>
  );
};

export default RootRouter;
