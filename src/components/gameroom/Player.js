import React, { Component } from "react";
import "./Player.css"; 

class Player extends Component {
  render() {
    return (
            <div className="player">
              {this.props.userName}
            </div>
    )
  }
}

export default Player;