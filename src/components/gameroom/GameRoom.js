import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerList from "./PlayerList";
import ReadyButton from "./ReadyButton";
import GameRules from "./GameRules";
import GameBoard from "./GameBoard";
import Cards from "./Cards";
import PlayerScore from "./PlayerScore";
import Winner from "./Winner";

class GameRoom extends Component {
  state = {};

  render() {
    const { gamerooms } = this.props;
    const [first] = gamerooms;

    if (!first) {
      return "Loading the game...";
    }
    const filterForGameroom = gamerooms.filter(gameroom => {
      return gameroom.id === parseInt(this.props.match.params.id);
    });
    const currentGameroom = filterForGameroom[0];

    return (
      <div className="player-list">
        {console.log("I'm rerendering the Gameroom component")}
        <h1>{`Welcome to ${currentGameroom.name}`}</h1>
        {currentGameroom.phase === "WAITING_TO_START" ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <PlayerList
                currentRoomId={this.props.match.params.id}
                currentRoom={currentGameroom}
              />
              {currentGameroom.phase === "END_OF_GAME"
                ? "The Game has a Winner!"
                : ""}
              <ReadyButton />
            </div>
            <GameRules />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <GameRules />
            <GameBoard
              currentRoomId={this.props.match.params.id}
              currentRoom={currentGameroom}
            />
            <div>
              <PlayerScore currentRoom={currentGameroom} />
              <Winner currentRoom={currentGameroom} />
              <Cards currentRoom={currentGameroom} />
            </div>
          </div>
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
