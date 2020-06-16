/*
    O método SORT classifica os itens de um array, a ordem de classificação 
    pode ser alfabética ou numérica e crescente (para cima) ou decrescente (para baixo);

    Por padrão, o método sort () classifica os valores como 
    seqüências de caracteres em ordem alfabética e crescente;

    Isso funciona bem para seqüências de caracteres ("Apple" vem antes de "Banana"). No entanto, se 
    os números forem classificados como seqüências de caracteres, "25" será maior 
    que "100", porque "2" será maior que "1".


    Sintaxe: array.sort(compareFunction);

    Valor de retorno: O objeto Array, com os itens classificados.
*/

// Ex:

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();

console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]


// Outro ex:

/*
    Para ordenar de forma numérica crescente, é necessário passar a função a seguir:
*/

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
console.log(points); // [1, 5, 10, 25, 40, 100]


/*
    O acontece nesta condição:

    A lógica é a seguinte: a função recebe, da sort, todos os
    elementos do array, em pares, e vai
    comparando-os. O formato é meuArray.sort((elemento1, elemento2) => { logica da função }). Ou
    seja: para o array [1, 2, 3, 4], a função receberá (1, 2), (1, 3), …, (3, 4) como parâmetros
    e ordenará o array com base em seu resultado. Se a operação de
    elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai
    para frente, para, de forma decrescente, só inverter
    elemento1 - elemento2 para elemento2 - elemento1.
*/