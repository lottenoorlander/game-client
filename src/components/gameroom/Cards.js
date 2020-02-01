import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import stop00 from "../../images/Program_Cards/RR-000-stop.jpg";
import left85 from "../../images/Program_Cards/RR-085-left.jpg";
import right105 from "../../images/Program_Cards/RR-105-right.jpg";
import left125 from "../../images/Program_Cards/RR-125-left.jpg";
import right145 from "../../images/Program_Cards/RR-145-right.jpg";
import left165 from "../../images/Program_Cards/RR-165-left.jpg";
import right185 from "../../images/Program_Cards/RR-185-right.jpg";
import left205 from "../../images/Program_Cards/RR-205-left.jpg";
import right225 from "../../images/Program_Cards/RR-225-right.jpg";
import left245 from "../../images/Program_Cards/RR-245-left.jpg";
import right265 from "../../images/Program_Cards/RR-265-right.jpg";
import left285 from "../../images/Program_Cards/RR-285-left.jpg";
import right305 from "../../images/Program_Cards/RR-305-right.jpg";
import left325 from "../../images/Program_Cards/RR-325-left.jpg";
import right345 from "../../images/Program_Cards/RR-345-right.jpg";
import left365 from "../../images/Program_Cards/RR-365-left.jpg";
import right385 from "../../images/Program_Cards/RR-385-right.jpg";
import left405 from "../../images/Program_Cards/RR-405-left.jpg";
import right425 from "../../images/Program_Cards/RR-425-right.jpg";
import back440 from "../../images/Program_Cards/RR-440-back.jpg";
import back450 from "../../images/Program_Cards/RR-450-back.jpg";
import back460 from "../../images/Program_Cards/RR-460-back.jpg";
import back470 from "../../images/Program_Cards/RR-470-back.jpg";
import back480 from "../../images/Program_Cards/RR-480-back.jpg";
import oneAhead490 from "../../images/Program_Cards/RR-490-1ahead.jpg";
import oneAhead500 from "../../images/Program_Cards/RR-500-1ahead.jpg";
import oneAhead510 from "../../images/Program_Cards/RR-510-1ahead.jpg";
import oneAhead520 from "../../images/Program_Cards/RR-520-1ahead.jpg";
import oneAhead530 from "../../images/Program_Cards/RR-530-1ahead.jpg";
import twoAhead670 from "../../images/Program_Cards/RR-670-2ahead.jpg";
import twoAhead680 from "../../images/Program_Cards/RR-680-2ahead.jpg";
import fourAhead850 from "../../images/Program_Cards/RR-850-4ahead.jpg";
import fourAhead860 from "../../images/Program_Cards/RR-860-4ahead.jpg";
import { url } from "../../url";

class Cards extends Component {
  state = {
    turn: null,
    selected: null,
    number1: 0,
    number2: 0
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      number1: Math.floor(Math.random() * this.cards.length),
      number2: Math.floor(Math.random() * this.cards.length)
    });
  }

  onClickHandler = async () => {
    try {
      const response = await superagent
        .put(`${url}/turn`)
        .set("Authorization", `Bearer ${this.props.auth.jwt}`)
        .send({ turn: this.state.turn });
    } catch (error) {
      console.log(error);
    }
  };

  onSelectCard = (card, selected) => {
    this.setState({
      ...this.state,
      turn: this.cards[card][1],
      selected: selected
    });
  };

  cards = [
    [stop00, [0, "stop"]],
    [left85, [85, "left"]],
    [right105, [105, "right"]],
    [left125, [125, "left"]],
    [right145, [145, "right"]],
    [left165, [165, "left"]],
    [right185, [185, "right"]],
    [left205, [205, "left"]],
    [right225, [225, "right"]],
    [left245, [245, "left"]],
    [right265, [265, "right"]],
    [left285, [285, "left"]],
    [right305, [305, "right"]],
    [left325, [325, "left"]],
    [right345, [345, "right"]],
    [left365, [365, "left"]],
    [right385, [385, "right"]],
    [left405, [405, "left"]],
    [right425, [425, "right"]],
    [back440, [440, "back"]],
    [back450, [450, "back"]],
    [back460, [460, "back"]],
    [back470, [470, "back"]],
    [back480, [480, "back"]],
    [oneAhead490, [490, "oneAhead"]],
    [oneAhead500, [500, "oneAhead"]],
    [oneAhead510, [510, "oneAhead"]],
    [oneAhead520, [520, "oneAhead"]],
    [oneAhead530, [530, "oneAhead"]],
    [twoAhead670, [670, "twoAhead"]],
    [twoAhead680, [680, "twoAhead"]],
    [fourAhead850, [850, "fourAhead"]],
    [fourAhead860, [860, "fourAhead"]]
  ];

  number1 = Math.floor(Math.random() * this.cards.length);
  number2 = Math.floor(Math.random() * this.cards.length);

  render() {
    return (
      <div>
        {this.props.currentRoom.phase === "EXECUTING_TURN"
          ? this.setState({
              ...this.state,
              number1: Math.floor(Math.random() * this.cards.length),
              number2: Math.floor(Math.random() * this.cards.length)
            })
          : ""}
        {console.log("card state", this.state)}
        {this.props.currentRoom.phase === "START_TURN" ? (
          <div>
            <div>
              <h4>Pick one and click ready when you are:</h4>
              <button onClick={this.onClickHandler}>Ready!</button>
            </div>
            <div style={{ display: "flex", width: "20vw", height: "25vw" }}>
              <img
                style={{
                  width: "49%",
                  border: this.state.selected === "left" ? "2px solid blue" : ""
                }}
                src={this.cards[this.state.number1][0]}
                onClick={() => this.onSelectCard(this.state.number1, "left")}
              />
              <img
                style={{
                  width: "49%",
                  border:
                    this.state.selected === "right" ? "2px solid blue" : ""
                }}
                src={this.cards[this.state.number2][0]}
                onClick={() => this.onSelectCard(this.state.number2, "right")}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Cards);
