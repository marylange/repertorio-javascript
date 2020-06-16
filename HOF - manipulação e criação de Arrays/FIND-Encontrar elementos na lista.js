/*
  Queremos encontrar e imprimir no console o primeiro 
  elemento de um array que satisfaça a uma determinada condição. Então, a função que deverá ser 
  passada precisa retornar true ou false.
*/
const list = ["item1", "item2", "item3", "item4", "item5"];

//Caso com for

const listaComFor = (lista) => {
  for (let x = 0; x < lista.length; x += 1) {
    if (lista[x] === "item2") {
      return lista[x];
    }
  }
  return undefined;
}
console.log(listaComFor(list));

// Caso com FIND

const listComFind = (lista) => {
  const elementoEncontrado = lista.find(item => item === "item2");
  return elementoEncontrado;
}

console.log(listComFind(list));

/*
  A variavel  usada no FIND pode ter qualquer nome
  EX: list.find(qualquerNome => qualquerNome === "item2")

  O FIND sempre retorna um booleano

  O FIND tem a finalidade de retornar o 
  primeiro elemento(qualquerNome) que corresponde a condição estabelecida.

*/

// Outro ex:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30
