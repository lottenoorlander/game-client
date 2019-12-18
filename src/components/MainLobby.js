import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import superagent from "superagent";
import { getNodeText } from "@testing-library/react";

class MainLobby extends Component {
  state = {
    text: ""
  };

  url = "https://shielded-cove-79557.herokuapp.com";
  // url = "https://localhost:4000";

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
    // TODO Auto move to newly created room
  };

  onChange = event => {
    const {
      target: { value }
    } = event;

    this.setState({ text: value });
  };

  joinGameroom = async gameroomId => {
    console.log("gameroomId test:", gameroomId);
    try {
      const response = await superagent.put(`${this.url}/join`).send({
        gameroomId,
        userId: 1
      });

      console.log("response test:", response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h1>List of rooms</h1>
        <p>create a new room:</p>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.text} />
          <button>Submit</button>
        </form>
        {this.props.gamerooms.map(room => {
          return (
            <Link key={room.id} to={`/game/${room.id}`}>
              <h2>{room.name} </h2>
              <button onClick={() => this.joinGameroom(room.id)}>Join</button>
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
