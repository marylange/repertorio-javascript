//Fazer uma ação para cada elemento de uma lista
// Printar todos os elementos
// Fazer requisição para cada elemento

const list = ["item1", "item2", "item3", "item4", "item5"];

//Caso com for

function listaComFor() {
  for (let x = 0; x < list.length; x++) {
    console.log(list[x]);
  }
}



function listComForEach() {
  list.forEach(item => console.log(item));
}

//O forEach iterage sobre cada elemento da lista, funciona parecido com o FOR. 
//Não retorna nada, mas podemos imprimir valores com console.log por exemplo.