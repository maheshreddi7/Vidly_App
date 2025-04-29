import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h4>Id is : {this.props.counter.id}</h4>
        <h6
          style={{ marginLeft: 20, marginRight: 20 }}
          className={this.colourClass()}
        >
          {this.props.counter.value}
        </h6>
        <button
          className="btn btn-secondary"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Incement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  colourClass() {
    let colour = "btn btn-sm btn-";
    colour += this.props.counter.value === 0 ? "warning" : "primary";
    return colour;
  }
}

export default Counter;
