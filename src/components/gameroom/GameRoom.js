import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerList from "./PlayerList"
import ReadyButton from "./ReadyButton"
import GameRules from "./GameRules"


class GameRoom extends Component {
  state = {
    allPlayersReady: false,
  }
  render() {
    return (
        <div className="player-list">
            <PlayerList/>
            <GameRules/>
            <ReadyButton/>
        </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    gamerooms: reduxState.gamerooms
  };
}

export default connect(mapStateToProps)(GameRoom);
// Ready button = if all ready, start game (server-side check)
// Start button = only showing for the room creator

// On Ready-button push (post user readyToStart: true for
// this user ID)

// PlayerList - player info of all players in the current room

// GameRules - Overview of the game rules