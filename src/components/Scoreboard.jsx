import React, { Component } from "react";
import firebase from "firebase/app";
import PlayerScore from "./PlayerScore";
import "../styles/Scoreboard.css";
class Scoreboard extends Component {
  state = {
    players: [],
  };

  loadPlayers = async () => {
    let players = [];

    await firebase
      .firestore()
      .collection("red")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let player = { ...doc.data(), team: "red", color: "#ff6464" };
          players.push(player);
        });
      });

    await firebase
      .firestore()
      .collection("blue")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let player = { ...doc.data(), team: "blue", color: "#00e0ff" };
          players.push(player);
        });
      });

    if (players.length < 10) {
      for (var i = players.length; i < 10; i++) {
        players.push({
          email: "-",
          username: "-",
          total_score: 0,
          team: "-",
          total_matches: 0,
          color: "#d6e0f0",
        });
      }
    }

    players.sort((a, b) => parseInt(b.total_score) - parseInt(a.total_score));

    console.log(players);
    this.setState({ players: players });
  };

  componentDidMount() {
    this.loadPlayers();
  }

  render() {
    return (
      <div className="leaderboardContainer">
        <div className="tableboard" align="center">
          <div className="score-board-title">Leader Board</div>
          <div>
            {this.state.players.map((player, index) => {
              return <PlayerScore key={index} no={index} data={player} />;
            })}
          </div>
        </div>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
    );
  }
}

export default Scoreboard;
