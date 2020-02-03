import React, { Component } from "react";
import r1Tile from "../../images/tileset/robot/Twonky/scalable/0.svg";
import r2Tile from "../../images/tileset/robot/Trundle_Bot/scalable/0.svg";

class PlayerScore extends Component {
  render() {
    const player1 =
      this.props.currentRoom.users[0].id > this.props.currentRoom.users[1].id
        ? this.props.currentRoom.users[0]
        : this.props.currentRoom.users[1];
    const player2 =
      this.props.currentRoom.users[0].id < this.props.currentRoom.users[1].id
        ? this.props.currentRoom.users[0]
        : this.props.currentRoom.users[1];
    return (
      <div>
        <h4>Score:</h4>
        <p>
          <strong>{player1.userName}</strong> Lives: {player1.lives} Score:{" "}
          {player1.flags} Robot: <img src={r1Tile} />
        </p>
        <p>
          <strong>{player2.userName}</strong> Lives: {player2.lives} Score:{" "}
          {player2.flags} Robot: <img src={r2Tile} />
        </p>
      </div>
    );
  }
}

export default PlayerScore;
