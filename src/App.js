import React, { Component } from 'react';
import Form from './Form'
import UserContainer from './UserContainer'
import PicContainer from './PicContainer'

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: true,
      users: [],
      pictures: []
    }
  }

  componentDidMount(){
    this.fetchUsers()
    this.fetchPics()
  }

  fetchUsers = () => {
    let url = "http://localhost:3000/users"
    fetch(url)
    .then(response => response.json())
  }

  postUsers = (newUser1, newUser2) => {
    console.log(newUser1, newUser2)
    let url = "http://localhost:3000/users"
    const newUsers = [...this.state.users, newUser1, newUser2]
    fetch(url, {
      method: "POST",
      body: JSON.stringify({name: newUser1}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    fetch(url, {
      method: "POST",
      body: JSON.stringify({name: newUser2}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error))
    .then(result => this.setState({
      users: newUsers,
      showForm: false
    }))
  }

  fetchPics = () => {
    let url = "http://localhost:3000/pictures"
    fetch(url)
    .then(response => response.json())
    .then(result => this.setState({pictures: result}))
  }


  render() {
      return (
        <div>
          {this.state.showForm
          ? <Form postUser={this.postUsers}/>
          : null
          }
          {this.state.users.length == 2
          ? <PicContainer pictures={this.state.pictures} users={this.state.users} />
          : null
          }
        </div>
      )
    }

  }
