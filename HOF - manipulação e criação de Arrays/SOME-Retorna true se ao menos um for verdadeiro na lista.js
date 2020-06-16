// Retorna true SE AO MENOS UM dos elementos de um array satisfaz a uma condição;
// Retorna true ou false;

/*
    Sintaxe: arr.some(callback[, thisArg])

    executa a função callback uma vez para cada elemento 
    presente no array até achar um onde o callback retorne um valor true
*/

// Ex:

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
    return names.some((name) => name[0] === letter);
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false
