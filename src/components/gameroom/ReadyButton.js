import React, { Component } from "react";
import superagent from "superagent";
import { connect } from "react-redux";
import { url } from "../../url";
import "./ReadyButton.css";

class ReadyButton extends Component {
  state = {
    userID: null, // need to use the current users ID
    readyToStart: false
  };

  handleClick = async () => {
    if (this.state.readyToStart === false) {
      this.setState({ readyToStart: true });
      try {
        const response = await superagent
          .put(`${url}/start`)
          .set({ Authorization: "Bearer " + this.props.token });
      } catch (error) {
        console.warn(("error test:", error));
      }
    } else {
      this.setState({ readyToStart: false });
      //TODO create endpoint to cancel start
    }
  };

  render() {
    return (
      <div>
        <button className="ready-button" onClick={this.handleClick}>
          {this.state.readyToStart ? "CLICK TO DELAY" : "CLICK WHEN READY"}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.jwt
  };
}

export default connect(mapStateToProps)(ReadyButton);
