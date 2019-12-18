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

// Ready button = if all ready, start game (server-side check)
// Start button = only showing for the room creator

// On Ready-button push (post user readyToStart: true for
// this user ID)

// PlayerList - player info of all players in the current room

// GameRules - Overview of the game rules