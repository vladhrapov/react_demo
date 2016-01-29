import React from "react";
import Reflux from "reflux";
import ReactMixin from "react-mixin";
import ImageStore from "../stores/ImageStore.jsx";
import CommentStore from "../stores/CommentStore.jsx";
import ImageActions from "../actions/ImageActions.jsx";
import CommentActions from "../actions/CommentActions.jsx";
import CommentBox from "./CommentBox.jsx";

class ImageDetails extends React.Component {
  constructor() {
    super();
    this.imageStore = new ImageStore();
    this.commentStore = new CommentStore();
    this.listenTo(this.imageStore, "onChange");
    this.listenTo(this.commentStore, "onChange");
    this.state = {
      image: null,
      comments: null
    };
  }

  componentWillMount() {
    ImageActions.getImage(this.props.params.imageId);
    CommentActions.getComments(this.props.params.imageId);
  }

  onChange(event) {
    let img = this.imageStore.find(this.props.params.imageId);
    img = img[img.length - 1];

    this.setState({
      image: img,
      comments: this.commentStore.comments
    });
  }

  renderImage() {
    if (this.state.image.animated) {
      return (
        <video preload="auto" autoPlay="autoPlay" loop="loop" webkit-playsinline>
          <source src={this.state.image.mp4} type="video/mp4"></source>
        </video>
      );
    }
    else {
      return (
        <img src={this.state.image.link} />
      );
    }
  }

  renderComments() {
    if (!this.state.comments) {
      return null;
    }

    return (
      <CommentBox comments={this.state.comments}/>
    );
  }

  renderContent() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>
              {this.state.image.title}
            </h4>
          </div>
          <div className="panel-body">
            {this.renderImage()}
          </div>
          <div className="panel-footer">
            {this.state.image.description}
          </div>
        </div>
        <h3>Comments</h3>
        {this.renderComments()}
      </div>
    );
  }

  render() {
    return (
      <div className="image-details">
        {this.state.image ? this.renderContent() : null}
      </div>
    );
  }
}

ReactMixin(ImageDetails.prototype, Reflux.ListenerMixin);

export default ImageDetails;
