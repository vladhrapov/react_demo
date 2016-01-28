import React from "react";

class ImageDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.params.id);
    return (<div>Img details {this.props.params.id}</div>);
  }
}

export default ImageDetails;
