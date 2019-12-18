import React, { Component } from "react";
import Player from "./Player"

class PlayerList extends Component {
  render() {
    return (
        // list of players (users in the gameroom) running down te right side of the screen
        <div>
            <Player/>
        </div>
    )
  }
}

export default PlayerList;