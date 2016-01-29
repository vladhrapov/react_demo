import Reflux from "reflux";
import Api from "../utils/Api.jsx";
import ImageActions from "../actions/ImageActions.jsx";

Reflux.Store = Reflux.createStore().constructor;

class ImageStore extends Reflux.Store {
  constructor() {
    super();
    this.api = new Api();
  }

  removeUnvailableImages(arr) {
    return arr.filter((img) => {
      return !img.is_album;
    });
  }

  triggerChange() {
    this.trigger("change", this.images);
  }

  getImages(topicId) {
    this.api.get("topics/" + topicId).then((json) => {
      this.images = this.removeUnvailableImages(json.data);
      this.triggerChange();
    });
  }

  getImage(imageId) {
    this.api.get("gallery/image/" + imageId).then((json) => {
      if (this.images) {
        this.images.push(json.data);
      }
      else {
        this.images = [json.data];
      }
      this.triggerChange();
    });
  }

  find(imageId) {
    let image = this.images.filter((item) => {
      return item.id === imageId;
    });

    if (image) {
      return image;
    }
    else {
      this.getImage(imageId);
      return null;
    }
  }
}

ImageStore.prototype.listenables = [ImageActions];

export default ImageStore;
