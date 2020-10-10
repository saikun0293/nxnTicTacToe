import React, { Component } from "react";
import Navbar from "./Navbar";
import Axios from "axios";
import TicTacToe from "./TicTacToe";
import "../styles/Game.css";
import APIKEY from "./APIKEY";
import { connect } from "react-redux";
import { updateTurn, updateRound, endGame, updateScore, resetRound } from "../redux";

const api = Axios.create({ baseURL: "https://crudcrud.com/api/" + APIKEY });
// let data;
class GamePage extends Component {
  state = {
    round: 1,
    status: "",
    turn: "",
    endGame: false,
    redScore: 0,
    blueScore: 0,
    reset: false,
  };

  handleStatus = () => {
    if (!this.state.endGame) {
      const { turn } = this.state;
      const { red, blue } = this.props;
      if (turn === "X") {
        this.setState({ status: "It's " + red.username + "'s turn" });
      } else if (turn === "O") {
        this.setState({ status: "It's " + blue.username + "'s turn" });
      }
    }
  };

  constructor(props) {
    super(props);
    console.log(this.props);
    const { red, blue} = this.props;
    this.state.redScore = red.total_score;
    this.state.blueScore = blue.total_score;

    const rand = Math.floor((Math.random() * 10) % 2);
    if (rand === 1) {
      this.state.status = "It's " + blue.username + "'s turn";
      this.state.turn = "O";
    } else if (rand === 0) {
      this.state.status = "It's " + red.username + "'s turn";
      this.state.turn = "X";
    }
  }

  handlePlay = () => {
    this.props.updateRound();
    this.props.updateTurn();
    window.location.reload();
  };

  handleEndGame = () => {
    this.props.resetRound();
    const{red,blue}=this.props;
    api.get("/red/"+red._id).then((res)=>{
      const redData=res.data;
      delete redData._id;
      redData.total_score=red.total_score;
      console.log("red",redData);
      api.put("/red/"+red._id,redData).then((res)=>{
        console.log(res);
      })
    })
    api.get("/blue/"+blue._id).then((res)=>{
      const blueData=res.data;
      delete blueData._id;
      blueData.total_score=blue.total_score;
      console.log("blue",blueData);
      api.put("/blue/"+blue._id,blueData).then((res)=>{
        console.log(res);
      })
    })
    this.props.history.push("/");
  };

  handleWinner = (winner) => {
    const { red, blue } = this.props;
    if (winner === "D") {
      // console.log("It's a draw!");
      this.setState({ status: "It's a draw!", endGame: true });
    } else {
      // console.log("The winner is " + winner);
      if (winner === "X") {
        this.setState({
          status: "The winner is " + red.username,
          endGame: true,
          redScore: this.state.redScore + 1,
        });
        this.props.updateScore("red");
      } else if (winner === "O") {
        this.setState({
          status: "The winner is " + blue.username,
          endGame: true,
          blueScore: this.state.blueScore + 1,
        });
        this.props.updateScore("blue");
      }
    }
  };

  handleTurn = (turn) => {
    this.setState({ turn }, () => {
      this.handleStatus();
    });
  };

  handleReset = () => {
    this.setState({ reset: false });
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
              <div className="player-name">{this.props.red.username}</div>
              <div className="red-player-score">{this.props.red.total_score}</div>
            </div>
          </div>
          <div className="blue-col">
            <div className="bluescore" width="50vw" height="50vh">
              <div className="blue-player-score">{this.props.blue.total_score}</div>
              <div className="player-name">{this.props.blue.username}</div>
            </div>
            <i className="fab fa-joomla fa-5x"></i>
          </div>
        </div>

        <div className="layout">
          <TicTacToe
            turn={this.state.turn}
            reset={this.state.reset}
            onReset={this.handleReset}
            onWinner={this.handleWinner}
            onChangeTurn={this.handleTurn}
          />
          <div className="status-container">
            <div className="round">{`Round ${this.props.game.round}`}</div>
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

const mapStateToProps = (state) => {
  return {
    red: state.player.red,
    blue: state.player.blue,
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTurn: (t) => dispatch(updateTurn(t)),
    updateRound: (r) => dispatch(updateRound(r)),
    updateScore: (t) => dispatch(updateScore(t)),
    endGame: () => dispatch(endGame()),
    resetRound: ()=>dispatch(resetRound()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
