import React, { Component } from "react";
import Navbar from "./Navbar";
import TicTacToe from "./TicTacToe";
import "../styles/Game.css";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faSlack } from "../../node_modules/@fortawesome/free-brands-svg-icons";
import { faJoomla } from "../../node_modules/@fortawesome/free-brands-svg-icons";

class GamePage extends Component {
  state = {
    dimensions: 3,
    round: 1,
  };

  constructor(props) {
    super(props);
    this.state.dimensions = this.props.matrixSize;
  }

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
        <div className="matchscore">
          <div className="logocol">
            <FontAwesomeIcon className="logo" icon={faSlack} color="red" />
            <div className="redscore" width="50vw" height="50vh"></div>
          </div>
          <div className="logocol">
            <div className="bluescore" width="50vw" height="50vh"></div>
            <FontAwesomeIcon className="logo" icon={faJoomla} color="blue" />
          </div>
        </div>

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
