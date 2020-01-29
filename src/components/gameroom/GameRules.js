import React, { Component } from "react";

class GameRules extends Component {
  render() {
    return (
      <div>
        <h4>Rules:</h4>
        <p>
          move your robot to pass all <br /> the checkpoints in order, by
          <br />
          picking a card. Whoever passes <br />
          all three checkpoints first wins! <br />
          The turn priority number at the top <br />
          of the cards decides who goes first, <br />
          whoever has the highest number
          <br />
          goes first. Be careful not to fall<br/> of the board, in a pit or get <br/>hit
          by another robot, <br/>it will move you back to <br/>your start point.
        </p>
      </div>
    );
  }
}

export default GameRules;
