/*
    No método assert.notEqual (), se dois valores forem iguais, um 
    erro será gerado e o programa será encerrado.
*/

// Ex:
const assert = require('assert');

assert.notEqual(50, 70); //OK
assert.notEqual(50, 50); /* AssertionError: 50 != 50 */

/*
    Definição: O método testa se dois valores NÃO são iguais, usando o operador !=.

    Sintaxe: assert.notEqual(value1, value2, message);
    
    Valor de retorno: Nenhum.
*/