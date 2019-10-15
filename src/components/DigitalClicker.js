// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor () {
    super ()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      prevState.timesClicked = prevState.timesClicked + 1
      return prevState
      
    }, () =>  console.log(this.state.timesClicked))

  }
  
  render () {
    return (
      <div>
        <h1>This is the DigitalClicker Component</h1>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}