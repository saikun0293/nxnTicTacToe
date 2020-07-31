import React, { Component } from "react";

class Square extends Component {
  state = {
    x: 0,
    y: 0,
    side: 0,
    content: null,
  };

  squareStyle = {
    width: 0,
    height: 0,
    backgroundColor: "black",
    color: "white",
  };

  squareClick = (event) => {
    const { x, y } = this.state;
    let value = event.target.innerHTML;
    if (value !== "X" && value !== "O") {
      event.target.innerHTML = this.props.player;
      this.props.onClick({ x: x, y: y });
    }
  };

  constructor(props) {
    super(props);
    //it is aceptable to directly change the state only in constructor else setState is prefered
    const { x, y, dim, width } = this.props;
    this.state.x = x;
    this.state.y = y;
    let side = (0.95 * width) / dim;

    this.state.side = side;
    this.squareStyle.width = side;
    this.squareStyle.height = side;
  }

  render() {
    return (
      <div
        style={this.squareStyle}
        onClick={(e) => {
          this.squareClick(e);
        }}
      ></div>
    );
  }
}

export default Square;
