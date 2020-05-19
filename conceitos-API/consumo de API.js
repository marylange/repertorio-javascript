// 1 - Consutar endereço web com fetch.
// Endereço web pode ter termos de busca
// EX: https://api.mercadolibre.com/sites/MLB/search?q=computador
const API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=computador`


// 2 - Cada API retorna um objeto javacript. JSON
window.onload = function onload() { 
    const API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=computador`
    const myObject = {
      method: 'GET',
      headers: {'Accept': 'application/json'}
    }
    fetch(API_URL, myObject)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
// 3 - O objeto retornado pela API pode ser tratado para um objeto mais simples.
// EX: map
// Isso é comum, pois nem sempre todos os campos do objet retornado pela API, serão usados.
const resultado = data.results.map(function(item){
    return {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    }
  })
  resultado.forEach(function(item){
    console.log(`${item.sku} ${item.name} ${item.image}`);
  })
// 4 - É preciso criar HTML para exibir esses objetos para o usuário.


//Para essa parte, foi construido um código que cria elementos HTML...
function createCustomElement(element, className, innerText) { //adiciona ao elemento que será criado abaixo
                                                            //um element span, uma clasName 'item__sku', 'item__title' ou 'item__add' e innerHTML adicionando os textos.
    const e = document.createElement(element);
    e.className = className;
    e.innerText = innerText;
    return e;
  }
  
  function createProductItemElement({ sku, name, image }) { //criando a tag section
    const section = document.createElement('section');
    section.className = 'item';
  
    section.appendChild(createCustomElement('span', 'item__sku', sku));
    section.appendChild(createCustomElement('span', 'item__title', name));
    section.appendChild(createProductImageElement(image));
    section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
    return section;
  }
//usar para atrubuir elementos mapeados no exemplo 3 ao elemento 4. 
const elementosCriados = objetosMapeados.map((objetoMapeado) => {
    return createProductItemElement(objetoMapeado);
  });

// 5 - Adicionar esses elementos de HTML que foram criados, na tela. 

const elementoItems = document.getElementsByClassName('items');//chamando a class da tag section
elementosCriados.forEach((elementoCriado) => elementoItems[0].appendChild(elementoCriado));


//fetch para API mercado livre https://api.mercadolibre.com/sites/MLB/search?q=computador
  //.result é uma listagem de produtos
  //usar map, em cada produto para tranformar os produtos da api para o objeto usado pelo createProductItemElement { sku, name, image }
  //iterar na listagem de objetos gerada, e criar um novo elemento de HTML com o metodo createProductItemElement
  //pegar cada item de HTML gerado e adicionar como filho de <section class="items">