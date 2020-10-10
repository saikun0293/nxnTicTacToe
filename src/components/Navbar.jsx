import React, { Component } from "react";
import dolphin from "../dolphin.svg";
import "../styles/Navbar.css";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbarBrand">
          <img className="logo" src={dolphin} alt="logo" />
          <span className="title">Marine Games</span>
        </div>
      </div>
    );
  }
}

export default Navbar;
