import React from "react";
import {Router, Route, Link, HashHistory} from "react-router";
import Main from "./components/Main.jsx";
import Topic from "./components/Topic.jsx";
import ImageDetails from "./components/ImageDetails.jsx";

let routes = (
  <Router history={HashHistory}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic}/>
      <Route path="/images/:id" component={ImageDetails}/>
    </Route>
  </Router>
);

export default routes;
