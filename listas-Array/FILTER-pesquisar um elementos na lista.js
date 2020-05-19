// Como selecionar elementos de uma lista
// Procurar elementos em uma lista
// Mais de um elemento
const list = ["item1", "item2", "item3", "item4", "item5"];

//Caso com for

function listaComFor() {
  const listaFiltrada = []
  for (let x = 0; x < list.length; x++) {
    if (list[x] === "item2") {
      listaFiltrada.push(list[x]);
    }
  }

  return listaFiltrada;
}

function listComFilter() {
  // a variavel item usada na arrow function pode ter qualquer nome
  // EX: list.find(xuxu => xuxu === "item2")
  // Essa arrow function sempre retorna um booleano
  // a arrow function tem a finalidade de verificar se cada item é igual a "item2"
  const listaFiltrada = list.filter(item => item === "item2");
  return listaFiltrada;
}


//OBS: O método filter retorna true ou false durante a verificação. Para cada elemento da lista é feita uma verificação.
// O filter RETORNA O ELEMENTO VERIFICADO COMO TRUE para a lista de destino.