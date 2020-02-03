import React, { Component } from "react";
import { connect } from "react-redux";

class Winner extends Component {
  render() {
    const { currentRoom } = this.props;
    const { users } = currentRoom;

    const player1 = users[0];
    const player2 = users[1];
    const winner = player1.lives <= 0 || player2.flags >= 3 ? player2 : player1;

    return (
      <div>
        {currentRoom.phase === "END_OF_GAME" ? (
          <div>{winner.userName} won!</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(Winner);
