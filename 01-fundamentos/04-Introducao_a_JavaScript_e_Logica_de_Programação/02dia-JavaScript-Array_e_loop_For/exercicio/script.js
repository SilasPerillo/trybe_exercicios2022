
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
for (var imprimir of numbers) {
    
    console.log(imprimir);
}
//2º item

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
   soma += numbers[index];
}

console.log(soma);


//3º item
//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;


let somaValores = 0
let valorIndex = 0
let valorMedia = 0


for (let index = 0; index < numbers.length; index += 1) {
    somaValores += numbers[index];
    valorIndex += 1 ;
 }

 valorMedia = somaValores / valorIndex;
 console.log(valorMedia);

//4º item
//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

for (let index = 0; index < numbers.length; index += 1) {
    somaValores += numbers[index];
    valorIndex += 1 ;
 }

 valorMedia = somaValores / valorIndex;

 if (valorMedia > 20) {
     console.log("valor maior que 20");
 } else {
     console.log("valor menor ou igual a 20");
 
 }

 console.log(valorMedia);

//5º item
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = 0

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    } 
}
console.log(maiorNumero)


//6º item
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let valoreImpares = 0

for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 === 1) {
        valoreImpares += 1;
    }
}

if(valoreImpares > 0) {
    console.log(valoreImpares);
} else {
    console.log("não possui valores impares")
}

//7º item
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    } 
}
console.log(menorNumero)

//8º item
//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let nums = [];

for (let index = 1; index <= 25; index += 1) {
    nums.push(index);
}

//console.log(nums);

//9º item
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2


for (let index = 0; index < nums.length; index += 1) {
    console.log(nums[index] / 2)
}

*/

//bonus 1

let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < num.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (num[index] < num[index2]) {
            let aux = num[index];
            num[index] = num[index2];
            num[index2] = aux;
        }
    }
}

console.log(num)