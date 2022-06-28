import { Component } from "react";
import CreateUser from "./CreateUser"

//Após a entrega dos dados, seu componente deve ser renderizado exibindo foto, nome, email e idade do usuário.

// Caso a idade do usuário seja maior que 50, o componente NÃO deve ser renderizado. Aplique esta lógica no método shouldComponentUpdate.

export default class RenderUser extends Component {
  constructor() {
    super();
    this.state = {
      person: [],
      loading: true,
    }

    this.fetchUser = this.fetchUser.bind(this);
  }

  fetchUser = () => {
    this.setState(
      { loading: true },
      () => (fetch('https://api.randomuser.me/')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        person: data.results[0],
        loading: false,
      })
    })))
  }

  componentDidMount() {
    this.fetchUser();
    }

  render() {
    const { person, loading } = this.state
    const loadingElement = <span>Carregando...</span>
    return (
      <div>
        {
          loading
          ? loadingElement
          : <CreateUser
          person={person}
          />
        }
      </div>
    )
  }
}