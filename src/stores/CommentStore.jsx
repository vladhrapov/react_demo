import Reflux from "reflux";
import Api from "../utils/Api.jsx";
import CommentActions from "../actions/CommentActions.jsx";

Reflux.Store = Reflux.createStore().constructor;

class CommentStore extends Reflux.Store {
  constructor() {
    super();
    this.api = new Api();
  }

  triggerChange() {
    this.trigger("change", this.comments);
  }

  getComments(id) {
    this.api.get("gallery/" + id + "/comments").then((json) => {
      this.comments = json.data;
      this.triggerChange();
    });
  }
}

CommentStore.prototype.listenables = [CommentActions];

export default CommentStore;
