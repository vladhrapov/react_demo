import React from "react";
import Reflux from "reflux";
import ReactMixin from "react-mixin";
import {Router, Route, Link, HashHistory} from "react-router";
import TopicStore from "../stores/TopicStore.jsx";
import TopicActions from "../actions/TopicActions.jsx";

class TopicList extends React.Component {
  constructor() {
    super();
    this.topicStore = new TopicStore();
    this.listenTo(this.topicStore, "onChange");
    this.state = {
      topics: []
    };
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
    return this.state.topics.map((topic) => {
      return (
        <Link to={"topics/" + topic.id} className="list-group-item" key={topic.id}>
          <h4>{topic.name}</h4>
          <p>{topic.description}</p>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="list-group">
        Topic list
        {this.renderTopics()}
      </div>
    );
  }
}

ReactMixin(TopicList.prototype, Reflux.ListenerMixin);

export default TopicList;
