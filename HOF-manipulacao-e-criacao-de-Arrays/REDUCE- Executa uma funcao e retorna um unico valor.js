/*
    O Reduce executa uma função para cada elemento do array, resultando 
    num único valor de retorno.

    Sintaxe: array.reduce(accumulator, currentValue) => acumulator + currentValue;

    O método reduce() executa a função de callback uma vez para cada elemento presente 
    no array, excluindo furos (valores indefinidos), recebendo quatro argumentos:

    acumulador - valor inicial (ou o valor do callback anterior),
    valorAtual - o valor do elemento atual
    index - o índice atual e
    array - o array onde a iteração está ocorrendo.

    A primeira vez que o callback é chamado, o acumulador e o valorAtual podem 
    ter um de dois valores possíveis. Se o valorInicial tiver sido fornecido na 
    chamada à função reduce(), então o acumulador será igual ao valorInicial e o valorAtual 
    será igual ao primeiro valor no array. Caso nenhum valorInicial seja 
    fornecido, acumulador será igual ao primeiro valor no array, e valorAtual será igual 
    ao segundo.

*/

// Ex com for:

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
for(let i = 0; i < numbers.length; i += 1){
  sumNumbers = sumNumbers + numbers[i];
}
console.log(sumNumbers); // 113


// Ex com reduce:

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); /* O parâmetro `result` é o acumulador.
                                                                        Ele recebe, do `reduce`, o retorno da função a cada iteração. */
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113
