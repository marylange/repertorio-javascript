/*
    Com o object destructuring, podemos extrair valores 
    de um objeto de uma forma mais fácil, além de escrevermos menos código;
*/

// Ex da forma antiga de acessar valor do objeto:

const aluno = {
    nome: "Matheus",
    idade: "23",
    email: "matheushcastiglioni@gmail.com"
};

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.email);


// Ex ultilizando o object destructuring:

const aluno = {
    nome: "Matheus",
    idade: "23",
    email: "matheushcastiglioni@gmail.com"
};

const { nome, idade, email } = aluno;
console.log(nome);
console.log(idade);
console.log(email);

/*
    Veja que em apenas uma linha conseguimos pegar o valor 
    de todos os atributos de nosso objeto e criar uma variável para eles.

    Avaliando um pouco melhor o object destructuring:

        Primeiramente vamos reparar na estrutura de nosso objeto, podemos notar 
        que dentro dele existem três informações, sendo elas: Nome, Idade e Email, respectivamente 
        os mesmos nomes de nossas variáveis informadas dentro das chaves no 
        lado esquerdo. Então, basicamente, a desestruturação de objeto segue a seguinte sintaxe:

        [{Variáveis}] = [Objeto em JSON];
*/

/*
    Para alterar os nomes das variáveis passadas na desestruturação, informamos qual campo desejamos 
    extrair a informação de nosso JSON, e passamos para uma nova variável com o nome logo 
    após os dois pontos, seguindo a seguinte sintaxe:

    [{Campo_do_objeto:Nome_para_variavel}] = [Objeto];
*/

// Ex: sem desestruturação
const json = {
    a: "Matheus",
    b: "23",
    c: "matheushcastiglioni@gmail.com"
};

const nome = json.a;
const idade = json.b;
const email = json.c;
console.log(nome);
console.log(idade);
console.log(email);

// com desestruturação

const { a: nome, b: idade, c: email } = json;
console.log(nome);
console.log(idade);
console.log(email);

/*
    Agumas desvantagens:    
        aumenta a complexidade do código caso não tenha costume;

        Atribuimos valores desejados em variáveis, quando uma deixar de 
        ser usada, será necessário apaga-lá manualmente;

        Quando passamos um atributo que não existe, o retorno é undefined.
*/

/*
    Desestruturação em funções

    Ex: Para imprimir as informações de um aluno
*/

// Ex sem desestruturação

const imprimeDadosDoAluno = (aluno) => {
    console.log(aluno.nome);
    console.log(aluno.idade);
    console.log(aluno.email);
}
imprimeDadosDoAluno(aluno);

// Ex com desestruturação

const imprimeDadosDoAluno = ({ nome, idade, email }) => {
    console.log(nome);
    console.log(idade);
    console.log(email);
}
imprimeDadosDoAluno(aluno)