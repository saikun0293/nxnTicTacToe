import React, { Component } from "react";
import apiKey from "./APIKEY";
import Axios from "axios";

const api = Axios.create({
  baseURL: "https://crudcrud.com/api/" + apiKey,
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
      console.log(res);
      const players = res.data;
      players.forEach((player) => {
        if (player.username === username && player.password === password) {
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
      <form className="input-field" onSubmit={this.handleSubmit}>
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
