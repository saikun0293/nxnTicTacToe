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
      window.alert(
        "ERROR 404: Player not found, either check in other team or register!"
      );
    }
  };

  handleRegister;

  render() {
    return (
      <div className="authBody">
        <Matrixsize />
        <UserInput onVerification={this.handleVerification} />
        <UserInput onVerification={this.handleVerification} />
      </div>

      // </div>
    );
  }
}

export default AuthenticationPage;
