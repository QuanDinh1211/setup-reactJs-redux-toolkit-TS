import React from "react";
import "./assets/styles/reset.css";
import "./assets/styles/global.scss";
import RootRouter from "./router/RootRouter";

function App() {
  return (
    <div className="app-wrapper">
      <span className="error-message">
        Create app ReactJs Redux-toolkit TypeScrist
      </span>
      <RootRouter />
    </div>
  );
}

export default App;
