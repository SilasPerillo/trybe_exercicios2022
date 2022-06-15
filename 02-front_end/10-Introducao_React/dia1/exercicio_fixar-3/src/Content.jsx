import React from "react";

const print = ({ conteudo, bloco, status}) => {
  return (
    <div>
      <h4>{`O conteúdo é: ${conteudo}`}</h4>
      <p>{`Status: ${bloco}`}</p>
      <p>{`Bloco: ${status}`}</p>
    </div> 
  )
}

class Content extends React.Component {
  render() {
    return (
      <span className="content">{ conteudos.map((obj) => print(obj))}</span>
    )
  }
}

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export default Content;
