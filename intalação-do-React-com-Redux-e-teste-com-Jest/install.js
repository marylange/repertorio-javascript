/*


Primeiro, vamos começar um novo app em React. Crie um diretório e use o comando:

    npx create-react-app doguinhos-app


Depois de terminar, vamos acessar o diretório do nosso novo app e instalar as dependências necessárias:

    cd doguinhos-app
    npm i redux react-redux


    
    instalar o pacote thunk para códigos assincronos
    
    npm i redux-thunk
    
    OBS: Lembrando de colocar os devidos imports
    
    // src/store/index.js
    import { createStore, applyMiddleware } from 'redux';
    import ReduxThunk from 'redux-thunk';
    .
    .
    .
    
    const store = createStore(reducer, applyMiddleware(ReduxThunk));

Caso o arquivo esteja sem a node modules:
    
    Instalar a pasta node-modules para testes
    
        npm install --save-dev jest

    Reintalar a node modules:

        npm install
*/