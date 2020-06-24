/*
    toHaveProperty é usado para verificar se as propriedades fornecidas existem para um objeto.

    Para verificar propriedades profundamente aninhadas em um objeto, você pode usar a notação 
    de ponto ou uma chave.

    O exemplo a seguir contém um objeto houseForSale com propriedades aninhadas. 
    Estamos usando o toHaveProperty para verificar a existência e os valores de várias propriedades no objeto
*/

// Ex:

const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        wallColor: 'white',
        'nice.oven': true,
    },
    'ceiling.height': 2,
};

test('this house has my desired features', () => {
    // Example Referencing
    expect(houseForSale).toHaveProperty('bath');
    expect(houseForSale).toHaveProperty('bedrooms', 4);
});