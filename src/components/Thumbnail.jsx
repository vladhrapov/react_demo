import React from "react";
import Button from "./Button.jsx";

class Thumbnail extends React.Component {
  constructor() {
    super();
  }

  showInbox() {
    alert("handle inbox click");
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
              <Button className="btn-primary" buttonClicked={this.showInbox.bind(this)} subTitleClassName="badge" title={this.props.title} subTitle={this.props.subTitle} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
