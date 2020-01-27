import React, { Component } from "react";

class GameBoard extends Component {
  render() {
    const gameboard = [
      [t, t, t],
      [t, t, t],
      [p, t, p],
      [t, t, t],
      [t, t, t],
      [t, p, t],
      [t, f, t]
    ];
    return (
      <div className="board-wrapper">
        {console.log(this.props.currentRoom)}
        THIS IS THE GAMEBOARD <br />- each player needs to be assigned a robot{" "}
        <br />- the board needs to be an array <br />- array needs to be updated
        based on current position of both robots when executing move <br />-
        board needs to be a certain size // remember to look that up
      </div>
    );
  }
}

export default GameBoard;
