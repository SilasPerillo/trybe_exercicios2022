const specialFruit = ['Banana', 'Maça', 'Melancia'];

const additionalItens = ['Kiwi', 'Abacaxi', 'Morango'];

const fruitSadad = (fruit, additional) => [...fruit, ...additional];

// console.log(fruitSadad(specialFruit, additionalItens));

//  Object Destructuring

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const juntando = {...user, ...jobInfos}

// console.log(juntando);

const {name, age, nationality, profession, squad, squadInitials} = juntando

// console.log(`Hi, my name is ${name}, I'm ${age} years old I'm ${nationality}. I'm work as a ${profession} and my squad is ${squadInitials}${squad}`);

// Array Destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal]

// console.log(comida, animal, bebida);

// item 3

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...resto] = numerosPares

numerosPares = [...resto]

// console.log(numerosPares); // [6, 8, 10, 12];

// Default Destructuring

// item 1

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// [...otherPerson] = person

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// Object Property Shorthand (MRFI)

// Default Parameters (MRFI)

