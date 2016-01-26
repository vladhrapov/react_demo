import React from "react";
import Header from "./Header.jsx";
import TopicList from "./TopicList.jsx";

class Main extends React.Component {
  constructor() {
    super();
  }

  content() {
    if (this.props.children) {
      return this.props.children;
    }
    else {
      return <TopicList />
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.content()}
      </div>
    );
  }
}

export default Main;
