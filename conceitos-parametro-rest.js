const animals = [
    {
        id: '0938aa23-f153-4937-9f88-4858b24d6bce',
        name: 'lions',
        popularity: 4,
        location: 'NE',
        residents: [
            {
                name: 'Zena',
                sex: 'female',
                age: 12
            },
            {
                name: 'Maxwell',
                sex: 'male',
                age: 15
            },
            {
                name: 'Faustino',
                sex: 'male',
                age: 7
            },
            {
                name: 'Dee',
                sex: 'female',
                age: 14
            }
        ]
    },
    {
        id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
        name: 'tigers',
        popularity: 5,
        location: 'NW',
        residents: [
          {
            name: 'Shu',
            sex: 'female',
            age: 19
          },
          {
            name: 'Esther',
            sex: 'female',
            age: 17
          }
        ]
      },
      {
        id: 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        name: 'bears',
        popularity: 5,
        location: 'NW',
        residents: [
          {
            name: 'Hiram',
            sex: 'male',
            age: 4
          },
          {
            name: 'Edwardo',
            sex: 'male',
            age: 4
          },
          {
            name: 'Milan',
            sex: 'male',
            age: 4
          },
        ]
      },
      {
        id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
        name: 'penguins',
        popularity: 4,
        location: 'SE',
        residents: [
          {
            name: 'Joe',
            sex: 'male',
            age: 10
          },
          {
            name: 'Tad',
            sex: 'male',
            age: 12
          },
          {
            name: 'Keri',
            sex: 'female',
            age: 2
          },
          {
            name: 'Nicholas',
            sex: 'male',
            age: 2
          },
        ]
      },
      {
        id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        name: 'otters',
        popularity: 4,
        location: 'SE',
        residents: [
          {
            name: 'Neville',
            sex: 'male',
            age: 9
          },
          {
            name: 'Lloyd',
            sex: 'male',
            age: 8
          },
          {
            name: 'Mercedes',
            sex: 'female',
            age: 9
          },
          {
            name: 'Margherita',
            sex: 'female',
            age: 10
          },
        ]
      },
]

// O parâmetro rest (...ids), permite representar um número indefinido de argumentos como array
const animalsByIds = (...ids) => {
    if (typeof ids === null) {
        return [];
    }
    // O método includes determina se uma string pode ser 
    // encontrada dentro de outra string, retornando true ou false, conforme apropriado.
    const result = animals.find((elemento) => elemento.id.includes(ids));
    return result;
}
  console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));