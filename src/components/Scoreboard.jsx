import React, { Component } from "react";
import "../styles/Scoreboard.css";
import goldenglobe from "../Images/golden-globe.svg";
import silvercup from "../Images/silver-cup.svg";
import bronzecup from "../Images/bronze-trophy.svg";

class Scoreboard extends Component {
  state = {};
  render() {
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
              <td className="col">Yash Prasad</td>
            </tr>
            <tr className="rowline">
              <th className="col2">
                <img src={silvercup} alt="React Logo" width="40vw"></img>
              </th>
              <td className="col">Vaibhav Prasad</td>
            </tr>
            <tr className="rowline">
              <th className="col3">
                <img src={bronzecup} alt="React Logo" width="40vw"></img>
              </th>
              <td className="col">Nihar Patel</td>
            </tr>
            <tr className="rowline">
              <th className="col">4</th>
              <td className="col">Sai Teja</td>
            </tr>
            <tr className="rowline">
              <th className="col">5</th>
              <td className="col">Sampreet</td>
            </tr>
            <tr className="rowline">
              <th className="col">6</th>
              <td className="col">Ritvik Gupta</td>
            </tr>
            <tr className="rowline">
              <th className="col">7</th>
              <td className="col">Chirag Agrawal</td>
            </tr>
            <tr className="rowline">
              <th className="col">8</th>
              <td className="col">Akshith</td>
            </tr>
            <tr className="rowline">
              <th className="col">9</th>
              <td className="col">Hemendra</td>
            </tr>
            <tr className="rowline">
              <th className="col">10</th>
              <td className="col">Khushi Patel</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Scoreboard;
