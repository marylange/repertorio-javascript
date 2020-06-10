/*
    No método assert.deepEqual (), se os dois objetos ou objetos 
    filhos não forem iguais, um erro será lançado e o programa será encerrado.
*/

// Ex:

// var assert = require('assert');

// var x = { a: { n: 0 } };
// var y = { a: { n: 0 } };
// var z = { a: { n: 1 } };

// assert.deepEqual(x, y); //OK
// assert.deepEqual(x, z); /* AssertionError: { a: { n: 0 } } deepEqual {a: { n: 1 } } */

/*
    Definição: O método testa se dois objetos e seus 
    filhos são iguais usando o operador ==.

    Sintaxe: assert.deepEqual(value1 (atual), value2 (expectativa), message);

    Valor de retorno: Nenhum.

*/

// Outro ex: 

/*
  A função myIndexOf(arr, item) recebe um array arr, um item e retorna 
  o índice do item ou -1 caso o item não pertença ao array arr
*/

function myIndexOf(arr, item) {
    let searchedIndex = -1;
    for (let i = 0; i < arr.length; i += 1) {
        if (item === arr[i]) {
            searchedIndex = i;
        }
    }
    return searchedIndex;
}

let resp1 = myIndexOf([1, 2, 3, 4], 3);
let resp2 = myIndexOf([1, 2, 3, 4], 5);

console.log(resp2);

// implemente seus testes aqui

// Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
assert.deepEqual(resp1, 2); /* (resp1 é o resultado atual da função e o 2 significa a expectativa de resultado, a afirmação é verdadeira 
                            pois o elemento 3 está posicionado no indice 2) */

// Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
assert.deepEqual(resp2, 3); /* (resp2 é o resultado atual da função e o 3 significa a expectativa de resultado, a afirmação é falsa pois 
                            o elemento 5 não existe dentro do array, o resultado da função retorna -1 neste caso.) */
