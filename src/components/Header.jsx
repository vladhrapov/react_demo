import React from "react";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      newItem: ""
    };
  }

  addItem() {
    this.props.itemsStore.push({
      item: this.state.newItem,
      done: false
    });

    this.setState({
      newItem: ""
    });
  }

  changeInput(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" value={this.state.newItem} onChange={this.changeInput.bind(this)}/>
        <span className="input-group-btn">
          <button type="button" className="btn btn-default btn-primary" onClick={this.addItem.bind(this)}>
            Add Item
          </button>
        </span>
      </div>
    );
  }
}

export default Header;
