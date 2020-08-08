/*
    Para ultilizar o estado compartilhado que Redux provê, precisamos editar 
    o arquivo src/App.js para adicionarmos toda essa configuração:

    EX:
*/

import React from 'react';
// o provider é o meio pelo qual disponibilizamos o Store
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        // componentes aqui
        </Provider>
      </div>
    );
  }
}

export default App;

/*
  Agora vamos implementar os componentes List.js e InputsList e conectá-los ao Redux. 
  Primeiramente vamos importar e adicionar os componentes ao componente App
*/

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import List from './List';
import InputsList from './InputsList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <InputsList />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;

/*
  Agora vamos à implementação do componente InputsList

  EX:
*/

import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from './actions';

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={event => this.setState({ textValue: event.target.value })}
        />
        <button onClick={() => this.props.add(this.state.textValue)}>
          Adicionar tarefa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e))
});

export default connect(null, mapDispatchToProps)(InputsList);

/*
                          Vamos passar por cada parte do componente para explicar seu funcionamento:

Primeiro, nós estamos definindo um estado interno do componente chamado textValue. 
Note que, apesar de estarmos usando o Redux, que centraliza os states, caso haja algum estado o 
qual não necessite navegar entre outros componentes, podemos declará-lo internamente.

Estamos criando um input para o usuário digitar a tarefa que deseja adicionar. 
A cada mudança no valor do input, o valor é salvo no estado textValue.

Um botão com a propriedade onClick foi criado, passando a função add que está presente na props. 
Mas como isso foi parar lá? Veremos agora:

*/

/*
                              Ter acesso a funcionalidades do Redux no React

  A função mapDispatchToProps é a responsável por disparar - fazer o dispatch de - uma ação para o reducer.

  Para ler os dados ou manipular, precisamos acessá-los com as props de um componente, então o mapDispatchToProps 
  mapeia os dispatch para o props.

  OBS: Note que no ínicio do arquivo estamos importanto a action addAssignment, criada anteriormente. 
  No caso, estamos nomeando uma propriedade chamada add, que faz o dispatch da action addAssignment com um parâmetro.

  ***** O Redux espera receber sempre um objeto.
*/

/*
                        Para conectar o Redux ao componente, precisamos usar o método connect

      O método possui a seguinte estrutura:  connect()()

      É ele quem dá acesso ao Store do Redux.

      O null presente no connect é necessário pois entende que o promeiro parênteses 
      deve ser uma função chamada mapStateToProps. No segundo parênteses passamos nosso componente.
*/

export default connect(null, mapDispatchToProps)(InputsList);

/*
                        Agora vamos criar o componente List
*/

import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map(element => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer});

export default connect(mapStateToProps)(List);

/*
                                Vamos analisar o que está acontecendo:

  Estamos fazendo um map com os elementos presentes no array list que, por sua vez, está presente no props. 
  Mas como isso foi parar lá?

  O mapStateToProps mapeia as entidades armazenadas nos estados para uma props.

  Neste caso, queremos acessar os dados providos pelo reducer listReducer, portanto basta acessar 
  o caminho do state com o reducer desejado e nomear a prop que o receberá (no caso, chamamos de list).

  EX:
    const mapStateToProps = state => ({
      list: state.listReducer});

  Por último, conectamos o Redux ao componente, fazendo uso do connect. 
  Como visto anteriormente, o connect tem o seguinte formato: connect()(). 
  Como no caso estamos fazendo apenas leitura dos dados, basta passar a função mapStateToProps 
  no primeiro parênteses e o componente no segundo.

  EX:
      export default connect(mapStateToProps)(List);
*/

