/*
                                        Redux-thunk


    O redux-thunk permite fazermos requisições a endpoints para salvar no store.
    Tal pacote provê interface simples para dar suporte a actions creators que geram actions assíncronas.

    obs: O Redux suporta somente flucxo sincrono de dados.

*/

/*
    O redux-thunk é um middleware que, no contexto de uma aplicação Redux, nada mais é que 
    um interceptador que captura todas a actions enviadas pela store antes delas chegarem a um reducer.
    


                                        Analogia do redux-thunk

    Fazendo analogia com pedido online de produto, se as actions fosse o produto que comprou em algum site, 
    e o reducer fosse você e o middleware seria o correio que intercepta o produto antes de chegar até você.
*/

/*
                                        Instalando redux-thunk

         npm install redux-thunk ou npm install --save redux-thunk
*/

/*
                                        Habilitar o seu uso

        Para habilitar o uso dele na aplica'cão, é preciso fazer uso da função applyMiddleware() do Redux;


        EX:
*/

// arquivo onde a redux store é criada
/******/ import { createStore, applyMiddleWare } from 'redux';
/******/ import ReduxThunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';

// ...
const store = createStore(reducer, applyMiddleware(ReduxThunk));
// ...


/*
    O thunk nada mais é do que uma função que encapsula uma operação para que seja feita posteriormente.
    Em termos práticos, isso significa que você está definindo 
    um função que vai ser retornada por outra função com mais lógica adicionada a ela.
*/

/*

                                    Retorno do Redux-thunk

    Com redux-thunk, conseguimos definir action creator que retorna uma função 
    que será invocada pelo redux-thunk, em vez de retorna somente objeto.
    Na função retornada, podemos realizar uma operação assincrona, como fazer chamadas de API.
    Uma vez finalizada a operação, conseguimos enviar uma action com os dados 
    obtidos por ela da mesma forma que fazemos até então.
*/

/*
    Para ser devidamente usada pelo redux-thunk, a action creator precisa retornar
    uma função que pode fazer uso de dispatch e getState da store como parâmetros.

    EX:
*/

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

const requestMovies = () => ({ // action creator que retorna um objeto, que você tem feito até então
  type: REQUEST_MOVIES});

const receiveMovies = (movies) => ({ // outro action creator que retorna um objeto, que você tem feito até então
  type: RECEIVE_MOVIES,
  movies});

export function fetchMovies() { // action creator que retorna uma função, possível por conta do pacote redux-thunk
  return (dispatch) => { // thunk declarado
    dispatch(requestMovies());
    return fetch('some API endpoint irrelevant for our purposes now')
      .then((response) => response.json())
      .then((movies) => dispatch(receiveMovies(movies)));
  };
}

// componente que você consumiria a action fetchMovies assíncrona, como uma outra qualquer
//...
class MyConectedAppToRedux extends Component {
// ...
  componentDidMount() {
    const { dispatch, fetchMovies } = this.props;
    dispatch(fetchMovies()); // enviando a action fetchMovies
  }
//...
}
//...

/*
                                Ciclo de vida do Redux

        A action é acionada por algum evento (click no botão), essa action é enviada
        para o reducer através do dispatch, o valor vai para o store e todos os componentes 
        ligados ao valor alterado são renderizados automaticamente(UI).
*/

