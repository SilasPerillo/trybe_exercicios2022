const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, i) => acc.concat(i))
}

// console.log(flatten());

//item 2

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, bookObj, i) => (i < books.length - 1) 
  ? `${acc} ${bookObj.author.name},` 
  : `${acc} ${bookObj.author.name}.`, "");
}

// console.log(reduceNames());

// item 3

function averageAge() {
  return books.reduce((acc, age) => Math.round((acc + (age.releaseYear - age.author.birthYear) / books.length)), 0)
}

// console.log(averageAge());

// item 4 - Encontre o livro com o maior nome

function longestNamedBook() {
  return books.reduce((acc, value) => acc.name.length > value.name.length ? acc : value)
}

// console.log(longestNamedBook());

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// item 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  return names.reduce((acc, value) => (acc + value.toLowerCase().split('a').length - 1), 0)
}

// console.log(containsA());

// item 6 - { name: nome do aluno, average: media das notas }

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((estudante, index) => 
  ({name: estudante, 
   average: (grades[index].reduce((acc, media) => acc + media, 0) / grades[index].length),}))
}

console.log(studentAverage());
