//Faz uma ação para cada elemento de uma lista
// Printa todos os elementos
// O forEach não retorna nenhum valor

const list = ["item1", "item2", "item3", "item4", "item5"];

//Caso com for

const listaComFor = (lista) => {
  for (let x = 0; x < lista.length; x++) {
    console.log(lista[x]);
  }
}
console.log(listaComFor(list));


const listComForEach = (lista) => {
  lista.forEach(item => console.log(item));
}
console.log(listComForEach(list));

//O forEach iterage sobre cada elemento de list, funciona parecido com o FOR. 
//Não retorna nada, mas podemos imprimir os valores com console.log por exemplo.

// Ex:

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];


arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

/*
  Cada elemento do array: josé
  Index, posição do elemento: 0
  Array percorrido: ['josé', 50, 0.25, { comida: 'Chocolate' }]
  ---------------
  Cada elemento do array: 50
  Index, posição do elemento: 1
  Array percorrido: ['josé', 50, 0.25, { comida: 'Chocolate' }]
  ---------------
  Cada elemento do array: 0.25
  Index, posição do elemento: 2
  Array percorrido: ['josé', 50, 0.25, { comida: 'Chocolate' }]
  ---------------
  Cada elemento do array: { comida: 'Chocolate' }
  Index, posição do elemento: 3
  Array percorrido: ['josé', 50, 0.25, { comida: 'Chocolate' }]


  A arrow function passada para o forEach possui element, index e array como parâmetros, onde:

  element - Valor do elemento do array;
  index - Índice em cada iteração ou posição do elemento no array, começando do 0;
  array - Array original que está sendo percorrido.
*/
