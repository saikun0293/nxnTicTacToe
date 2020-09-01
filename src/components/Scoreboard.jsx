import React, { Component } from "react";
import "../styles/Scoreboard.css";
import Axios from "axios";
import APIKEY from "./APIKEY";

const api = Axios.create({ baseURL: "https://crudcrud.com/api/" + APIKEY });
class Scoreboard extends Component {
  state = {
    redPlayers: [],
    bluePlayers: [],
    players: [],
  };

  constructor() {
    super();
    for (var i = this.state.players.length; i < 10; i++) {
      this.state.players.push({
        username: "-",
        password: "-",
        total_score: 0,
        team: "-",
        total_matches: 0,
        scores: [],
      });
    }
  }

  componentDidMount() {
    api.get("/red").then((res) => {
      this.setState({ redPlayers: res.data }, () => {
        console.log("redplayers added!");
      });
    });
    api.get("/blue").then((res) => {
      this.setState({ bluePlayers: res.data }, () => {
        console.log("blueplayers added!");
      });
    });
  }

  componentDidUpdate() {
    const { redPlayers, bluePlayers, players } = this.state;
    if (
      redPlayers.length !== 0 &&
      bluePlayers.length !== 0 &&
      players[0].username === "-"
    ) {
      const players = [...redPlayers, ...bluePlayers];

      players.sort((p1, p2) => p2.total_score - p1.total_score);
      if (players.length < 10) {
        for (var i = players.length; i < 10; i++) {
          players.push({
            username: "-",
            password: "-",
            total_score: 0,
            team: "-",
            total_matches: 0,
            scores: [],
          });
        }
      }
      this.setState({ players });
    }
  }

  render() {
    console.log("render", this.state.players[0]);
    return (
      <div className="leaderboardContainer">
        <table className="tableboard" align="center">
          <thead className="thead">LEADERBOARD</thead>
          <tbody>
            <tr className="rowline">
              <th className="col1">1</th>

              <td className="col">{this.state.players[0].username}</td>
              <td className="col">Score</td>
            </tr>
            <tr className="rowline">
              <th className="col2">2</th>
              <td className="col">{this.state.players[1].username}</td>
              <td className="col">Score</td>
            </tr>
            <tr className="rowline">
              <th className="col3">3</th>
              <td className="col">{this.state.players[2].username}</td>
              <td className="col">Score</td>
            </tr>
            <tr className="rowline">
              <th className="col">4</th>
              <td className="col">{this.state.players[3].username}</td>
              <td className="col">Score</td>
            </tr>
            <tr className="rowline">
              <th className="col">5</th>
              <td className="col">{this.state.players[4].username}</td>
              <td className="col">Score</td>
            </tr>
            <tr className="rowline">
              <th className="col">6</th>
              <td className="col">{this.state.players[5].username}</td>
              <td className="col">Score</td>
            </tr>
            <tr className="rowline">
              <th className="col">7</th>
              <td className="col">{this.state.players[6].username}</td>
              <td className="col">Score</td>
            </tr>
            <tr className="rowline">
              <th className="col">8</th>
              <td className="col">{this.state.players[7].username}</td>
              <td className="col">Score</td>
            </tr>
            <tr className="rowline">
              <th className="col">9</th>
              <td className="col">{this.state.players[8].username}</td>
              <td className="col">Score</td>
            </tr>
            <tr className="rowline">
              <th className="col">10</th>
              <td className="col">{this.state.players[9].username}</td>
              <td className="col">Score</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Scoreboard;
