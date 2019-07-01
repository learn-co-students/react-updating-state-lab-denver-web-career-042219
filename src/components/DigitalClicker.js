// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }


    clickMe = () => {
        
        this.setState(lastState => ({
          timesClicked: lastState.timesClicked+1
        }))
    }
   

    render() {
        return(
            <React.Fragment>
                <button onClick={this.clickMe}>{this.state.timesClicked}</button>
            </React.Fragment>
        )
    }
}