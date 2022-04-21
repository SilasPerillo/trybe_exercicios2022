// 1 item
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(word) {
    for (let index = 0; index < word.length; index++) {      
        if (word[index] == word[(word.length - 1) - index]) {
            return true
       }
       return false
    }
}

//      console.log(palindromo('arara'));


// 2 item
//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// num = [2, 3, 6, 7, 10, 1];

function positionHigh (num) {
    let maiorNum = 0;
    for (let index = 0; index < num.length; index += 1) {
        if (num[index] > maiorNum) {
            maiorNum = index;
        } else {
            return maiorNum;
        }
    }
}


//console.log(positionHigh([2, 3, 6, 7, 10, 1]))


//3 item
//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3]; posição 6


function positionLower (numLower)
    



