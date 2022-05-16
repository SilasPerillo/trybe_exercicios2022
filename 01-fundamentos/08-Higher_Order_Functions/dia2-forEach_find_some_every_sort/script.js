// exercicio 1

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names);

// item 1 exercicio 1

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList);

// exercicio 2 - item 1

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = numbers.find((num) => num % 3 === 0 && num % 5 === 0);

// console.log(findDivisibleBy3And5)

// exercicio 2 - item 2

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = names.find((comp) => comp.length === 5);

// console.log(findNameWithFiveLetters);

// exercicio 2 - item 3

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {
//   return musicas.find((music) => music.id === id);
// }

// console.log(findMusic('31031685'))

// exercicio 3 - item 1

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((verifica) => verifica === name)
// }

// console.log(hasName(names, 'Ana'))

// exercicio 3 - item 2

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every((lista) => lista.age >= minimumAge);
// }

// console.log(verifyAges(people, 18));

// exercicio 4 - item 1

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points);

// exercicio 4 - item 1

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// people.sort((person1, person2) => person1.age - person2.age)

// console.log(people);

// exercicio 4 - item 2

// people.sort((person1, person2) => person2.age - person1.age)

// console.log(people);
