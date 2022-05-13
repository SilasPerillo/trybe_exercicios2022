const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// item 1

const addNewKey = (obj, key, value) => obj[key] = value;

addNewKey(lesson2, 'turno', 'noite');

// console.log(lesson2);

// item 2 

const listKeys = (obj) => {
  return Object.keys(obj)
}

// console.log(listKeys(lesson3));

// item 3

const lengthObj = (obj) => Object.keys(obj).length;

// console.log(lengthObj(lesson2))

// item 4

const valueObj = (obj) => Object.values(obj);

// console.log(valueObj(lesson3))

// item 5

const allLessons = () => Object.assign({lesson1:lesson1}, {lesson2:lesson2}, {lesson3:lesson3});


console.log(allLessons());
