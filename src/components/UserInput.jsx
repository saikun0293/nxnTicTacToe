import React, { Component } from "react";
// import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
// import { faJoomla } from "../../node_modules/@fortawesome/free-brands-svg-icons";
// import { faSlack } from "../../node_modules/@fortawesome/free-brands-svg-icons";
import "../styles/UserInput.css";

class UserInput extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="flex-row1">
            <i class="fab fa-joomla fa-9x"></i>
            <i class="fab fa-slack fa-9x"></i>
          </div>

          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </section>
        <div className="flex-row">
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
      </div>
    );
  }
}

export default UserInput;
