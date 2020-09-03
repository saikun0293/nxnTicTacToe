import React, { Component } from "react";
import Navbar from "./Navbar";
import Axios from "axios";
import TicTacToe from "./TicTacToe";
import "../styles/Game.css";
import APIKEY from "./APIKEY";

const api = Axios.create({ baseURL: "https://crudcrud.com/api/" + APIKEY });
// let data;
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
    red_id: "",
    blue_id: "",
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
    const red_id = this.state.red_id;
    const blue_id = this.state.blue_id;

    console.log(red_id, blue_id);

    //Updating scores
    api.get("/red/" + red_id).then((res) => {
      this.setState({ redScore: res.data.total_score });
    });
    api.get("/blue/" + blue_id).then((res) => {
      this.setState({ blueScore: res.data.total_score });
    });
  }

  constructor(props) {
    super(props);

    let playerData;
    if (props.location.state) {
      localStorage.setItem("routeState", JSON.stringify(props.location.state));
      playerData = props.location.state;
    } else {
      playerData = localStorage.getItem("routeState");
      if (playerData) playerData = JSON.parse(playerData);
    }

    console.log(props);
    this.state.dimensions = playerData.matrixSize;
    this.state.redPlayer = playerData.red_username;
    this.state.bluePlayer = playerData.blue_username;
    this.state.red_id = playerData.red_id;
    this.state.blue_id = playerData.blue_id;
    //random function
    const rand = Math.floor((Math.random() * 10) % 2);
    if (rand === 1) {
      this.state.status = "It's " + playerData.blue_username + "'s turn";
      this.state.turn = "O";
    } else if (rand === 0) {
      this.state.status = "It's " + playerData.red_username + "'s turn";
      this.state.turn = "X";
    }
  }

  updateWinnerScore = (winner) => {
    const { red_id, blue_id } = this.state;
    api.get("/red/" + red_id).then((res) => {
      const redData = res.data;
      delete redData._id;
      redData.scores.push(winner === "X" ? 1 : 0);
      redData.total_matches++;
      redData.total_score =
        winner === "X" ? redData.total_score + 1 : redData.total_score;

      api.put("/red/" + red_id, redData).then((res) => {
        console.log(res);
      });
    });
    api.get("/blue/" + blue_id).then((res) => {
      const blueData = res.data;
      delete blueData._id;
      blueData.scores.push(winner === "O" ? 1 : 0);
      blueData.total_matches++;
      blueData.total_score =
        winner === "O" ? blueData.total_score + 1 : blueData.total_score;

      api.put("/blue/" + blue_id, blueData).then((res) => {
        console.log(res);
      });
    });
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
            <i className="fab fa-slack fa-5x"></i>
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
            <i className="fab fa-joomla fa-5x"></i>
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
            <div className="round">{`Round ${this.state.round}`}</div>
            <div className="status">{this.state.status}</div>
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

// console.log(props.location.state);
// if (props.location.state) {
//   playerData = props.location.state;
//   data = playerData;
//   console.log("inside props.location.state");
//   console.log("playerData", playerData);
//   console.log("data", data);
// } else {
//   playerData = data;
//   console.log("Not inside props.location.state");
//   console.log("playerData", playerData);
//   console.log("data", data);
// }
