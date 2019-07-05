// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }

    resolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })

    }



    render() {
        return(
            <React.Fragment>
                <button className='bitrate' onClick={this.bitrate}>Change Bitrate</button>
                <button className='resolution' onClick={this.resolution}>Change Resolution</button>
            </React.Fragment>
        )
    }
  }

