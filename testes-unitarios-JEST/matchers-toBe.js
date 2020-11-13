/*
    O matcher toBe é o mais simples, testa igualdade estrita 
    entre os valores passados para o exepect e seu argumento.

    Isso significa que se eu testar o exemplo abaixo, ele falharia 
    porque a string “5” não é igual ao número 5.
*/
expect(5).toBe("5")


/*
    OBS: Não é recomendado usar toBe para testar números 
    com pontos flutuantes. no JavaScript 0.2 + 0.1 não é estritamente igual a 0.3.
    Para isso, é usado .toBeCloseTo
*/