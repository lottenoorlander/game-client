import React, { Component } from "react";
import floorTile from "../../images/tileset/floor/scalable/floor.svg";
import pitTile from "../../images/tileset/pit/scalable/pit.svg";
import flag1Tile from "../../images/tileset/checkpoints/scalable/1.svg";
import flag2Tile from "../../images/tileset/checkpoints/scalable/2.svg";
import flag3Tile from "../../images/tileset/checkpoints/scalable/3.svg";
import r1Tile from "../../images/tileset/robot/Twonky/scalable/0.svg";
import r2Tile from "../../images/tileset/robot/Trundle_Bot/scalable/0.svg";
import "./GameBoard.css";

class GameBoard extends Component {
  gameboard = [
    ["tile", "tile", "tile"],
    ["tile", "flag1", "tile"],
    ["pit", "tile", "pit"],
    ["tile", "tile", "tile"],
    ["flag2", "tile", "tile"],
    ["tile", "pit", "tile"],
    ["tile", "flag3", "tile"]
  ];

  positionPlayer1x = this.props.currentRoom.users[0].position[0];
  positionPlayer1y = this.props.currentRoom.users[0].position[1];
  positionPlayer2x = this.props.currentRoom.users[1].position[0];
  positionPlayer2y = this.props.currentRoom.users[1].position[1];

  updatedGameBoard = [
    ...this.gameboard,
    (this.gameboard[this.positionPlayer1x - 1][this.positionPlayer1y - 1] =
      "robot1"),
    (this.gameboard[this.positionPlayer2x - 1][this.positionPlayer2y - 1] =
      "robot2")
  ];
  render() {
    return (
      <div className="board-wrapper">
        {this.gameboard.map(row =>
          row.map(tile => {
            if (tile === "tile") {
              return <img src={floorTile} className="board-tile" />;
            } else if (tile === "pit") {
              return <img src={pitTile} className="board-tile" />;
            } else if (tile === "flag1") {
              return <img src={flag1Tile} className="board-tile" />;
            } else if (tile === "flag2") {
              return <img src={flag2Tile} className="board-tile" />;
            } else if (tile === "flag3") {
              return <img src={flag3Tile} className="board-tile" />;
            } else if (tile === "robot1") {
              return <img src={r1Tile} className="board-tile" />;
            } else if (tile === "robot2") {
              return <img src={r2Tile} className="board-tile" />;
            }
          })
        )}
      </div>
    );
  }
}

export default GameBoard;
