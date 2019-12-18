import React, { Component } from "react";
import "./ReadyButton.css";

class ReadyButton extends Component {
  state = {
    userID: null,  // need to use the current users ID
    readyToStart: false,
  }

  handleClick = () => {
      if(this.state.readyToStart === false) {
        this.setState({readyToStart: true})
      } else {
        this.setState({readyToStart: false})
    }
  };

  render() {
    return (
          <div>
            <button 
              className="ready-button"
              onClick={this.handleClick}>
              {this.state.readyToStart ? (
                "CLICK TO DELAY"
              ) : (
                "CLICK WHEN READY"
              )}
            </button>
          </div>
    )
  }
}

export default ReadyButton;