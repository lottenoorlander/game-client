import React, { Component } from "react";
import PlayerList from "./PlayerList"
import ReadyButton from "./ReadyButton"

class GameRoom extends Component {
  render() {
    return (
        <div className="player-list">
            <PlayerList/>
            <ReadyButton/>
        </div>
    )
  }
}

export default GameRoom;

// Ready button = if all ready, start game
// Start button = only showing for the room creator
// 