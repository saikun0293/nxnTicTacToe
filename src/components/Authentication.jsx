import React, { Component } from "react";
import UserInput from "./UserInput";
import "../styles/Authentication.css";

class AuthenticationPage extends Component {
  state = {};

  handleVerification = (verified) => {
    if (verified) {
      console.log("Authentication successful!");
    } else {
      window.alert(
        "ERROR 404: Player not found, either check in other team or register!"
      );
    }
  };

  handleRegister;

  render() {
    return (
      <div className="authBody">
        {/* Player 1 */}
        <UserInput team="redteam" onVerification={this.handleVerification} />
        {/* Player 2 */}
        <UserInput team="blueteam" onVerification={this.handleVerification} />
      </div>
    );
  }
}

export default AuthenticationPage;
