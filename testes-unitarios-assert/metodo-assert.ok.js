/*
    No método assert.ok (), se a expressão for avaliada 
    como 0 ou false, um erro será lançado e o programa encerra.
*/

// Ex:

var assert = require('assert');

assert.ok(50 > 70, "My message goes here");

/*
    Definição: O método testa se uma determinada expressão é 
    verdadeira ou não, se a expressão for avaliada como 0 ou falsa, ocorre uma 
    falha e o programa encerra.

    Sintaxe: assert.ok(expression, message);

    Valor de retorno: Nenhum.
*/