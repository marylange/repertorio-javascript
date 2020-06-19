/*
    Podemos atribuir um valor padrão para uma propriedade 
    que não existe num objeto via default destructuring.
*/

// Ex:

const person = {
    name: "João",
    lastName: "Jr",
    age: 34
}

const { nationality = 'Brazilian' } = person

console.log(person);

/*
    O mesmo pode ser feito na hora de desestruturar um array:
*/

const position2d = [1.0, 2.0]
const [x, y, z = 0] = position2d

console.log(z) // 0 (foi colocado como valor padrão)