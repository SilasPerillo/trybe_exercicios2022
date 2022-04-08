//1 item
//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let num = 10;
let numFatorado = 1;

for (let index = num; index >= 1; index -= 1) {
    numFatorado = index * numFatorado;
}

console.log(numFatorado);
