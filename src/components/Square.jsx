import React, { Component } from "react";
import "../styles/Square.css";

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
    fontSize: 0,
  };

  squareClick = (event) => {
    const { x, y } = this.state;
    let value = event.target.textContent;
    if (value !== "X" && value !== "O") {
      const xando = this.props.player === "X" ? "X" : "O";
      event.target.innerHTML =
        "<div class='" + xando + "'>" + this.props.player + "</div>";
      this.props.onClick({ x: x, y: y });
    }
  };

  constructor(props) {
    super(props);
    //it is aceptable to directly change the state only in constructor else setState is prefered
    const { x, y, dim, width } = this.props;
    this.state.x = x;
    this.state.y = y;
    let side = (0.97 * width) / dim;

    this.state.side = side;
    this.squareStyle.width = side;
    this.squareStyle.height = side;
    this.squareStyle.fontSize = side / 2;
  }

  render() {
    return (
      <div
        style={this.squareStyle}
        className="square"
        onClick={(e) => {
          this.squareClick(e);
        }}
      ></div>
    );
  }
}

export default Square;
