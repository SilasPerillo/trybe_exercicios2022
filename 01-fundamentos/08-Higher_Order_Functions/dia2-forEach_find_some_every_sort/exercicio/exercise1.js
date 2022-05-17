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
      birthYear: 1921, //1920
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

function authorBornIn1947() {
  return books.find((autor1947) => autor1947.author.birthYear === 1947).author.name;
}

// console.log(authorBornIn1947());

function smallerName() {
  let nameBook;
  books.forEach((element) => !nameBook || element.name.length < nameBook.length ? nameBook = element.name : false);

  return nameBook;
}

// console.log(smallerName());

// item 3

function getNamedBook() {
  return books.find((title) => title.name.length === 26);
}

// console.log(getNamedBook());

// item 4 - Ordene os livros por data de lançamento em ordem decrescente. books.releaseYear

function booksOrderedByReleaseYearDesc() {
  return books.sort((lanc1, lanc2) => lanc2.releaseYear - lanc1.releaseYear)
}

// console.log(booksOrderedByReleaseYearDesc());

// item 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
  return books.every((birthdayXX) => birthdayXX.author.birthYear > 1900 && birthdayXX.author.birthYear <= 2000);
}

// console.log(everyoneWasBornOnSecXX());

// item 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

function someBookWasReleaseOnThe80s() {
  return books.some((lanc80) => lanc80.releaseYear >= 1980 && lanc80.releaseYear <= 1990);
}

// console.log(someBookWasReleaseOnThe80s());

// item 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

function authorUnique() { // some => (true) se 1 for verdadeira / every => (true) se todos for verdadeira
  return books.every((birthdayEvery) => 
  !books.some((birthdayEveryConfirm) => 
  (birthdayEveryConfirm.author.birthYear === birthdayEvery.author.birthYear) && 
  (birthdayEveryConfirm.author !== birthdayEvery.author)))
}

console.log(authorUnique());



    

