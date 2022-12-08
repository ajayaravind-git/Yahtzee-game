import React, { Component } from "react";
import "./Die.css";


class Die extends Component {
  constructor(props) {
    super(props);
    this.handleToggleClick = this.handleToggleClick.bind(this)

  }

  handleToggleClick() {
    this.props.handleClick(this.props.idx)

  }
  render() {
    let diceArray = ['one', 'two', 'three', 'four', 'five', 'six']
    { this.props.val }
    let indexArray = diceArray[this.props.val - 1]
    let dieLocked = this.props.locked ? "Die-locked" : "";
    let classes = `${dieLocked} Die fas fa-5x fa-dice-${indexArray}`

    return (

      <i className={classes} onClick={this.handleToggleClick} disabled={this.props.disabled} />


    );
  }
}

export default Die;
