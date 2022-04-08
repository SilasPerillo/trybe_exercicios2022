//1 item
//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
/*
let num = 10;
let numFatorado = 1;

for (let index = num; index >= 1; index -= 1) {
    numFatorado = index * numFatorado;
}

console.log(numFatorado);
*/
//2 item
//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let wordInvert = ''

for (let index = 0; index < word.length; index += 1) {
    wordInvert += word[word.length - 1 - index];
}

console.log(wordInvert);
console.log(word.length);
