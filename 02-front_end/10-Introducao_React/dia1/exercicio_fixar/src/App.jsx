import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const lista = ['Acordar', 'Fazer café', 'Tomar café', 'Estudar']


class App extends React.Component {
  render() {
    return (
      <ul>{ lista.map((tarefa) => Task(tarefa))}</ul>
    )
  }
}

export default App;
