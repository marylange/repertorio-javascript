// Retorna um array com todos os elementos que satisfazem a condição da função ou que queremos retirar da lista;
// Procura item por item;
// Retorna mais de um elemento.

const list = ["item1", "item2", "item3", "item4", "item5"];

//Caso com for

const listaComFor = (lista) => {
  const listaFiltrada = []
  for (let x = 0; x < lista.length; x++) {
    if (lista[x] === "item2") {
      listaFiltrada.push(lista[x]);
    }
  }

  return listaFiltrada;
}
console.log(listaComFor(list));

const listComFilter = (lista) => {
  const listaFiltrada = lista.filter(item => item === "item2");
  return listaFiltrada;
}
console.log(listComFilter(list));

/*

a variavel item usada na arrow function pode ter qualquer nome
EX: list.filter(xuxu => xuxu === "item2")

O filter sempre retorna um booleano;

A arrow function tem a finalidade de verificar se cada item é igual a "item2"

OBS: O método filter retorna true ou false durante a verificação. Para cada elemento da lista é feita uma verificação.
O filter RETORNA O ELEMENTO VERIFICADO COMO TRUE para a lista de destino.

Podemos passar mais de um parâmetro para a função também. As HOFs te 
dão, se você precisa, acesso a mais informações do array:

*/

// Outro ex:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;
console.log(verifyEven(2)); // true

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]



// Outro ex:

/*
  É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.
*/

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => {
  return listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
};

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
