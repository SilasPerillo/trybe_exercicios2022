const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra Pereira'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callBack('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callBack('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const geraEmail = (nome) => `${nome.replaceAll(' ', '_').toLowerCase()}@trybe.com`;

// console.log(newEmployees(geraEmail));

// item 2

const geradorNumRandom = () => {
  const numRandom = Math.ceil(Math.random()*5);
  return numRandom;
}

const verificador = (num, callBack) => {
  const variavelVerificadora = num === callBack ? 'Parabéns você ganhou' : 'Tente novamente';
  return variavelVerificadora;
}

// console.log(verificador(3, geradorNumRandom()));


const respostasCertas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasEstudantes = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const verificadorRespostas = () => {
  if(respostasCertas === respostasEstudantes) {
    return 1
  }
}

const fcContador = () => {
  const count = 0;
  for(let i = 0; i < respostasCertas.length; i += 1) {

  }
}