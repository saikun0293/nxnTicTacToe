import React, { Component } from "react";
import Axios from "axios";
import APIKEY from "./APIKEY";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faJoomla } from "../../node_modules/@fortawesome/free-brands-svg-icons";
import { faSlack } from "../../node_modules/@fortawesome/free-brands-svg-icons";
import "../styles/UserInput.css";

import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faSlack } from "../../node_modules/@fortawesome/free-brands-svg-icons";
import { faJoomla } from "../../node_modules/@fortawesome/free-brands-svg-icons";

const api = Axios.create({
  baseURL: "https://crudcrud.com/api/" + APIKEY,
});

class UserInput extends Component {
  state = {
    username: "",
    password: "",
    verified: false,
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { username, password } = this.state;
    const team = this.props.team;

    api.get("/" + team).then((res) => {
      let found = false;
      const players = res.data;
      players.forEach((player) => {
        if (
          player.data.username === username &&
          player.data.password === password
        ) {
          found = true;
        }
      });
      if (found === true) {
        this.setState({ verified: true }, () =>
          this.props.onVerification(this.state.verified)
        );
      } else {
        this.props.onVerification(this.state.verified);
      }
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <section>
          <div className="flex-row1">
            <FontAwesomeIcon
              className="fajoomla"
              icon={faJoomla}
              color="white"
            />
            <FontAwesomeIcon className="faslack" icon={faSlack} color="white" />
          </div>

          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </section>
        <div className="flex-row">
          <div className="userinput-field">
            <form className="blueteam-ui" onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                onChange={(e) => this.handleInput(e)}
              />
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                onChange={(e) => this.handleInput(e)}
              />
              <button className="verify-btn" type="submit">
                Verify
              </button>
            </form>
            <form className="redteam-ui" onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                onChange={(e) => this.handleInput(e)}
              />
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                onChange={(e) => this.handleInput(e)}
              />
              <button className="verify-btn" type="submit">
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
