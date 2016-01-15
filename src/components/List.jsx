import React from "react";
import ListItem from "./ListItem.jsx";

class List extends React.Component {
  constructor() {
    super();
  }

  renderList() {
    let keys = Object.keys(this.props.items);

    if (this.props.items && keys.indexOf(".value") >= 0) {
      return (
        <h4>
          Hey, add smth to get started!
        </h4>
      );
    }
    else {
      let list = [];

      for (var i = 0; i < keys.length - 1; i++) {
        let item = this.props.items[keys[i]];
        item.key = keys[i];

        list.push(
          <ListItem item={item} key={keys[i]} />
        );
      }

      return list;
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default List;
