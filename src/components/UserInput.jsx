import React, { Component } from "react";
import "../styles/UserInput.css";

class UserInput extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="title">Marine Games</div>
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
            onSubmit={(e) => this.props.onSubmit(e, "blue")}
          >
            <label htmlFor="username">Username</label>
            <input
              name="blue_username"
              type="text"
              onChange={(e) => this.props.onInput(e)}
            />
            <label htmlFor="password">Password</label>
            <input
              name="blue_password"
              type="password"
              onChange={(e) => this.props.onInput(e)}
            />
            <button className="verify-btn" type="submit">
              Verify
            </button>
          </form>
          <form
            className="redteam-ui"
            onSubmit={(e) => this.props.onSubmit(e, "red")}
          >
            <label htmlFor="username">Username</label>
            <input
              name="red_username"
              type="text"
              onChange={(e) => this.props.onInput(e)}
            />
            <label htmlFor="password">Password</label>
            <input
              name="red_password"
              type="password"
              onChange={(e) => this.props.onInput(e)}
            />
            <button className="verify-btn" type="submit">
              Verify
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserInput;
