import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Routes from "./Routes.jsx";
import Store from "./store/Store";
import "babel-polyfill";

const store = new Store();

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById("target"));
