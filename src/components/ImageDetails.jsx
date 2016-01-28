import React from "react";

class ImageDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.params.imageId);
    return (<div>Img details {this.props.params.imageId}</div>);
  }
}

export default ImageDetails;
