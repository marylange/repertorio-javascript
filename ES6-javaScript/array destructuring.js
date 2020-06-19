/*
    A atribuição de reestruturação permite atribuir as propriedades 
    de uma matriz ou objeto a variáveis ​​usando uma sintaxe semelhante 
    à literal de matriz ou objeto. Essa sintaxe pode ser extremamente 
    concisa, enquanto ainda exibe mais clareza do que o acesso 
    tradicional à propriedade.
*/
// Ex sem desestruturação array

const first = someArray[0];
const second = someArray[1];
const third = someArray[2];

// Ex com desestruturação array

const [first, second, third] = someArray;

// Outro ex:

const [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]

/*
    Acessando com valores aninhados
*/

//Ex:

const complicatedObj = {
    arrayProp: [
        "Zapp",
        { second: "Brannigan" }
    ]
};

const { arrayProp: [first, { second }] } = complicatedObj;

console.log(first);
// "Zapp"
console.log(second);
// "Brannigan"


/*
    Valores padrão para propriedades não definidas
*/

const [missing = true] = [];
console.log(missing);
// true

const { message: msg = "Something went wrong" } = {};
console.log(msg);
// "Something went wrong"

const { x = 3 } = {};
console.log(x);
// 3