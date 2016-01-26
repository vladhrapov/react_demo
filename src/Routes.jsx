import React from "react";
import {Router, Route, Link, HashHistory} from "react-router";
import Main from "./components/Main.jsx";

let routes = (
  <Router history={HashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
);

export default routes;
