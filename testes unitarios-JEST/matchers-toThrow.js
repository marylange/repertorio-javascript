/*
    O toThrow testa que uma função lança um erro 
    quando é executada. Note que é preciso envolver um código 
    em uma função (normalmente uma arrow function).

    Para testar se a função lança um erro, devemos escrever desta forma:
*/

test('throws on octopus', () => {
    expect(() => {
        drinkFlavor('octopus');
    }).toThrow();
});
