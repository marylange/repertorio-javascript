//Transformar elementos de uma lista em outros elementos
//ex: transformar lista de strings em lista de objetos

const list = ["item1", "item2", "item3", "item4", "item5"];

//Caso com for

function listaComFor() {
  const objetosTransformados = []
  for (let x = 0; x < list.length; x++) {
    let obj = {};
    obj.nome = list[x];
    objetosTransformados.push(obj);
  }

  return objetosTransformados;
}


// Transformar item em {nome : item}
//["item1", "item2", "item3", "item4", "item5"] => [{"nome": "item1"}, {"nome": "item2"}, {"nome": "item3"}, {"nome": "item4"}, {"nome": "item5"}]
function listComMap() {
  // a variavel item usana na arrow function pode ter qualquer nome
  // EX: list.find(xuxu => xuxu => {})
  // O map retorna um novo elemento para cada elemento da lista
  // a arrow function tem a finalidade de verificar se cada item é igual a "item2"
  const objetosTransformados = list.map(item => {
    let obj = {};
    obj.nome = item;
    return obj;
  });
  return objetosTransformados;
}

// Verificando a quantidade de letras nos elementos e retornando um array com essas quantidades.
list.map(item => item.length); //[5, 5, 5, 5, 5]
list.map(item => item + " " + "Que item"); //["item1 Que item", "item2 Que item", "item3 Que item", "item4 Que item", "item5 Que item"]



//OBS: O [].map - mapeamento/transformação - Para cada elemento da lista será feito uma transformação para um novo elemento que será incorporado numa lista.
// mapeamento transforma um elemento em outro, cria um elemento com base em outro.