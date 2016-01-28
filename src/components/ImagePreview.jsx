import React from "react";
import {Link} from "react-router";

class ImagePreview extends React.Component {
  constructor() {
    super();
    this.state = {
      hovering: false
    };
  }

  handleMouseEnter(event) {
    this.setState({
      hovering: true
    });
  }

  handleMouseLeave(event) {
    this.setState({
      hovering: false,
    });
  }

  renderImage() {
    let link = "http://i.imgur.com/" + this.props.id + "h.jpg";

    return <image src={link} className="image-preview"/>
  }

  renderVideo() {
    return (
      <div className="video-preview">
        <video preload="auto" autoPlay="autoPlay" loop="loop" webkit-playsinline>
          <source src={this.props.mp4} type="video/mp4"></source>
        </video>
      </div>
    );
  }

  renderIcon() {
    return (
      <span className="glyphicon glyphicon-play"></span>
    );
  }

  renderInset() {
    return (
      <div className="inset">
        <span>Views: {this.props.views}</span>
        <p>Upvotes: {this.props.ups}</p>
      </div>
    );
  }

  render() {
    console.log("hovering: ", this.state.hovering, " animated: ", this.props.animated);
    return (
      <Link to={"images/" + this.props.id} className="image-preview-block"
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}>
            {this.props.animated && this.state.hovering ? this.renderVideo() : this.renderImage()}
            {this.props.animated && !this.state.hovering ? this.renderIcon() : null}
            {this.state.hovering ? this.renderInset() : null}
      </Link>
    );
  }
}

export default ImagePreview;
