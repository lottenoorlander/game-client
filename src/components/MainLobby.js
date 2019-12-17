import React, { Component } from "react";
import { connect } from "react-redux";

class MainLobby extends Component {
  render() {
    return (
      <div>
        List of rooms
        {this.props.gamerooms.map(room => console.log(room.name))}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    gamerooms: reduxState.gamerooms
  };
}

export default connect(mapStateToProps)(MainLobby);
