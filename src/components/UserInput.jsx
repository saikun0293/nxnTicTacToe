import React, { Component } from "react";
import "../styles/UserInput.css";
import Axios from "axios";
import APIKEY from "./APIKEY";
import { connect } from "react-redux";
import { redAuthenticated, blueAuthenticated } from "../redux";
import { Link } from "react-router-dom";

const api = Axios.create({
  baseURL: "https://crudcrud.com/api/" + APIKEY,
});

class UserInput extends Component {
  state = {
    //red
    redUsername: "",
    redPassword: "",
    redVerified: false,
    //blue
    blueUsername: "",
    bluePassword: "",
    blueVerified: false,
  };

  handleSubmit = (event, team) => {
    const username = this.state[team + "Username"],
      password = this.state[team + "Password"];

    api.get("/" + team).then((res) => {
      let found = false;
      const players = res.data;
      players.forEach((player) => {
        if (player.username === username && player.password === password) {
          found = true;
          if (team === "red") {
            this.props.authenticateRed(player);
          } else if (team === "blue") {
            this.props.authenticateBlue(player);
          }
          this.setState({ [team + "Verified"]: true });
        }
      });
      if (!found) {
        window.alert(team + " team authentication failed!");
      }
    });
    event.preventDefault();
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  btn = (status) => {
    let style;
    style = {
      color: "white",
      marginLeft: "5px",
    };
    if (status === true) {
      style.visibility = "visible";
    } else {
      style.visibility = "hidden";
    }
    return style;
  };

  render() {
    return (
      <div>
        <section className="ui-wave">
          <div className="title">Marine Games</div>
          <div className="scoreboard">
            <Link to="/scoreboard" className="scoretitle">
              Scoreboard
            </Link>
          </div>
          
          <div className="flex-row1">
            <i style={{ color: "white" }} className="fab fa-joomla fa-9x"></i>
            <i style={{ color: "white" }} className="fab fa-slack fa-9x"></i>
          </div>

          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </section>

        <div className="userinput-field">
          <form
            className="blueteam-ui"
            onSubmit={(e) => this.handleSubmit(e, "blue")}
          >
            <label htmlFor="username">Username</label>
            <input
              name="blueUsername"
              type="text"
              onChange={(e) => this.handleInput(e)}
            />
            <label htmlFor="password">Password</label>
            <input
              name="bluePassword"
              type="password"
              onChange={(e) => this.handleInput(e)}
            />
            <button className="verify-btn" type="submit">
              Verify
              <span style={this.btn(this.state.blueVerified)}>
                <i className="fas fa-check-circle"></i>
              </span>
            </button>
          </form>
          <form
            className="redteam-ui"
            onSubmit={(e) => this.handleSubmit(e, "red")}
          >
            <label htmlFor="username">Username</label>
            <input
              name="redUsername"
              type="text"
              onChange={(e) => this.handleInput(e)}
            />
            <label htmlFor="password">Password</label>
            <input
              name="redPassword"
              type="password"
              onChange={(e) => this.handleInput(e)}
            />
            <button className="verify-btn" type="submit">
              Verify
              <span style={this.btn(this.state.redVerified)}>
                <i className="fas fa-check-circle"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateRed: (p) => dispatch(redAuthenticated(p)),
    authenticateBlue: (p) => dispatch(blueAuthenticated(p)),
  };
};

export default connect(null, mapDispatchToProps)(UserInput);
//use null if we don't want to use mapStateToProps
