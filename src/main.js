import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Routes from "./Routes.jsx";
import Store from "./store/Store";
import {loadCourses} from "./actions/CourseActions";
import {loadAuthors} from "./actions/AuthorActions";
import "babel-polyfill";

const store = new Store();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById("target"));
