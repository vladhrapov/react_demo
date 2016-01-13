import React from "react";
import ReactFire from "reactfire";
import Firebase from "firebase";
import ReactMixin from "react-mixin";
import Header from "./Header.jsx";
import List from "./List.jsx";
const rootUrl = "https://burning-inferno-6281.firebaseio.com/";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: {}
    };
  }

  componentWillMount() {
    // bindAsObject is a method from ReactFire that sets: this.state.items = {...}
    this.bindAsObject(new Firebase(rootUrl + "items/"), "items");
  }

  render() {
    return (
      <div>
        <div className="row panel panel-default">
          <div className="col-md-8 col-md-offset-2">
            <h2 className="text-center">
              To-Do App
            </h2>
          </div>
        </div>
        <Header itemsStore={this.firebaseRefs.items} />
        <List items={this.state.items} />
      </div>
    );
  }
}

ReactMixin(App.prototype, ReactFire);

export default App;
