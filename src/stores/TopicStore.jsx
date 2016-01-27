import Reflux from "reflux";
import Promise from "bluebird";
import Api from "../utils/Api.jsx";
import TopicActions from "../actions/TopicActions.jsx";

Reflux.Store = Reflux.createStore().constructor;

class TopicStore extends Reflux.Store {
  constructor() {
    super();
    this.api = new Api();
  }

  triggerChange() {
    this.trigger("change", this.topics);
  }

  getTopics() {
    return this.api.get("topics/defaults").then((json) => {
      this.topics = json.data;
      this.triggerChange();
    });
  }
}

TopicStore.prototype.listenables = [TopicActions];

export default TopicStore;
