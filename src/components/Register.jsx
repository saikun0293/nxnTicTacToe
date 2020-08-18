import React, { Component } from "react";
import "../styles/Register.css";

class Register extends Component {
  state = {
    username: "",
    password: "",
    team: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  handleTeam = (team) => {
    this.setState({ team: team });
  };

  render() {
    console.log(this.state.team);
    return (
      <div className="register">
        <form
          className={
            "input-field " + (this.state.displayTeam ? "fadeOut" : "fadeIn")
          }
          onSubmit={this.handleSubmit}
        >
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
            <button className="blue team-btn">Blue Team</button>
            <button className="red team-btn">Red Team</button>
          </div>

          <button
            onClick={() => {
              this.handleRegister();
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
