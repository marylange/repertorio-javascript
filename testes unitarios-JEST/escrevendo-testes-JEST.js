/*
    Passo 1: Criar um arquivo javascript ( Ex: calcs.js), nele vamos 
    colocar o seguinte conteúdo:

    No código abaixo, foi criada uma função simples de somar dois valores. 
    O module.exports = sum é usado para exportar a função para o arquivo de testes (testes.test.js).
*/

const sum = (a, b) => {
    return a + b
}

module.exports = sum


/*
    Passo 2: Criar um arquivo para os testes (Ex: testes.test.js), nele vamos colocar 
    o seguinte conteúdo:

    No arquivo testes.test.js temos o código abaixo. Na primeira linha, o require('./calcs') importa a função ou as funções que estão sendo exportadas (calcs.js), como vimos no passo 1.
    OBS: A constante e o arquivo não precisam ter os mesmos nomes.

    Ex: const calculos = require('./calcs')

    Abaixo da constante calcs, nela está escrito apenas um teste, com a sintaxe bem intuitiva. 
    Primeiro há uma breve descrição('soma 1 e 2 para dar 3') e depois o resultado 
    que ele espera receber a partir de certo teste(expect(calcs(1, 2)).toEqual(3)).
*/

const calcs = require('./calcs')

test('soma 1 e 2 para dar 3', () => {
    expect(calcs(1, 2)).toEqual(3)
})


    /*
        Após escrever os teste, abra o terminal, navegue até a pasta e rode o comando npm test.
    */

    /*
        Sintaxe: A função test espera três argumentos:
        1º Nome do teste:
        Ex: 'soma 1 e 2 para dar 3'.
        O nome identifica o teste que está sendo feito e é o texto que aparece quando o teste for executado no terminal.
    
        2º Função contendo suas expectations:
        Ex:
            () => {
            expect(calcs(1, 2)).toEqual(3)
            };
    
        3º Timeout (opcional), indica quanto tempo o JEST deve esperar que o teste execute antes de abortá-lo.
    
            test('sums two values', () => {
                expect(sum(2, 3)).toEqual(5);
            });
    */

/*
        O JEST procura arquivos com as extensões .js, .jsx, .ts e .tsx dentro de uma pasta com o nome __tests__, ou arquivos com o sufixo .test ou .spec.
*/