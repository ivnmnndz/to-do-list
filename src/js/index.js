import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";
import TodosApp from "./component/TodosApp.jsx";

ReactDOM.render(<TodosApp />, document.querySelector("#app"));
