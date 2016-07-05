import React from 'react';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import App from './components/App.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Courses from "./components/courses/Courses.jsx";
import ManageCourses from "./components/courses/ManageCourses.jsx";

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="courses" bla="56" component={Courses}/>
      <Route path="courses/:id" component={ManageCourses}/>
    </Route>
  </Router>
);
