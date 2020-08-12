/*

A função renderWithRedux recebe um componente como primeiro parâmetro e desconstrói 
um objeto como o segundo. Ele obtém o valor de uma chave initialState desse objeto e o 
armazena em uma variável com o mesmo nome. Além disso, ele atribui um valor padrão para 
a chave store, e esse valor é uma nova store criada com um reducer importado e o initialState que 
você acabou de desconstruir. Leia esta função com calma para ter certeza que você entendeu.

Então, isso basicamente renderiza o componente envolvido pela store que você criou para o 
contexto do seu teste. Ela também retorna a própria store, caso você precise acessá-la diretamente 
em seu teste. Em resumo: a função renderWithRedux acrescenta ao seu componente renderizado um store 
criado para os testes. Veremos como fazer isso mais a frente!

*/

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
    
/*
  Para usar a função renderWithRedux, é necessários fazer alguns imports necessários...
*/
    import React from 'react'
    import { createStore } from 'redux'
    import { Provider } from 'react-redux'
    import { render, cleanup, fireEvent } from '@testing-library/react';
    import App from './App';
    import reducer from '../reducers'
/*
    Esse imports servem para termos acesso às ferramentas necessárias para mockar o store.


    Um detalhe muito importante: como é utilizado um combineReducers na 
    resolução do exercício, quando formos implementar os testes, temos que criar o 
    store mockado com a mesma estrutura do padrão. Portanto, vamos importar o combineReducers 
    e adaptar a função renderWithRedux para utilizá-lo.

    EX:

*/
  // demais imports...
  import { createStore, combineReducers } from 'redux';
  import clickReducer from './reducers';

  const renderWithRedux = (
    component,
    { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    }
  }

/*
    Para que os testes funcionem, é necessário que o Providex seja colocado no arquivo index.js.
    Isso é necessário pois precisamos igonorar o store provido na aplicação em favor do store que nossos testes proveem.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Store provido pela nossa aplicação encapsulando o componente App. Nos testes, precisamos prover um novo store para podermos controlá-lo

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();


/*
    Como primeiro teste, vamos averiguar se o botão Clique aqui e o texto "0" estão na tela.
*/

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
});


/*
    No clickReducer que que importamos no renderWithRedux, não passamos nenhum valor inicial para o 
    clickReducer, e por isso que ele utilizou o valor padrão zero.

    Caso seja interessante alterar o valor padrão do clickReducer, isso é possível pasando 
    como segundo parâmetro para a funçáo renderWithRedux um objeto com as propriedades 
    que respeitem o formato original do state.

    EX:
*/
const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

/*
    O initialState representa o valor inicial do state.
    O clickReducer representa o reducer criado.
    O counter representa a propriedade que criamos dentro do nosso reducer.


    Resultado final da alteração...
    
*/

test('a click in a button should increment the value of clicks', () => {
  const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
  expect(queryByText('5')).toBeInTheDocument();
});