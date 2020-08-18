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
        <div className="layout">
          <TicTacToe onWinner={this.handleWinner} />
          <div className="status">
            <p>{`Round ${this.state.round}`}</p>
            {/* Play again and End game only enabled after the match */}
            <div>
              <button className="btn" onClick={() => this.handlePlay()}>
                Play Again
              </button>
              <button className="btn" onClick={() => this.handleEndGame()}>
                End Game
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GamePage;
