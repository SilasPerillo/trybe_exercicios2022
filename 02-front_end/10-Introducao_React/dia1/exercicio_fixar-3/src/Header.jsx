import React from 'react';

const texto = 'Conteúdos de Front-End'

class Header extends React.Component {
  render() {
    return (
      <h1 className='title'>{texto}</h1>
    )
  }
}

export default Header;