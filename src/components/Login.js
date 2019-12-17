import React from "react";
import { connect } from "react-redux";
import { login } from "../store/auth/action";
import { Link } from "react-router-dom";
import MainLobby from "./MainLobby";

class LoginPage extends React.Component {
  state = {
    userName: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const action = login(this.state.userName, this.state.password);
    this.props.dispatch(action);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.props.loggedin ? (
          <div>
            <MainLobby />
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="username">Username: </label>
                <input
                  id="userName"
                  type="text"
                  name="userName"
                  value={this.state.userName}
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
                <button type="submit">Login</button>
              </p>
            </form>
            <div>
              {" "}
              <Link to="/signup">Signup</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    loggedin: Boolean(reduxState.auth.jwt)
  };
}

export default connect(mapStateToProps)(LoginPage);
