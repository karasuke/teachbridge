import React from "react";
import ReactDOM from "react-dom/client";
import { UsersApp } from "./UsersApp";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <UsersApp />

    </BrowserRouter>
  </React.StrictMode>
);
