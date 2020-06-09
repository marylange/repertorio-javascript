/*
    No método deepStrictEqual(), se dois objetos ou seus objetos 
    filhos não forem iguais (em valor e tipo), um erro será 
    lançado e o programa será encerrado.
*/

// Ex:

const assert = require('assert');

const x = { a: { n: 0 } };
const y = { a: { n: 0 } };
const z = { a: { n: '0' } };

assert.deepStrictEqual(x, y); //OK
assert.deepStrictEqual(x, z); /* AssertionError: { a: { n: 0 } } deepStrictEqual {a: { n: '0' } } */

/*
    Definição: O método teste se dois objetos e seus filhos são iguais em valor e tipo, usando o oprador ===.

    Sintaxe: assert.deepStrictEqual(value1, value2, message);

    Valor de retorno: nenhum.
*/