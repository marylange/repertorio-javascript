/*
    A sintaxe SPREAD(propagação) permite que um objeto iterável, como um array ou 
    string, seja expandido em locais onde se espera 
    zero ou mais argumentos (no caso de chamada de funções).

    Os argumentos são valores usados quando vamos chamar as funcões.

    Sintaxe: 
        Para chamadas de função: minhaFuncao(...objIteravel);
        Para array literais: [...objIteravel, 4, 5, 6];
        Desestruturação: [a, b, ...objIteravel] = [1, 2, 3, 4, 5];
*/

// Ex: 

const minhaFuncao = (x, y, z) => { 
    // execução do código
}

const args = [0, 1, 2]; // O que será passado como argumento
minhaFuncao(...args); // argumento usando a sintaxe de spread operator

/*
    Qualquer argumento na lista de argumento pode usar a sintaxe spread e pode ser usado várias vezes.
*/

// Ex:

const minhaFuncao = (v, w, x, y, z) => {
    // execução do código
}
const args = [0, 1];
minhaFuncao(-1, ...args, 2, ...[3]); // Sintaxe spread sendo usada mais de uma vez


/*
    Outro exemplo de uso é criar um novo array, usando um array já existente, utilizando spread operator 
*/

// Ex:

const partes = ['ombros', 'joelhos'];
const letra = ['cabeca', ...partes, 'e', 'dedos']; 

// ["cabeca", "ombros", "joelhos", "e", "dedos"]


/*
    O PUSH é frequentemente usado para adicionar um array no final de um array existente ou elemento 
    ao final do array. Podemos usar o spread operator para fazer push em outro array.
*/

// Ex:

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
arr1.push(...arr2);

console.log(arr1);