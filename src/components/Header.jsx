import React from "react";
import Reflux from "reflux";
import ReactMixin from "react-mixin";
import {Router, Route, Link, HashHistory} from "react-router";
import TopicActions from "../actions/TopicActions.jsx";
import TopicStore from "../stores/TopicStore.jsx";

class Header extends React.Component {
  constructor() {
    super();
    this.topicStore = new TopicStore();
    this.listenTo(this.topicStore, "onChange");
    this.state = {
      topics: []
    }
  }

  componentWillMount() {
    TopicActions.getTopics();
  }

  onChange(event, topics) {
    this.setState({
      topics: topics
    });
  }

  renderTopics() {
    return this.state.topics.slice(0, 6).map((topic) => {
      return (
        <li key={topic.id} activeClassName="active">
          <Link to={"topics/" + topic.id}>
            {topic.name}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Imgur Browser
          </Link>
          <ul className="nav navbar-nav navbar-right">
            {this.renderTopics()}
          </ul>
        </div>
      </nav>
    );
  }
}

ReactMixin(Header.prototype, Reflux.ListenerMixin);

export default Header;
