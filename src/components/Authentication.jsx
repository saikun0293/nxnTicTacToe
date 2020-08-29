import React, { Component } from "react";
import UserInput from "./UserInput";
import Matrixsize from "./Matrixsize";
import "../styles/Authentication.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import APIKEY from "./APIKEY";

const api = Axios.create({
  baseURL: "https://crudcrud.com/api/" + APIKEY,
});

class AuthenticationPage extends Component {
  state = {
    blue_username: "",
    blue_password: "",
    red_username: "",
    red_password: "",
    blue_verified: false,
    red_verified: false,
    disabled: true,
    red_id: "",
    blue_id: "",
  };

  componentDidUpdate() {
    if (this.state.disabled === true) {
      if (
        this.state.blue_verified === true &&
        this.state.red_verified === true
      ) {
        this.setState({ disabled: false });
      }
    }
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, team) => {
    const username = this.state[team + "_username"];
    const password = this.state[team + "_password"];
    api.get("/" + team).then((res) => {
      let found = false;
      const players = res.data;
      players.forEach((player) => {
        if (player.username === username && player.password === password) {
          found = true;
          this.setState({ [team + "_id"]: player._id });
        }
      });
      if (found === true) {
        this.setState({ [team + "_verified"]: true });
        window.alert(team + " team authentication successful!");
      } else {
        window.alert(team + " team authentication failed!");
      }
    });
    // console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <div className="authBody">
        <UserInput onInput={this.handleInput} onSubmit={this.handleSubmit} />
        <div className="register-section">
          <Link className="auth-register" to="/register">
            Register
          </Link>
        </div>
        <Matrixsize presentState={this.state} />
      </div>
    );
  }
}

export default AuthenticationPage;
