import React from "react";

class Topic extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div>topic {this.props.params.id}</div>
    );
  }
}

export default Topic;
