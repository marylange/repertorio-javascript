/*
    No javascript, quando declaramos uma função que recebe 
    parâmetros, podemos notar que ao chamá-la sem passarmos 
    nenhum valor vamos receber undefined como resultado. Mas em certas 
    ocasiões, queremos que algum valor seja atrelado a esses parâmetros, caso a 
    função seja chamada sem nenhum.

    Queremos que o parâmetro tenha um valor predefinido.

*/

// Ex como fazer com ES6:

const hello = (name = 'World') => {
    console.log(`Hello ${name}`);
}

hello('People');
hello();

// > Hello People
// > Hello World

// Ex passando undefined no argumento

const say = (message = 'Hello', name = 'World') => {
    console.log(`${message} ${name}`);
}

say('Hey', 'People');
say(undefined, 'People');
say('Hi', undefined);
say(undefined, undefined);

// > Hey People
// > Hello People
// > Hi World
// > Hello World

// Ex passando null

const say = (message = 'Hello', name = 'World') => {
    console.log(`${message} ${name}`);
}

say('Hey', 'People');
say(null, 'People');
say('Hi', null);
say(null, null);

  // > Hey People
  // > null People
  // > Hi null
  // > null null

