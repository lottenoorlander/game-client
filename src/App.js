import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import superagent from "superagent";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import MainLobby from "./components/MainLobby";
import GameLobby from "./components/GameLobby";
import "./App.css";

class App extends Component {
  url = "https://shielded-cove-79557.herokuapp.com";
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
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Login} />
          <Route path="/lobby" component={MainLobby} />
          <Route path="/game/:id" component={GameLobby} />
        </Switch>
        <Login />
      </div>
    );
  }
}

export default connect()(App);
