import React from "react";

class ImagePreview extends React.Component {
  constructor() {
    super();
  }

  renderImage() {
    let link = "http://i.imgur.com/" + this.props.id + "h.jpg";

    return <image src={link} />
  }

  render() {
    return (
      <div>
        {this.renderImage()}
      </div>
    );
  }
}

export default ImagePreview;
