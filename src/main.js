import React from "react";
import ReactDOM from "react-dom";
import ThumbnailList from "./components/ThumbnailList.jsx";
import { options, options2 } from "./data.js";

console.log(options, options2);

ReactDOM.render(React.createElement(ThumbnailList, options), document.getElementById("target"));
//ReactDOM.render(<ThumbnailList  />, document.getElementById("target"));
