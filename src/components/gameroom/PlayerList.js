import React, { Component } from "react";
import { connect } from "react-redux";
import Player from "./Player"

class PlayerList extends Component {
  render() {
    return (
      <div className="player-list">
        <div>
          <h2>Players</h2>
          {this.props.gamerooms.map(room => {
                return room.users.map(player => {
                    return (
                      <Player
                      key={player.id}
                      userName={player.userName}
                      />
                    )}
                )} 
            )}
        </div>
      </div>
        // list of players (users in the gameroom) running down te right side of the screen
    )
  }
}


    function mapStateToProps(reduxState) {
      return {
        gamerooms: reduxState.gamerooms
      };
    }
    
    export default connect(mapStateToProps)(PlayerList);