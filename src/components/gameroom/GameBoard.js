import React, { Component } from "react";

class GameBoard extends Component {
  render() {
    return (
      // 16 rows in the render, each a division
      <div className="board-wrapper">
        {console.log(this.props.currentRoom)}
        THIS IS THE GAMEBOARD
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default GameBoard;
