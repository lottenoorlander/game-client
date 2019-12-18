import React, { Component } from "react";

class ReadyButton extends Component {
  state = {
    userID: null,
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
            <button onClick={this.handleClick}>
              {this.state.readyToStart ? (
                "CLICK TO DELAY START"
              ) : (
                "CLICK WHEN READY"
              )}
            </button>
          </div>
    )
  }
}

export default ReadyButton;