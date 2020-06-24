/*
    O javascript faz comparação por referência. Isso significa que 
    objetos e arrays com conteúdos iguais são considerados 
    diferentes quando comparados.

    Ex: 
        const arr = [1, 2 ,3];
        const obj = { a: 1, b: 2, c: 3};

        arr === obj 

        output = false


    Para testar igualdade de objetos e arrays, ou qualquer outro 
    tipo de dados do tipo object, é preciso usar o matcher toEqual. 
    O toEqual acessa cada elemento do objeto ou array, fazendo um trabalho de comparação 
    especifica do conteúdo e retorna uma resposta mais voltada para a necessidade dos testes.
*/

// Ex:

test('array and object equality', () => {
    const arr = [1, 2, 3];
    const obj = { a: 1, b: 2, c: 3 };

    expect(arr).toBe([1, 2, 3]); // fails
    expect(obj).toBe({ a: 1, b: 2, c: 3 }); // fails
    expect(arr).toEqual([1, 2, 3]); // OK
    expect(obj).toEqual({ a: 1, b: 2, c: 3 }); // OK
});


