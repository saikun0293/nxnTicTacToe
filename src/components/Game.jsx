import React, { Component } from "react";
import Navbar from "./Navbar";
import Axios from "axios";
import TicTacToe from "./TicTacToe";
import "../styles/Game.css";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faSlack } from "../../node_modules/@fortawesome/free-brands-svg-icons";
import { faJoomla } from "../../node_modules/@fortawesome/free-brands-svg-icons";
import APIKEY from "./APIKEY";

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//   },
// };
const api = Axios.create({ baseURL: "https://crudcrud.com/api/" + APIKEY });

class GamePage extends Component {
  state = {
    dimensions: 3,
    round: 1,
    redPlayer: "",
    bluePlayer: "",
    turn: "",
    status: "",
    endGame: false,
    redScore: 0,
    blueScore: 0,
  };

  handleStatus = () => {
    if (!this.state.endGame) {
      const { turn, redPlayer, bluePlayer } = this.state;
      if (turn === "X") {
        this.setState({ status: "It's " + redPlayer + "'s turn" });
      } else if (turn === "O") {
        this.setState({ status: "It's " + bluePlayer + "'s turn" });
      }
    }
  };

  componentDidMount() {
    const { red_id, blue_id } = this.props.location.state;
    //Updating scores
    api.get("/red/" + red_id).then((res) => {
      this.setState({ redScore: res.data.data.total_score });
    });
    api.get("/blue/" + blue_id).then((res) => {
      this.setState({ blueScore: res.data.data.total_score });
    });
  }

  constructor(props) {
    super(props);
    const { matrixSize, red_username, blue_username } = props.location.state;
    this.state.dimensions = matrixSize;
    this.state.redPlayer = red_username;
    this.state.bluePlayer = blue_username;
    //random function
    const rand = Math.floor((Math.random() * 10) % 2);
    if (rand === 1) {
      this.state.status = "It's " + blue_username + "'s turn";
      this.state.turn = "O";
    } else if (rand === 0) {
      this.state.status = "It's " + red_username + "'s turn";
      this.state.turn = "X";
    }
  }

  updateWinnerScore = (winner) => {
    const { red_id, blue_id } = this.props.location.state;
    let redData, blueData;
    api.get("/red/" + red_id).then((res) => {
      redData = res.data;
      console.log("red data", res);
      redData.data.scores.push(winner === "X" ? 1 : 0);
      redData.data.total_matches++;
      redData.data.total_score =
        winner === "X"
          ? redData.data.total_score + 1
          : redData.data.total_score;
      console.log(redData);
    });
    api.get("/blue/" + blue_id).then((res) => {
      blueData = res.data;
      console.log("blue data", res);
      blueData.data.scores.push(winner === "O" ? 1 : 0);
      blueData.data.total_matches++;
      blueData.data.total_score =
        winner === "O"
          ? blueData.data.total_score + 1
          : blueData.data.total_score;
    });

    api.put("/red/" + red_id, redData).then((res) => console.log(res));
    api.put("/blue/" + blue_id, blueData).then((res) => console.log(res));
  };

  handlePlay = () => {
    window.location.reload();
  };

  handleEndGame = () => {
    this.props.history.push("/");
  };

  handleWinner = (winner) => {
    const { redPlayer, bluePlayer } = this.state;
    if (winner === "D") {
      console.log("It's a draw!");
      this.setState({ status: "It's a draw!", endGame: true });
    } else {
      console.log("The winner is " + winner);
      if (winner === "X") {
        this.setState({
          status: "The winner is " + redPlayer,
          endGame: true,
          redScore: this.state.redScore + 1,
        });
      } else if (winner === "O") {
        this.setState({
          status: "The winner is " + bluePlayer,
          endGame: true,
          blueScore: this.state.blueScore + 1,
        });
      }
    }
    this.updateWinnerScore(winner);
  };

  handleTurn = (turn) => {
    this.setState({ turn }, () => {
      this.handleStatus();
    });
  };

  render() {
    return (
      <div className="gameBody">
        <Navbar />
        {/* Match score here */}
        <div className="matchscore">
          <div className="red-col">
            <i class="fab fa-slack fa-5x"></i>
            <div className="redscore" width="50vw" height="50vh">
              <div className="player-name">{this.state.redPlayer}</div>
              <div className="red-player-score">{this.state.redScore}</div>
            </div>
          </div>
          <div className="blue-col">
            <div className="bluescore" width="50vw" height="50vh">
              <div className="blue-player-score">{this.state.blueScore}</div>
              <div className="player-name">{this.state.bluePlayer}</div>
            </div>
            <i class="fab fa-joomla fa-5x"></i>
          </div>
        </div>

        <div className="layout">
          <TicTacToe
            turn={this.state.turn}
            dimensions={this.state.dimensions}
            onWinner={this.handleWinner}
            onChangeTurn={this.handleTurn}
          />
          <div className="status-container">
            <div className="status">{this.state.status}</div>
            <p>{`Round ${this.state.round}`}</p>
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
