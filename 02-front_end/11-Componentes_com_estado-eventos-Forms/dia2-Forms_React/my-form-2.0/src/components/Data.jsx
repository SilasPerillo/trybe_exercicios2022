import React, { Component } from "react";
import CampoForm from "./CampoForm";

export default class Data extends Component {
constructor() {
  super();
  this.handleChange = this.handleChange.bind(this)

  this.state = {
    name: '',
    email: '',
    cpf: '',
  }

}

handleChange({ target}) {
  const { name, value } = target;
  this.setState({
    [name]: name === 'name' ? value.toUpperCase() : value
  })
}

render() {
    const arrayState = Object.entries(this.state)
    return (
      <form>
        <fieldset>

          {arrayState.map(([key, value]) => <CampoForm 
          type="text"
          name={key}
          value={value}
          handleChange={this.handleChange}
          placeholder={key}
          key={key}
          />)}

          {/* <CampoForm type="text" name="name" value={this.state.name} handleChange={this.handleChange}/> */}

        </fieldset>
      </form>
    )
  }
}