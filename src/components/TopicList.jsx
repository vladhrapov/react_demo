import React from "react";
import Reflux from "reflux";
import ReactMixin from "react-mixin";
import TopicStore from "../stores/TopicStore.jsx";

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
    this.topicStore.getTopics()
  }

  onChange(event, topics) {
    this.setState({
      topics: topics
    });
  }

  renderTopics() {
    let i = -1;
    return this.state.topics.map((topic) => {
      i++;
      return (
        <li key={i}>
          {JSON.stringify(topic)}
        </li>
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
