// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const compareAnswers = (rightAnswer, studentAnswer) => {
//   if (rightAnswer === studentAnswer) {
//     return 1;
//   } if (studentAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };
// console.log(compareAnswers())

// const countPoints = (rightAnswers, studentAnswers, action) => {
//   let contador = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//     contador += actionReturn;
//   }
//   return `Resultado final: ${contador} pontos`;
// };

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));


// Array que será passado para o .sort
const numbers = [10, 21, 1, 3, 30, 2, 11, 23, 12, 22];

// Função callback que será usada para ordenar o array
function order(a, b) {
  return a - b;
}

// Função em que passamos o array numbers como parâmetro. Experimente remover a função passada como parâmetro na linha 12 (order) e veja o que acontece quando tentar fazer o sort novamente.
orderNumbers = (array) => {
  const answer = document.querySelector("#answer");
  const newArray = array.sort(order);
  answer.innerHTML = newArray;
};

const btnSort = document.querySelector("#btn-sort");

btnSort.addEventListener("click", () => orderNumbers(numbers));