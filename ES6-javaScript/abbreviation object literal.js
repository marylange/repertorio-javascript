/*
    A abreviação da propriedade é sobre remover duplicações.

    Se quisermos atribuir essas variáveis ​​a propriedades de objetos 
    com nomes idênticos, teremos que repeti-lo para que a propriedade 
    dê o nome e o valor para se referir à nossa variável.

    Ex: 
        {
            name: name,
            age: age
        }

    Essa repetição namee ageparece um pouco desnecessária, certo? Bem, é 
    isso que o ES6 cuidou da abreviação de propriedades.

    {
        name,
        age
    }
*/

const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender,
    };
};

