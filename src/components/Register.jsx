import React, { Component } from "react";
import "../styles/Register.css";
import Axios from "axios";
import APIKEY from "./APIKEY";

const api = Axios.create({ baseURL: "https://crudcrud.com/api/" + APIKEY });

class Register extends Component {
  state = {
    username: "",
    password: "",
    team: "",
    confirmPassword: "",
    status: "Join the pirates army!",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRegister = (event) => {
    const { username, password, team, confirmPassword } = this.state;
    const data = {
      username: username,
      password: password,
      team: team,
      scores: [],
      total_matches: 0,
      total_score: 0,
    };

    api.get("/" + team).then((res) => {
      let found = false;
      res.data.forEach((player) => {
        console.log(player);
        if (player.username === username) {
          found = true;
        }
      });
      if (found === true) {
        this.setState({ status: "Username already exists!" });
      } else {
        if (password === confirmPassword) {
          api
            .post("/" + team, data)
            .then((res) => {
              this.props.history.push("/");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          this.setState({ status: "Passwords don't match!" });
        }
      }
    });

    event.preventDefault();
  };

  render() {
    return (
      <div className="register">
        <div className="title">Marine Games</div>
        <form className="input-field" onSubmit={this.handleSubmit}>
          <div className="registration-status">{this.state.status}</div>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            onChange={(e) => this.handleInput(e)}
          />
          <div className="team-btns">
            <div
              className="blue team-btn"
              style={{
                backgroundColor: this.state.team === "blue" && "white",
              }}
              onClick={() => this.setState({ team: "blue" })}
            >
              Blue Team
            </div>
            <div
              className="red team-btn"
              style={{
                backgroundColor: this.state.team === "red" && "white",
              }}
              onClick={() => this.setState({ team: "red" })}
            >
              Red Team
            </div>
          </div>
          <button
            onClick={(event) => {
              this.handleRegister(event);
            }}
            className="register-btn"
          >
            Register
          </button>
        </form>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
    );
  }
}

export default Register;
