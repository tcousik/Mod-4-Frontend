import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user1: "",
      user2: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newUser1 = this.state.user1
    const newUser2 = this.state.user2
    this.props.postUser(newUser1, newUser2)
  }


  render() {
    return(
      <React.Fragment>
      <h1 className="title">Welcome to the Caption Contest!</h1 >
      <h2 className="title">Please create some users.</h2>
        <div className="form-wrap">
            <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
            <div className="part1">
              <h2 className="title">Create User 1</h2>
              <label htmlFor="name">Name</label>
              <input name="user1" id="name" required onChange={(event) => this.handleChange(event)}  />
            </div>
            <div className="part2">
              <h2 className="title">Create User 2</h2>
              <label htmlFor="name">Name</label>
              <input name="user2" id="name" required onChange={(event) => this.handleChange(event)}  />
              <input className="play" type="submit" value="Let's Play!" />
            </div>
            </form>
        </div>
      </React.Fragment>
    )
  }
}
