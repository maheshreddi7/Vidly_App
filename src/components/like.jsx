import React, { Component } from "react";

class Like extends Component {
  render() {
    let classess = "fa fa-heart";
    classess += this.props.liked ? "" : "-o";
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
        className={classess}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
