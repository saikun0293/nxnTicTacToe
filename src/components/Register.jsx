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
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRegister = (event) => {
    const { username, password, team } = this.state;
    const data = {
      username: username,
      password: password,
      team: team,
      scores: [],
      total_matches: 0,
      total_score: 0,
    };
    api
      .post("/" + team, { data })
      .then((res) => {
        window.alert("Successfully registered!, Now go and conquer the field!");
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className="register">
        <form className="input-field" onSubmit={this.handleSubmit}>
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
          <div className="team-btns">
            <div
              className="blue team-btn"
              style={{ backgroundColor: this.state.team === "blue" && "white" }}
              onClick={() => this.setState({ team: "blue" })}
            >
              Blue Team
            </div>
            <div
              className="red team-btn"
              style={{ backgroundColor: this.state.team === "red" && "white" }}
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
      </div>
    );
  }
}

export default Register;
