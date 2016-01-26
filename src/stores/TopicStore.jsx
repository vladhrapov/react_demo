import Reflux from "reflux";
import Api from "../utils/Api.jsx";

Reflux.Store = Reflux.createStore().constructor;

class TopicStore extends Reflux.Store {
  constructor() {
    super();
    this.api = new Api();
    console.log(Reflux);
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

export default TopicStore;
