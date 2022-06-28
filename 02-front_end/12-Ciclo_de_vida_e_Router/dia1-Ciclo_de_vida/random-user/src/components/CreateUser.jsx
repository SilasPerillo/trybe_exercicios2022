import React, { Component } from 'react'

export default class CreateUser extends Component {
  render() {
    const { person } = this.props
    return (
      <div>
        <p className='firtName'>{person.name.first}</p>
        <p className='lastName'>{person.name.last}</p>
        <p className='email'>{person.email}</p>
        <img src={person.picture.thumbnail} alt={person.name.first} />
      </div>
    )
  }
}
