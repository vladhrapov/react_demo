import React from "react";
import Api from "../utils/Api.jsx";

class TopicList extends React.Component {
  constructor() {
    super();
    this.api = new Api();
    this.state = {
      topics: []
    };
  }

  componentWillMount() {
    this.api.get("topics/defaults").then((json) => {
      this.setState({
        topics: json.data
      });
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

export default TopicList;
