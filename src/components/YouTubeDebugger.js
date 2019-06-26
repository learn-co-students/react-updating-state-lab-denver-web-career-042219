import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)
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

  bitrateButton = () => {
    this.setState(
      state => {
        state.settings.bitrate = 12
        return state
      }
    )
  }

  resolutionButton = () => {
    this.setState(
      state => {
        state.settings.video.resolution = "720p"
      }
    )
  }

  render() {
    return (
      <div>
        <h1>{this.state.settings.bitrate}</h1>
        <button className="bitrate" onClick={this.bitrateButton}>bitrate button</button>
        <button className="resolution" onClick={this.resolutionButton}>resolution button</button>
      </div>
    )
  }
}
