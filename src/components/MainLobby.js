import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import superagent from "superagent";

class MainLobby extends Component {
  state = {
    text: ""
  };

  // url = "https://shielded-cove-79557.herokuapp.com";
  url = "http://localhost:4000";

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
    // console.log("jwt test:", this.props.auth.jwt);
    try {
      const response = await superagent
        .put(`${this.url}/join`)
        .set("Authorization", `Bearer ${this.props.auth.jwt}`)
        .send({
          gameroomId
        });

      // console.log("response test:", response);
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
              <h2>
                {room.name} - {this.props.gamerooms[room.id - 1].users.length}/2
              </h2>
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
    gamerooms: reduxState.gamerooms,
    auth: reduxState.auth
  };
}

export default connect(mapStateToProps)(MainLobby);
