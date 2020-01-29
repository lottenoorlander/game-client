import React, { Component } from "react";
import { connect } from "react-redux";
import Player from "./Player";

class PlayerList extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="player-list">
        <div>
          <h2>Players in game</h2>
          {this.props.currentRoom.users.length === 0
            ? "No players yet"
            : this.props.currentRoom.users.map(player => {
                return (
                  <div>
                    <Player key={player.id} userName={player.userName} />
                  </div>
                );
              })}
        </div>
      </div>
      // list of players (users in the gameroom) running down te right side of the screen
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    gamerooms: reduxState.gamerooms
  };
}

export default connect(mapStateToProps)(PlayerList);
