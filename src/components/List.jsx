import React from "react";

class List extends React.Component {
  constructor() {
    super();
  }

  renderList() {
    if (this.props.items && Object.keys(this.props.items).length === 0) {
      return (
        <h4>
          Hey, add smth to get started!
        </h4>
      );
    }
    else {
      let list = [];

      for (let key in this.props.items) {
        list.push(
          <li>
            {this.props.items[key].item}
          </li>
        );
      }

      return list.slice(0, -1);
    }
  }

  render() {
    console.log(this.props);
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
