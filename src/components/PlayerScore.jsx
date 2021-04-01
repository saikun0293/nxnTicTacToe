import React, { Component } from "react";

class PlayerScore extends Component {
  render() {
    return (
      <div className="rowline">
        <div className="number-col">{this.props.no + 1}</div>

        <div className="col" style={{ color: this.props.data.color }}>
          {this.props.data.username}
        </div>

        <div className="score-col">{this.props.data.total_score}</div>
      </div>
    );
  }
}

export default PlayerScore;
