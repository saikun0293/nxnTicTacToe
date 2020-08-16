import React, { Component } from "react";
import UserInput from "./UserInput";
import "../styles/Authentication.css";

class AuthenticationPage extends Component {
  state = {};

  handleVerification = (verified) => {
    if (verified) {
      console.log("Verified!");
    } else {
      console.log("Not verified!");
    }
  };

  render() {
    return (
      <div className="authBody">
        {/* Player 1 */}
        <UserInput onVerification={this.handleVerification} />
        {/* Player 2 */}
        <UserInput onVerification={this.handleVerification} />
      </div>
    );
  }
}

export default AuthenticationPage;
