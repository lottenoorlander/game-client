import React from "react";
import { connect } from "react-redux";
import { signUp } from "../store/auth/action";
import MainLobby from "./MainLobby";

class SignUpPage extends React.Component {
  state = {
    name: "",
    password: "",
    signedup: false
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const action = signUp(this.state.name, this.state.password);
    this.props.dispatch(action);
    this.setState({ ...this.state, signedup: true });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.state.signedup ? (
          <div>
            <MainLobby />
          </div>
        ) : (
          <div>
            <h1>Sign up</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="name">Name: </label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <p>
                <button type="submit">Sign up</button>
              </p>
            </form>
          </div>
        )}
      </div>
    );
  }
}
export default connect()(SignUpPage);
