import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import superagent from "superagent";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import MainLobby from "./components/MainLobby";
import "./App.css";

class App extends Component {
  state = {
    text: ""
  };

  url = "https://shielded-cove-79557.herokuapp.com";
  stream = new EventSource(`${this.url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      this.props.dispatch(action);
    };
  }

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
      <div className="App">
        <Switch>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.text}
            />
            <button>Submit</button>
          </form>
          <Route path="/signup" component={Signup} />
          {/* <Route exact path="/" component={Login} />
          <Route path="/lobby" component={MainLobby} /> */}
        </Switch>
        <Login />
      </div>
    );
  }
}

export default connect()(App);
