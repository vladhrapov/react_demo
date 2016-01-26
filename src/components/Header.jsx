import React from "react";
import {Router, Route, Link, HashHistory} from "react-router";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Imgur Browser
          </Link>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="">Topic #1</a></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
