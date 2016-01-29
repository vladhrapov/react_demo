import React from "react";
import Reflux from "reflux";
import ReactMixin from "react-mixin";
import CommentStore from "../stores/CommentStore.jsx";
import CommentActions from "../actions/CommentActions.jsx";

class CommentBox extends React.Component {
  constructor() {
    super();
    this.to = 5;
    this.state = {
      comments: null
    }
  }

  componentWillMount() {
    this.setState({
      comments: this.props.comments.slice(0, 5),
    });
  }

  showMore() {
    this.to = this.to + 5;
    this.setState({
      comments: this.props.comments.slice(0, this.to),
    });
  }

  renderComments() {
    if (!this.state.comments) {
      return (
        <li className="list-group-item comment-box">There is no comments for this image right now.</li>
      );
    }

    return this.state.comments.map((comment) => {
      return (
        <li className="list-group-item comment-box" key={comment.id}>
          <span className="badge">{comment.ups}</span>
          <h5>{comment.author}</h5>
          {comment.comment}
        </li>
      );
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <ul className="list-group">
          {this.renderComments()}
        </ul>
        <div className="text-center btn-holder">
          <button className="btn btn-primary" type="button" onClick={this.showMore.bind(this)}>Show More</button>
        </div>
      </div>
    );
  }
}

ReactMixin(CommentBox.prototype, Reflux.ListenerMixin);

export default CommentBox;
