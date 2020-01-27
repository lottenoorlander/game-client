import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerList from "./PlayerList";
import ReadyButton from "./ReadyButton";
import GameRules from "./GameRules";
import GameBoard from "./GameBoard";

class GameRoom extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { gamerooms } = this.props;
    console.log("whole list:", gamerooms);

    const [first] = gamerooms;
    console.log("the first game", first);

    if (!first) {
      return "Loading the game...";
    }

    const { name } = first;
    console.log("name test:", this.props.gamerooms[0].name);
    return (
      <div className="player-list">
        <h1>{`Welcome to ${
          this.props.gamerooms[this.props.match.params.id - 1].name
        }`}</h1>
        {this.props.gamerooms[this.props.match.params.id - 1].phase ===
        "WAITING_TO_START" ? (
          <div>
            <PlayerList
              currentRoomId={this.props.match.params.id}
              currentRoom={this.props.gamerooms[this.props.match.params.id - 1]}
            />
            <GameRules />
            <ReadyButton />
          </div>
        ) : (
          <GameBoard
            currentRoomId={this.props.match.params.id}
            currentRoom={this.props.gamerooms[this.props.match.params.id - 1]}
          />
          //ready button, cards display, which needs ability to select
        )}
      </div>
    );
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
// this user ID) - needs action (reducer isn't really needed is it?)

// PlayerList - player info of all players in the current room

// GameRules - Overview of the game rules
