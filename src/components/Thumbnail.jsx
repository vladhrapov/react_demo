import React from "react";
import Badge from "./Badge.jsx";

class Thumbnail extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-sm-5 col-md-4 col-lg-4">
        <div className="thumbnail">
          <img src={this.props.imageUrl} alt="img" />
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p>
              <Badge title={this.props.title} number={this.props.number} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
