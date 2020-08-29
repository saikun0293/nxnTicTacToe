import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Matrixsize.css";

class Matrixsize extends Component {
  state = {
    matrixSize: 3,
    disabled: true,
    blue_username: "",
    red_username: "",
    red_id: "",
    blue_id: "",
  };

  handleUpdate = (e) => {
    const matrixSize = e.target.value;
    this.setState({ matrixSize });
  };

  componentWillReceiveProps(props) {
    const {
      blue_username,
      red_username,
      disabled,
      red_id,
      blue_id,
    } = props.presentState;
    this.setState({ disabled, red_username, blue_username, red_id, blue_id });
  }

  render() {
    return (
      <div className="flex-row">
        <form className="matrix">
          <input
            id="matrixsize"
            type="number"
            name="MatrixSize"
            placeholder="Matrix Size"
            className="matrix-input"
            onChange={this.handleUpdate}
          />
          <Link
            to={{
              pathname: "/game",
              state: {
                ...this.state,
              },
            }}
            className="submit"
            style={{
              pointerEvents: this.state.disabled === true ? "none" : "auto",
            }}
          >
            Start Game
          </Link>
        </form>
      </div>
    );
  }
}

export default Matrixsize;
