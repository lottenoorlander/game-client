import React, { Component } from "react";

class GameBoard extends Component {
  render() {
    return (
      // 16 rows in the render, each a division
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
