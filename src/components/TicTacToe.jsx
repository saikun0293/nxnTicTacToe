import React, { Component } from "react";
import Square from "./Square";
import "../styles/tttstyle.css";

class TicTacToe extends Component {
  state = {
    dimensions: 3,
    width: 450,
    coord: [],
    turn: "X",
    values: [],
    endGame: false,
  };

  style = {
    innerContainer: {
      width: this.state.width,
      height: this.state.width,
    },
    outerContainer: {
      width: this.state.width * 1.01,
      height: this.state.width * 1.01,
    },
  };

  constructor(props) {
    super(props);
    this.state.dimensions = Number(this.props.dimensions);
    let d = this.state.dimensions;
    for (let i = 0; i < d; i++) {
      let val = [];
      for (let j = 0; j < d; j++) {
        this.state.coord.push([i, j]);
        val.push(0);
      }
      this.state.values.push(val);
    }
    this.state.turn = this.props.turn;
  }

  handleWinner = () => {
    let { values, dimensions } = this.state;
    let count = 0;
    let diag1 = [0, 0];
    let diag2 = [0, 0];
    let win = null;
    for (var i = 0; i < dimensions; i++) {
      let row = [0, 0];
      let col = [0, 0];
      for (var xy = 0; xy < dimensions; xy++) {
        row[0] = values[i][xy] === "X" ? row[0] + 1 : row[0];
        row[1] = values[i][xy] === "O" ? row[1] + 1 : row[1];
        col[0] = values[xy][i] === "X" ? col[0] + 1 : col[0];
        col[1] = values[xy][i] === "O" ? col[1] + 1 : col[1];
        if (values[i][xy] !== 0) {
          count++;
        }
      }

      if (row[0] === dimensions || col[0] === dimensions) {
        win = "X";
        break;
      } else if (row[1] === dimensions || col[1] === dimensions) {
        win = "O";
        break;
      }

      diag1[0] = values[i][i] === "X" ? diag1[0] + 1 : diag1[0];
      diag1[1] = values[i][i] === "O" ? diag1[1] + 1 : diag1[1];
      diag2[0] =
        values[i][dimensions + i - 1] === "X" ? diag2[0] + 1 : diag2[0];
      diag2[1] =
        values[i][dimensions + i - 1] === "O" ? diag2[1] + 1 : diag2[1];
    }

    if (diag1[0] === dimensions || diag2[0] === dimensions) {
      win = "X";
    } else if (diag1[1] === dimensions || diag2[1] === dimensions) {
      win = "O";
    }

    if (win === "X") {
      this.props.onWinner("X");
      this.setState({ endGame: true });
    } else if (win === "O") {
      this.props.onWinner("O");
      this.setState({ endGame: true });
    } else if (count === dimensions * dimensions) {
      this.props.onWinner("D");
      this.setState({ endGame: true });
    }
  };

  handleClick = (coordinates) => {
    if (!this.state.endGame) {
      const { x, y } = coordinates;
      let { values, turn } = this.state;
      values[x][y] = turn;
      turn = turn === "X" ? "O" : "X";
      this.setState({ values: values, turn: turn }, () => {
        this.props.onChangeTurn(this.state.turn);
      });
      this.handleWinner();
    }
  };

  render() {
    return (
      <div className="outer-container" style={this.style.outerContainer}>
        <div className="inner-container" style={this.style.innerContainer}>
          {this.state.coord.map((d, index) => {
            return (
              <Square
                onClick={this.handleClick}
                player={this.state.turn}
                key={index}
                x={d[0]}
                y={d[1]}
                dim={this.state.dimensions}
                width={this.state.width}
                endGame={this.state.endGame}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TicTacToe;
