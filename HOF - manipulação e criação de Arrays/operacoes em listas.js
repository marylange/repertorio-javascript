// Como encontrar em elementos em uma lista
// Apenas um elemto por vez

const list = [];

//Adicionar item list
//push adiciona item no final da lista
const list = [];
list.push("item1"); // ["item1"]
list.push("item2"); // ["item1", "item2"]
list.push("item3"); // ["item1", "item2", "item3"]

// verificar tamanho da listagem com length
const list = ["item1", "item2", "item3"];
list.length // 3

// Verificar em qual posição da lista está um item
const list = ["item1", "item2", "item3"];
list.indexOf("item2") // 1
// o indexOf retorna o indice do item passado
list.indexOf("item4") // -1
// Caso não encontro o item, retorna -1

//Validar se uma lista tem um elemento ou não

const list = ["item1", "item2", "item3"];
if (list.indexOf("item2") == -1) {
  //faz a ação caso o item procurado não exista na lista
} else {
  //faz a ação caso o item procurado exista na lista
}

// Includes verifica se o item está contido na lista.
// SEMPRE RETORNA BOOLEANO!!!!!!!!!!!!!!!
list.includes("item2")