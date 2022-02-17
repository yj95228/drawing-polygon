import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";

ReactDOM.render(
  <React.StrictMode>
    <RenderAfterNavermapsLoaded ncpClientId={"jqe51ds7wm"}>
      <App />
    </RenderAfterNavermapsLoaded>
  </React.StrictMode>,
  document.getElementById("root")
);
