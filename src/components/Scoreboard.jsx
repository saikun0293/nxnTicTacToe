import React, { Component } from "react";
import "../styles/Scoreboard.css";
import goldenglobe from "../Images/golden-globe.svg";
import silvercup from "../Images/silver-cup.svg";
import bronzecup from "../Images/bronze-trophy.svg";
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
        <div className="thead">
          <div className="rowline">LEADERBOARD</div>
        </div>
        <table className="tableboard" align="center">
          <tbody>
            <tr className="rowline" style={{ borderWidth: "5px" }}>
              <th className="col1">
                <img src={goldenglobe} alt="React Logo" width="40vw"></img>
              </th>

              <td className="col">{this.state.players[0].username}</td>
              <td className="col">Score</td>
              <td className="col">Team</td>
            </tr>
            <tr className="rowline">
              <th className="col2">
                <img src={silvercup} alt="React Logo" width="40vw"></img>
              </th>
              <td className="col">{this.state.players[1].username}</td>
              <td className="col">Score</td>
              <td className="col">Team</td>
            </tr>
            <tr className="rowline">
              <th className="col3">
                <img src={bronzecup} alt="React Logo" width="40vw"></img>
              </th>
              <td className="col">{this.state.players[2].username}</td>
              <td className="col">Score</td>
              <td className="col">Team</td>
            </tr>
            <tr className="rowline">
              <th className="col">4</th>
              <td className="col">{this.state.players[3].username}</td>
              <td className="col">Score</td>
              <td className="col">Team</td>
            </tr>
            <tr className="rowline">
              <th className="col">5</th>
              <td className="col">{this.state.players[4].username}</td>
              <td className="col">Score</td>
              <td className="col">Team</td>
            </tr>
            <tr className="rowline">
              <th className="col">6</th>
              <td className="col">{this.state.players[5].username}</td>
              <td className="col">Score</td>
              <td className="col">Team</td>
            </tr>
            <tr className="rowline">
              <th className="col">7</th>
              <td className="col">{this.state.players[6].username}</td>
              <td className="col">Score</td>
              <td className="col">Team</td>
            </tr>
            <tr className="rowline">
              <th className="col">8</th>
              <td className="col">{this.state.players[7].username}</td>
              <td className="col">Score</td>
              <td className="col">Team</td>
            </tr>
            <tr className="rowline">
              <th className="col">9</th>
              <td className="col">{this.state.players[8].username}</td>
              <td className="col">Score</td>
              <td className="col">Team</td>
            </tr>
            <tr className="rowline">
              <th className="col">10</th>
              <td className="col">{this.state.players[9].username}</td>
              <td className="col">Score</td>
              <td className="col">Team</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Scoreboard;
