/*
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

let somaAngulo = a + b + c;
let anguloPositivo = a > 0 && b > 0 && c > 0;

if (anguloPositivo) {
    if (somaAngulo === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Valor de andulo invalido")
}

//6º item do exercicio
//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = "Rei";

switch (peca.toLowerCase()) {
    case "rei":
        console.log("Anda para todas as direções, apenas 1 casa");
        break;
    
    case "rainha":
        console.log("Anda para todas as direções, quantas casas quiser");
        break;

    case "bispo":
        console.log("Anda em diagonal, quantas casas quiser")
        break;
    
    case "torre":
        console.log("Anda em linhas retas, quantas casas quiser");
        break;

    case "cavalo":
        console.log("Anda em L");
        break;

    case "peao":
        console.log("No primeiro movimento pode avançar 2 casas, depois avança 1 casa somente. Mas come nas diagonais, somente uma casa tambem");
        break;

    default:
        console.log("A peça mencionada não participa do xadrez")
}
*/

let nota = 75;

if (nota <= 100 && nota >= 0) {
    if (nota <= 100 && nota > 90) {
        console.log("Nota A");
    } else if (nota <= 90 && nota > 80) {
        console.log("Nota B");      
    } else if (nota <= 80 && nota > 70) {
        console.log("Nota C");      
    } else if (nota <= 60 && nota > 50) {
        console.log("Nota D");      
    } else {
        console.log("Nota F");      
    }
} else {
    console.log("Este valor não esta entre 0 e 100")
}

