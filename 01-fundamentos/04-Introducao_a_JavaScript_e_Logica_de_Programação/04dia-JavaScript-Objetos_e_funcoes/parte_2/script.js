// 1 item
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

//let word = 'arara';
//let wordVerificada = false;


function palindromo(word) {
    for (let index = 0; index < word.length; index++) {      
        if (word[index] == word[(word.length - 1) - index]) {
            return true
       }
    }
    return false
}

console.log(palindromo('desenvolvimento'));