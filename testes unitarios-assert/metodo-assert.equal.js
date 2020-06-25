/*
    O método assert.equal() verifica se dois valores são iguais, usando
    o operador igual (==), se os dois valores não forem iguais, uma falha
    de assert está sendo causada e o programa é encerrado.


    Sintaxe: assert.equal(value1, value2, message);
    OBS: A message de erro é opcional, caso não atribuida, uma messagem padrão é exibida.

    Valor de retorno: Nenhum.
*/

//Ex:

function division(x, y) {
    return x / y;
}

const assert = require('assert'); 

// declaração da função division, definida anteriormente...

assert.equal(division(10, 2), 5); // OK, funciona e não apresenta erro
assert.equal(division(10, 0), 0); /* 💣 evidente uma fragilidade na implementação da função 
                                    division, pois não poderia ser possível 
                                    realizar a divisão por 0. */

