import React from "react";
import Button from "./Button.jsx";
import DropdownList from "./DropdownList.jsx";

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  dropdownToogle() {
    //alert("hello from dropdown");
    this.setState({open: !this.state.open})
  }

  dropdownSetItem(newItem) {
    this.setState({
      open: false,
      title: newItem
    });
  }

  render() {
    return (
      <div className={"btn-group " + (this.state.open ? "open" : "")}>
        <Button className="btn-danger" title={this.state.title || this.props.title} buttonClicked={this.dropdownToogle.bind(this)}/>
        <Button className="btn-danger dropdown-toggle" subTitleClassName="caret" buttonClicked={this.dropdownToogle.bind(this)}/>
        <DropdownList items={this.props.items} dropdownSetItemClicked={this.dropdownSetItem.bind(this)}/>
      </div>
    );
  }
}

export default Dropdown;
