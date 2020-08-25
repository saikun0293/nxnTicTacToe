import React, { Component } from "react";
import "../styles/Matrixsize.css";

class Matrixsize extends Component {
  constructor(props) {
    super(props);
  }
  state = { matrixSize: "" };
  // handleUpdate = (e) => {
  //   const matrixSize = e.target.value;
  //   this.setState({ matrixSize });
  // };
  // handleSubmit = () => {
  //   this.props.updateMatrixSize(this.state.matrixSize);
  //   this.props.handleToggle();
  // };
  render() {
    return (
      <div className="flex-row">
        <form className="matrix">
          <input
            id="matrixsize"
            type="number"
            name="MatrixSize"
            placeholder="Matrixsize"
            onChange={this.handleUpdate}
          />
          {/* <button className="submit" onClick={(e) => this.handleSubmit(e)}>
            SUBMIT
          </button> */}
        </form>
      </div>
    );
  }
}

export default Matrixsize;
