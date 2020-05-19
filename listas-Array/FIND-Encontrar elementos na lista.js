// Como encontrar em elementos em uma lista
// Apenas um elemento por vez

const list = ["item1", "item2", "item3", "item4", "item5"];

//Caso com for

function listaComFor() {
  for (let x = 0; x < list.length; x++) {
    if (list[x] === "item2") {
      return list[x];
    }
  }

  return undefined;
}



function listComFind() {
  // a variavel item usada na arrow function pode ter qualquer nome
  // EX: list.find(xuxu => xuxu === "item2")
  // Essa arrow function sempre retorna um booleano
  // a arrow function tem a finalidade de verificar se cada item é igual a "item2"
  const elementoEncontrado = list.find(item => item === "item2");
  return elementoEncontrado;
}