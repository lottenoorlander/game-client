import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/SignUp";
import "./App.css";
// import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={Signup} />
        <Login />
      </Switch>
    </div>
  );
}

export default App;
