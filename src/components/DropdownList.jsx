import React from "react";

class DropdownList extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: ""
    }
  }

  selectNewItem(item) {
    this.setState({
      activeItem: item
    });
    this.props.dropdownSetItemClicked(item);
  }

  render() {
    console.log(this.state);
    return (
      <ul className="dropdown-menu">
        {
          this.props.items.map((item) => {
            return (
              <li className={this.state.activeItem === item ? "active" : ""} onClick={this.selectNewItem.bind(this, item)}>
                <a href="#">{item}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default DropdownList;
