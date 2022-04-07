
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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

*/

//3º item
//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let somaValores = 0
let valorIndex = 0
let valorMedia = 0

for (let index = 0; index < numbers.length; index += 1) {
    somaValores += numbers[index];
    //console.log(somaValores);
    valorIndex += 1 ;
 }

 valorMedia = somaValores / valorIndex;
 console.log(valorMedia);

