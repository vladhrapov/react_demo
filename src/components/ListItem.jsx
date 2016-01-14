import React from "react";

class ListItem extends React.Component {
  constructor() {
    super();

  }

  componentWillMount() {
    this.state = {
      text: this.props.item.item
    };
  }

  render() {
    // {this.props.item.item} - {this.props.item.key} - {this.props.item.done.toString()}
    return (
        <div className="input-group">
          <span className="input-group-addon">
            <input type="checkbox" />
          </span>
          <input type="text" className="form-control" value={this.state.text}/>
          <span className="input-group-btn">
            <button className="btn btn-danger">Delete</button>
          </span>
        </div>
    );
  }
}

export default ListItem;
