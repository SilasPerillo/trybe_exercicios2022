/*
//1 item
//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
let num = 10;
let numFatorado = 1;

for (let index = num; index >= 1; index -= 1) {
    numFatorado = index * numFatorado;
}

console.log(numFatorado);
//2 item
//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let wordInvert = ''

for (let index = 0; index < word.length; index += 1) {
    wordInvert += word[word.length - 1 - index];
}

console.log(wordInvert);

//3 item
//Considere o array de strings abaixo: Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];


for (let index = 0;  index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}


for (let index = 0;  index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);

*/

//4- item
//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let numeroMaximo = 50
let numeroPrimo = 0

for (index = 1; index <= numeroMaximo; index += 1) {
    
}


