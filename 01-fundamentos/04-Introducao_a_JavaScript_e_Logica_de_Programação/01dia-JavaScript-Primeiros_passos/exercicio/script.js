// 1º item do exercicio
const a = 3;
const b = 6;
const c = 9;

console.log('Adição a + b =', a + b);
console.log('Subtração a - b =', a - b);
console.log('Multiplicação a * b =', a * b);
console.log('Divisão a / b =', a / b);
console.log('Módulo a % b =', a % b);

//2º item do exercicio
//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

if (a > b){
    console.log('O numero contido em "a" =', a, 'é maior')
} else {
    console.log('O numero contido em "b" =', b, 'é maior')
}

//3º item do exercicio
//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

if (a > b && a > c) {
    console.log('O numero contido em "a" =', a, 'é maior')
} else if (b > a && b > c) {
    console.log('O numero contido em "b" =', b, 'é maior')
} else {
    console.log('O numero contido em "c" =', c, 'é maior')
}

//4º item do exercicio
//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

if (a > 0) {
    console.log('O numero contido em "a" é positive')
} else if (a < 0) {
    console.log('O numero contido em "a" é negative')
} else {
    console.log('O numero contido em "a" é zero')
}

//5º item do exercicio
//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.