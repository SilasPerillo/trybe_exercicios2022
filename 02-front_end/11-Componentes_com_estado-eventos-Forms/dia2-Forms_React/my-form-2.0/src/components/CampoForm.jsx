import { Component } from "react";

export default class CampoForm extends Component {
  render() {
    const { name, type, value, handleChange, placeholder } = this.props;
    return <input name={name} type={type} value={value} onChange={handleChange} placeholder={placeholder} />;
  }
}
