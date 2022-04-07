let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
for (var imprimir of numbers) {
    
    console.log(imprimir);
}

*/

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
   soma += numbers[index];
   //console.log(numbers[index])
}

console.log(soma);