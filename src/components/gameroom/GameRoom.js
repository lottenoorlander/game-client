import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerList from "./PlayerList";
import ReadyButton from "./ReadyButton";
import GameRules from "./GameRules";
import GameBoard from "./GameBoard";
import Cards from "./Cards";
import PlayerScore from "./PlayerScore";

class GameRoom extends Component {
  state = {};

  componentDidMount() {}

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
        <h1>{`Welcome to ${currentGameroom.name}`}</h1>
        {currentGameroom.phase === "WAITING_TO_START" ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <PlayerList
                currentRoomId={this.props.match.params.id}
                currentRoom={currentGameroom}
              />
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
              <Cards
                currentRoom={
                  this.props.gamerooms[this.props.match.params.id - 1]
                }
              />
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
