import React, { Component } from "react";
import firebase from "firebase/app";
import "../styles/Register.css";

class Register extends Component {
  state = {
    email: "",
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

  handleRegister = async (event) => {
    event.preventDefault();
    const { username, email, password, team, confirmPassword } = this.state;

    if (password === confirmPassword) {
      try {
        const auth = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        console.log("Auth is done!");
        const messageRef = await firebase
          .firestore()
          .collection(team)
          .doc(auth.user.email);

        console.log("Adding message");
        await messageRef.set({
          username: username,
          email: auth.user.email,
          total_matches: 0,
          total_score: 0,
        });

        this.props.history.push("/");
      } catch (error) {
        window.alert(error.message);
      }
    } else {
      this.setState({ status: "Password's don't match" });
    }
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
            autoComplete="off"
            onChange={(e) => this.handleInput(e)}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            autoComplete="off"
            onChange={(e) => this.handleInput(e)}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            autoComplete="off"
            onChange={(e) => this.handleInput(e)}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            autoComplete="off"
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
