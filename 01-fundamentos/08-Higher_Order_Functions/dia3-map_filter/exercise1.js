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

// item 1 -

function formatedBookNames() {
  return newArray = books.map((array) => `${array.name} ${array.genre} ${array.author.name}`)
}

// console.log(formatedBookNames());

// item 2 -

function nameAndAge() {
  return books.map((keyAuthor) => ({
    author: keyAuthor.author.name,
    age: keyAuthor.releaseYear - keyAuthor.author.birthYear})).sort((a, b) => a.age - b.age)
}

// console.log(nameAndAge());

// item 3

function fantasyOrScienceFiction() {
  return books.filter((gender) => gender.genre === 'Fantasia' || gender.genre === 'Ficção Científica')
}

// console.log(fantasyOrScienceFiction());

// item 4

function oldBooksOrdered() {
  return books.filter((oldBook) => (new Date().getFullYear() - oldBook.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear)
}

// console.log(oldBooksOrdered());

// item 5

function fantasyOrScienceFictionAuthors(item3) {
  return item3().map((objItem3) => objItem3.author.name).sort();
}

// console.log(fantasyOrScienceFictionAuthors(fantasyOrScienceFiction));

// item 6

function oldBooks(item4) {
  return item4().map((objitem4) => objitem4.name)
}

// console.log(oldBooks(oldBooksOrdered));

// item 7

function authorWith3DotsOnName() {
  return books.find((findPoint) => findPoint.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3).name;
}

console.log(authorWith3DotsOnName());
