//Transforma elementos de uma lista em outros elementos
//ex: transformar lista de strings em lista de objetos

const list = ["item1", "item2", "item3", "item4", "item5"];

//Caso com for

const listaComFor = (lista) => {
  const objetosTransformados = []
  for (let x = 0; x < lista.length; x++) {
    let obj = {};
    obj.nome = lista[x];
    objetosTransformados.push(obj);
  }

  return objetosTransformados;
}
console.log(listaComFor(list));

// Transformar item em {nome : item}
//["item1", "item2", "item3", "item4", "item5"] => [{"nome": "item1"}, {"nome": "item2"}, {"nome": "item3"}, {"nome": "item4"}, {"nome": "item5"}]

const listComMap = (lista) => {
  const objetosTransformados = lista.map(item => {
    let obj = {};
    obj.nome = item;
    return obj;
  });
  return objetosTransformados;
}
console.log(listComMap(list));

/*
a variavel item usada na arrow function pode ter qualquer nome
EX: list.find(xuxu => xuxu => {})

O MAP retorna um novo elemento para cada elemento da lista
*/

/*
  OBS: O [].map - mapeamento/transformação - Para cada elemento da lista será feito
  uma transformação para um novo elemento que será incorporado numa lista.

  O MAP transforma um elemento em outro, cria um elemento com base em outro.
*/