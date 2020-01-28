import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class PlayerScore extends Component {
  render() {
    return (
      <div>
        <h4>Score:</h4>
        <p>
          <strong>{this.props.currentRoom.users[0].userName}</strong> Lives:{" "}
          {this.props.currentRoom.users[0].lives} Score:{" "}
          {this.props.currentRoom.users[0].flags}
        </p>
        <p>
          <strong>{this.props.currentRoom.users[1].userName}</strong> Lives:{" "}
          {this.props.currentRoom.users[1].lives} Score:{" "}
          {this.props.currentRoom.users[1].flags}{" "}
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PlayerScore);
