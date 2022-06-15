import React from "react";

class About extends React.Component{
  render(){
    const name = 'Silas Perillo'
    const sobre = 'Hoje sou estudante, já já estarei trabalhando!!'
    return(
      <div className="App">
        <h1>{name}</h1>
        <p>{sobre}</p>
      </div>
    )
  }
}

export default About;
