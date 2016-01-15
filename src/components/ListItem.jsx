import React from "react";
const rootUrl = "https://burning-inferno-6281.firebaseio.com/";

class ListItem extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.state = {
      text: this.props.item.item,
      done: this.props.item.done,
      textChanged: false
    };

    this.fb = new Firebase(rootUrl + "/items/" + this.props.item.key);
    //this.bindAsObject()
  }

  setToDone(event) {
    console.log(event);
    this.setState({
      done: event.target.checked
    });
    this.fb.update({
      done: event.target.checked
    })
    //fb.on('value', this.handleDataLoaded.bind(this));
    console.log(this.props);
  }

  deleteItem() {
    this.fb.remove();
  }

  updateItem() {
    this.fb.update({
      item: this.state.text
    });
    this.setState({
      textChanged: false
    });
  }

  changeItem(event) {
    this.setState({
      text: event.target.value,
      textChanged: true
    });
  }

  undoRename() {
    this.setState({
      text: this.props.item.item,
      textChanged: false
    });
  }

  changesButtonsRender() {
    if(!this.state.textChanged) {
      return null;
    }
    else {
      return [
        <button className="btn btn-default" onClick={this.undoRename.bind(this)}>Undo</button>,
        <button className="btn btn-success" onClick={this.updateItem.bind(this)}>Save</button>
      ];
    }
  }

  render() {
    // {this.props.item.item} - {this.props.item.key} - {this.props.item.done.toString()}
    return (
        <div className="input-group">
          <span className="input-group-addon">
            <input type="checkbox" checked={this.state.done} onChange={this.setToDone.bind(this)}/>
          </span>
          <input type="text" disabled={this.state.done} className="form-control" value={this.state.text} onChange={this.changeItem.bind(this)}/>
          <span className="input-group-btn">
            {this.changesButtonsRender()}
            <button className="btn btn-danger" onClick={this.deleteItem.bind(this)}>Delete</button>
          </span>
        </div>
    );
  }
}

export default ListItem;
