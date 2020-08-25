import React, { Component } from "react";
import Axios from "axios";
import APIKEY from "./APIKEY";

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
      const players = res.data;
      players.forEach((player) => {
        if (
          player.data.username === username &&
          player.data.password === password
        ) {
          this.setState({ verified: true }, () => {
            this.props.onVerification(this.state.verified);
          });
        }
      });
    });
    event.preventDefault();
  };

  render() {
    return (
      <form className="userinput-field" onSubmit={this.handleSubmit}>
        <input
          name="username"
          type="text"
          onChange={(e) => this.handleInput(e)}
        />
        <input
          name="password"
          type="password"
          onChange={(e) => this.handleInput(e)}
        />
        <button type="submit">Verify</button>
      </form>
    );
  }
}

export default UserInput;
