import React from "react";
import ReactDOM from "react-dom";
import ThumbnailList from "./components/ThumbnailList.jsx";
import Dropdown from "./components/Dropdown.jsx";
import { options, options2 } from "./data.js";

console.log(options, options2);

ReactDOM.render(React.createElement(ThumbnailList, options), document.getElementById("target"));
ReactDOM.render(React.createElement(Dropdown, options2), document.getElementById("dropdown-wrapper"));
//ReactDOM.render(<ThumbnailList  />, document.getElementById("target"));
