import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateDimension } from "../redux";
import "../styles/Matrixsize.css";

class Matrixsize extends Component {
  state = {
    disabled: true,
    matrixSize: 3,
  };

  componentDidUpdate = () => {
    console.log(this.props);
    if (
      this.props.redVerified === true &&
      this.props.blueVerified === true &&
      this.state.disabled === true
    ) {
      this.setState({ disabled: false });
    }
  };

  handleSubmit = () => {
    const matrixSize = Number(this.state.matrixSize);
    this.props.changeDimension(matrixSize);
  };

  handleUpdate = (e) => {
    const matrixSize = e.target.value;
    this.setState({ matrixSize });
  };

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
            to="/game"
            onClick={this.handleSubmit}
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

const mapStateToProps = (state) => {
  return {
    redVerified: state.player.red.verified,
    blueVerified: state.player.blue.verified,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDimension: (d) => dispatch(updateDimension(d)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Matrixsize);
