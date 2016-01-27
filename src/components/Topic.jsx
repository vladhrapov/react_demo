import React from "react";
import Reflux from "reflux";
import ReactMixin from "react-mixin";
import ImagePreview from "./ImagePreview.jsx";
import ImageStore from "../stores/ImageStore.jsx";
import ImageActions from "../actions/ImageActions.jsx";

class Topic extends React.Component {
  constructor() {
    super();
    this.imageStore = new ImageStore();
    this.listenTo(this.imageStore, "onChange");
    this.state = {
      images: []
    };
  }

  componentWillMount() {
    ImageActions.getImages(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    ImageActions.getImages(nextProps.params.id);
  }

  onChange(event, images) {
    this.setState({
      images: images
    });
  }

  renderImages() {
    return this.state.images.map((image) => {
      return (
        <ImagePreview key={image.id} {...image}/>
      );
    });
  }

  render() {
    return (
      <div>
        topic {this.props.params.id}
        {this.renderImages()}
      </div>
    );
  }
}

ReactMixin(Topic.prototype, Reflux.ListenerMixin);

export default Topic;
