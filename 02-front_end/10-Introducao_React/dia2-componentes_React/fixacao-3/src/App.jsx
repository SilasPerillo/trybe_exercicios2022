import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => {
      console.log('item: ', item);
      return (<li key={ index }>{ item }</li>)
    })
    
    return (
      <div>
        <h2>Lista de Compras</h2>
        <ul>
          { items }
        </ul>
      </div>
      );
    }
  }

export default App;
