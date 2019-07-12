import React, { Component } from 'react'
import Picture from './Picture'

export default class PicContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      captions: {
        0: "",
        1: ""
      }
    }
  }

  handleClick = (event) => {
    // const key = event.target.name
    const value = event.target.value
    const key = event.target.name
    console.log(value)
    this.setState(state => {
      state.captions[key] = value
      return state
    })
  }

  handleSubmit


  render() {
    return (
      <React.Fragment>
        <div className="PicContainer">
          <Picture caption={this.state.caption}
            pictures={this.props.pictures}
            users={this.props.users}
            handleClick={this.handleClick}/>
        </div>
        <div className="capRow">
          <div className="cap1">{this.state.captions[0]}</div>
          <div className="cap2">{this.state.captions[1]}</div>
        </div>
      </React.Fragment>
    )
  }
}
