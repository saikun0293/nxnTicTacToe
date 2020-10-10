import React, { Component } from "react";
import UserInput from "./UserInput";
import Matrixsize from "./Matrixsize";
import "../styles/Authentication.css";
import { Link } from "react-router-dom";

class AuthenticationPage extends Component {
  render() {
    return (
      <div className="authBody">
        <UserInput />
        <div className="register-section">
          <Link className="auth-register" to="/register">
            Register
          </Link>
        </div>
        <Matrixsize />
      </div>
    );
  }
}

export default AuthenticationPage;
