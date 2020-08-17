/*
    No Redux devemos sempre lembrar que o state é imutável.

    Quando fazemos o push de um elemento para o array, eu estou modificando 
    também o array primário pois é o mesmo endereço de memória.

    Isso significa que só podemos usar métodos que façam clonagem e não 
    podemos usar métodos que façam mutação.

    EX:
*/
const itemPrimario = [1, 2, 3, 4, 5];
let mutacaoTeste = itemPrimario;
mutacaoTeste.push(6);
console.log(mutacaoTeste); // [1, 2, 3, 4, 5, 6]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]

/*
    Sabendo disso, precisamos usar métodos que não 
    modifiquem o array primário, um exemplo é usando o concat, que criam um 
    novo array, sem alterar o array antigo.

    O método concat() é usado para mesclar dois ou mais arrays.
*/

const itemPrimario = [1, 2, 3, 4, 5];
const clonagemTeste = itemPrimario.concat(6);
console.log(clonagemTeste); // [1, 2, 3, 4, 5, 6]
console.log(itemPrimario); // [1, 2, 3, 4, 5]