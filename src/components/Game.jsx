import React, { Component } from "react";
import Navbar from "./Navbar";
import TicTacToe from "./TicTacToe";
import "../styles/Game.css";

class GamePage extends Component {
  state = {
    round: 1,
  };

  handlePlay = () => {
    console.log("Restarting the match");
  };

  handleEndGame = () => {
    console.log("Game ended!");
  };

  handleWinner = (winner) => {
    if (winner === "D") {
      console.log("It's a draw");
    } else {
      console.log("The winner is " + winner);
    }
  };

  render() {
    return (
      <div className="gameBody">
        <Navbar />
        {/* Match score here */}
        <TicTacToe onWinner={this.handleWinner} />
        <p>{`Round ${this.state.round}`}</p>
        {/* Play again and End game only enabled after the match */}
        <button onClick={() => this.handlePlay()}>Play Again</button>
        <button onClick={() => this.handleEndGame()}>End Game</button>
      </div>
    );
  }
}

export default GamePage;
