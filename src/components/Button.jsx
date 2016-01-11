import React from "react";

class Button extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <button className={"btn " + this.props.className} type="button" onClick={this.props.buttonClicked}>
        {this.props.title}
        <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
      </button>
    );
  }
}

export default Button;
