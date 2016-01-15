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
      items: {},
      loaded: false
    };
  }

  componentWillMount() {
    this.fb = new Firebase(rootUrl + "items/");
    // bindAsObject is a method from ReactFire that sets: this.state.items = {...}
    this.bindAsObject(this.fb, "items");
    this.fb.on('value', this.handleDataLoaded.bind(this));
  }

  handleDataLoaded() {
    this.setState({
      loaded: true
    });
  }

  clearComplete() {
    for (let key in this.state.items) {
      if (this.state.items[key].done) {
        this.fb.child(key).remove();
      }
    }
  }

  renderDeleteButton() {
    if (!this.state.loaded) {
      return;
    }
    else {
      return (
        <div className="text-center clear-complete">
          <hr />
          <button type="button" className="btn btn-primary" onClick={this.clearComplete.bind(this)}>Clear Complete</button>
        </div>
      );
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="row panel panel-default">
          <div className="col-md-8 col-md-offset-2">
            <h2 className="text-center">
              ....
            </h2>
          </div>
        </div>
        <Header itemsStore={this.firebaseRefs.items} />
        <div className={"content " + (!!this.state.loaded ? "loaded" : "")}>
          <List items={this.state.items} />
          {this.renderDeleteButton()}
        </div>
      </div>
    );
  }
}

ReactMixin(App.prototype, ReactFire);

export default App;
