/*
    Retorna true se todos os elementos de um array satisfazem a 
    uma condição, se pelo menos um não estiver dentro da condição, o EVERY retorna false.
*/

/*
    O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:

    Observe que foi usado Object.values junto com o every. Como o Object.values retorna
    um array, o every percorrerá esse array retornado.
*/

const notes = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
};

const verifyNotes = (studentNotes) => {
    return Object.values(studentNotes).every((note) => note === 'Aprovado');
};

console.log(verifyNotes(notes));