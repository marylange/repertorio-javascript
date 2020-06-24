/*
    Usado para verificar se um item esta contido 
    em um array. Para testar, ele usa '===', igualdaded estrita.

    Por exemplo, se getAllFlavors() retorna um array de sabores e 
    você quer ter certeza que lime está lá, você pode escrever:
*/

test('the flavor list contains lime', () => {
    expect(getAllFlavors()).toContain('lime');
});