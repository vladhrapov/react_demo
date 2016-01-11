import React from "react";

class Badge extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <button className="btn btn-primary" type="button">
        {this.props.title} <span className="badge">{this.props.number}</span>
      </button>
    );
  }
}

export default Badge;
