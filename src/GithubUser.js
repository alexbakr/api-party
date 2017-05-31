import React, { Component } from 'react'
<<<<<<< HEAD
import "./GithubUser.css"
=======
import './GithubUser.css'
>>>>>>> 09fb4270aac75af196a47d9a695df4d921085a09

class GithubUser extends Component {
  state = {
    user: {
      avatar_url: '',
      login: '',
      followers: '',
      following: '',
      location: '',
      html_url: ''
    }
  }

  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData = (props) => {
<<<<<<< HEAD
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
=======
    fetch(`https://api.github.com/users/${props.match.params.username}`)
>>>>>>> 09fb4270aac75af196a47d9a695df4d921085a09
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

<<<<<<< HEAD
  componentWillRecieveProps(nextProps) {
      const locationChanged = nextProps.location !== this.props.location
      if (locationChanged){
          this.fetchUserData(nextProps)
      }
=======
  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
>>>>>>> 09fb4270aac75af196a47d9a695df4d921085a09
  }

  render() {
    const { user } = this.state
    return (
      <div className="github-user">
        <img src={user.avatar_url} alt="user"/>
        <h2>{user.login}</h2>
        <h3>followers: {user.followers}</h3>
        <h3>following: {user.following}</h3>
        <h3>location: {user.location}</h3>
        <a href={user.html_url} target="_">Link to {user.login}'s profile</a>
      </div>
    )
  }
}

export default GithubUser