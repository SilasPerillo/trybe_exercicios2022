import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogImg: '',
      loanding: true,
    };
    this.fetchImg = this.fetchImg.bind(this);
  }

  componentDidMount() {
    this.fetchImg();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.dogImg.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { dogImg } = this.state;
    localStorage.setItem('dogURL', dogImg);
    const racaDog = dogImg.split('/')[4];
    alert(racaDog);
  }

  fetchImg = () => {
    this.setState(
      { loanding: true },
      () => (fetch('https://dog.ceo/api/breeds/image/random'))
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            dogImg: data.message,
            loanding: false,
          });
        }),
    );
  }

  render() {
    const { dogImg, loanding } = this.state;
    const loandingElement = <span>Carregando...</span>;
    return (
      <div className="App">
        <h1>Imagem de dog Random</h1>
        {
          loanding
            ? loandingElement
            : (
              <img
                src={ dogImg }
                alt="Imagem de dog Random"
              />)
        }
        <button
          type="button"
          onClick={ this.fetchImg }
        >
          Novo doguinho
        </button>
      </div>
    );
  }
}

export default App;
