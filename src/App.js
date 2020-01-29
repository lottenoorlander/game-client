import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import MainLobby from "./components/MainLobby";
import GameRoom from "./components/gameroom/GameRoom";
import "./App.css";

class App extends Component {
  // url = "https://shielded-cove-79557.herokuapp.com";
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      this.props.dispatch(action);
    };
  }

  render() {
    return (
      <div className="App">
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Login} />
        <Route path="/lobby" component={MainLobby} />
        <Route path="/game/:id" component={GameRoom} />
        <Route path="/gameroom/test" component={GameRoom} />
      </div>
    );
  }
}

export default connect()(App);
