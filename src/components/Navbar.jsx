import React, { Component } from "react";
import dolphin from "../dolphin.svg";
// import shiplogo from "../pirate.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbarBrand">
          <img className="logo" src={dolphin} alt="logo" />
          <span className="title">Marine Games</span>
        </div>
        <div className="scoreboard">
          {/* <img className="scoreImage" src={scorePic} alt="score-vector-icon" /> */}
          <Link to="/scoreboard" className="scoretitle">
            Scoreboard
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
