/*
  Vamos implementar uma solução para salvar uma lista de itens 
  que podem ser adicionados por quem utilizar a aplicação, inicialmente esta lista estará vazia.

*/

/*
  A primeira coisa que precisamos fazer ao implementar 
  Redux no React é criar a nossa fonte universal de estados, o Store.

  Criamos um arquivo src/store/index.js com o conteúdo abaixo
*/

import { createStore } from 'redux';

const store = createStore();

export default store;

/*
  A função createStore() deve receber como parâmetro um reducer.
  Portanto, vamos criar um no arquivo src/reducer/index.js

  O reducer neste caso deverá ser capaz de adicionar itens a lista

  EX:
*/

const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;

/*
                        Vamos analisar o que está acontecendo:

Primeiro, definimos um estado inicial para nosso reducer;

Um reducer deve receber como parâmetro um estado e uma ação;

A ação, por convenção, deve ser um objeto e possuir a key type. 
É essa key que define como o reducer vai manipular o estado.

No exemplo, como estamos criando uma lista e só queremos adicionar 
elementos, caso o type seja igual a "ADDELEMENT", estamos instruindo nosso 
reducer a guardar todo o estado anterior, utilizando _spread operator, e a adicionar 
o novo elemento, que nesse caso está na key value da nossa action. 
Caso o type seja diferente de "ADD_ELEMENT", o reducer deverá cair no 
default do switch, que preserva o state.
*/

/*
          Vamos criar agora o arquivo src/actions/index.js, que guardará nossas actions:

          Como dito anterioremente, nossa action, por convenção, deve ser um objeto.
          Esse objeto pode possuir apenas a key type ou mais outras keys, caso seja conveniente.
          Note que, no caso acima, criamos também uma key value, que guardará o valor recebido pela action.

          EX:
*/

export const addAssignment = (value) => ({ type: 'ADD_ELEMENT', value });


/*
  Agora precisamos voltar no Store e passar a função reducer como parametro de createStore;

  EX:
*/

import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);

export default store;

/*
  Utilizamos também o método combineReducers que, como diz seu nome, combina reducers. 
  Ele deve receber um objeto com os reducers criados. Sem ele, só poderíamos usar um reducer em nossa aplicação.

  Mesmo com somente um reducer é uma boa prática usar o combineReducers.

  Quando utilizamos o combineReducers, o estado da nossa aplicação fica disponível em um objeto.

  Dentro desse objeto cada reducer passado apresentará uma chave 
  cujo valor será o estado que é responsável por gerenciar.

  EX:
*/

{
  listReducer: [],
}


/*
  Com isso o Store, Reducer e Actions foram criados.
*/