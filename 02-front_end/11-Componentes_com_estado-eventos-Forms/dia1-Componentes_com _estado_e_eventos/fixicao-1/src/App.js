import './App.css';
import React from 'react';

function App() {

  function handleClick1() { console.log('Clicou btn1') };
  function handleClick2() { console.log('Clicou btn2') };
  function handleClick3() { console.log('Clicou btn3') };

  return (
    <div className="App">
    <button className='btn' onClick={handleClick1}>btn1</button>
    <button className='btn' onClick={handleClick2}>btn2</button>
    <button className='btn' onClick={handleClick3}>btn3</button>
    </div>
  );
}

export default App;
