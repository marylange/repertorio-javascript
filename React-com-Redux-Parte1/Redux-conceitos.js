/*
    O State é onde vamos armazenar todos os dados da aplicação e é representado 
    por um objeto Javascript -> {};
    O State é armazenado no Store do Redux.

    EX:
*/

const store = Redux.createStore(todosReducer);

/*
    Action é um objeto JavaScript que representa alguma mudança/alteração 
    que precisa acontecer no State.
*/

/*
    É uma função JavaScript que recebe o estado atual (current state) e a ação 
    corrente (current action) e retorna um novo estado (new state).
    É responsabilidade dessa função decidir o que acontecerá com o estado dada uma ação (action).
*/

/*
    Dispatch é uma função que envia uma ação (action) para processamento.
*/