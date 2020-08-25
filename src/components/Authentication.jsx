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
        {/* <section>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </section> */}
        <UserInput onVerification={this.handleVerification} />
        <Matrixsize />
      </div>

      // </div>
    );
  }
}

export default AuthenticationPage;
