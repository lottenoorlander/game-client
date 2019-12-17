import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import superagent from "superagent";

class MainLobby extends Component {
  state = {
    text: ""
  };

  url = "https://shielded-cove-79557.herokuapp.com";

  onSubmit = async event => {
    event.preventDefault();
    try {
      const response = await superagent
        .post(`${this.url}/gameroom`)
        .send({ name: this.state.text });
    } catch (error) {
      console.warn(("error test:", error));
    }
    this.setState({ text: "" });
  };

  onChange = event => {
    const {
      target: { value }
    } = event;

    this.setState({ text: value });
  };

  render() {
    return (
      <div>
        List of rooms
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.text} />
          <button>Submit</button>
        </form>
        {this.props.gamerooms.map(room => {
          return (
            <Link
              key={room.id}
              to={`/game/${room.id}`}
              // onClick={
              //   /*TODO DISPATCH message to backend that player is linked to this room */
              // }
            >
              <h2>{room.name} </h2>
            </Link>
          );
        })}
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
