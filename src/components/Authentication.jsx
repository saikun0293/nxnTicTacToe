import React, { Component } from "react";
import UserInput from "./UserInput";
import Matrixsize from "./Matrixsize";
import "../styles/Authentication.css";

class AuthenticationPage extends Component {
  state = {};

  handleVerification = (verified) => {
    if (verified) {
      console.log("Authentication successful!");
    } else {
      console.log("Authentication failed!");
    }
  };

  handleRegister;

  render() {
    return (
      <div className="authBody">
        <Matrixsize />
        <UserInput team="blue" onVerification={this.handleVerification} />
        <UserInput team="red" onVerification={this.handleVerification} />
      </div>

      // </div>
    );
  }
}

export default AuthenticationPage;
