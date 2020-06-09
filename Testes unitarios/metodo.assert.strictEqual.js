/*
    No método assert.strictEqual(), se os dois valores 
    não forem iguais(no valor e no tipo), um erro será gerado e o programa encerra.
*/

// Ex:

const assert = require('assert');

assert.strictEqual(50, 50); //OK
assert.strictEqual(50, "50"); /* AssertionError: 50 === '50' */

/*
    Definição:  O método testa se dois valores são iguais em valor e tipo, usando o operador ===.

    Sintaxe: assert.strictEqual(value1, value2, message);

    Valor de retorno: Nenhum.

*/