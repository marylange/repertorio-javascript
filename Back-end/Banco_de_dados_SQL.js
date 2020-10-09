/*
                            **** Entender o que são bancos de dados;
    O que são dados: Fatos, percepções ou observações sobre alguma coisa, como altura, idade, peso.

    O SGBD(Sistema de Gerenciamento de Banco de Dados) são ferramentas que possibilitam gerenciar os dados ou seja,
    é um conjunto de software responsável pelo gerenciamento de um banco de dados.


                                Principais tipo de banco de dados

            * Relacionais - Tabelas pré-definidas, sem alterações dinâmicas da estrutura, previsível,
            relacionamento entre tabelas e linguagem utilizada é o SQL;

            * Não Relacionais ou NoSQL - Estrutura pré-definidas não é obrigatório,
            Dados podem ser inseridos dinamicamente, não possui linguagem oficial.


                        **** Compreender como as tabelas se encaixam no conceito de banco de dados;

                Tabelas possuem linhas e colunas, as linhas representam uma instância
                daquilo que se deseja representar, ao passo que colunas descrevem algum aspecto da entidade
                representada.

                Ex: Uma tabela com dados sobre pessoas... Cada linha é uma pessoa específica,
                as colunas descrevem uma característica que queremos armazenar, como nome, idade, email.



                        **** Entender como a linguagem de consulta estruturada (SQL) é usada;

                                Constraints(restrições), chave primária, FOREIGN KEY, Unique

                    Restrições são regras aplicadas nas colunas de uma tabela.
                    Elas são usadas para limitar o tipo de dados que são inseridos.

                                            Principais contraints

                        NOT NULL - impõe a coluna a não aceitar valores NULL, com ela,
                        é obrigatório que o campo tenha algum valor. Desta forma,
                        não é possível inserir um regitro ou atualizar sem entrar com um valor neste campo;

                        UNIQUE - Identifica de forma única cada registro em uma tabela de um banco de dados.
                        A UNIQUE e PRIMARY KEY, garantem a unicidade em uma coluna ou conjunto de colunas.
                        A contraints PRIMARY KEY possue como padrão uma restrição UNIQUE definida.
                        Podemos ter várias UNIQUES em uma única tabela, mas só podemos ter uma única PRIMARY KEY por tabela;

                        PRIMARY KEY ou chave primária - Identifica como valor único cada registro em uma tabela de banco de dados.
                        Devem conter valores únicos, uma coluna de PRIMARY KEY não pode conter valores NULL.
                        Cada tabela deve conter somente uma chave primária;

                        FOREIGN KEY ou chave estrangeira - em uma tabela, é um campo 
                        que aponta para uma chave primária em outra tabela ou seja, está ligada a uma chave primária de outra tabela;

                        DEFAULT - é usada para inserir um valor padrão em uma coluna.
                        O valor padrão será adicionado a todos os novos registros 
                        caso nenhum valor seja especificado na inserção.




                                            Comandos mais comuns

Selecionar um banco de dados:  use nome_do_banco_de_dados_que_quer_conectar;
Visualizar tabelas: show tables;
Visualizar estrutura de uma tabela: describe nome_da_tabela;
Criar um banco de dados: create database nome_do_banco_de_dados;


Entidades de banco de dados - Normalmente representa uma tabela que representa algum 
conceito do mundo real que vc quer descrever(pessoas, eventos, acontecimentos) 
e suas propriedades(altura, horário do evento, nome do acontecimento).

Ex: A entidade pessoa pode ter a propriedade altura, peso e idade.



                              Como os dados são ligados?

        Existe quatro tipos de relacionamento em um banco de dados


        * Um para Um(1:1) - Uma linha da Tabela A só deve possuir uma linha correspondente na tabela B ou vice-versa.

        Ex: um empregado só pode estar relacionado a um pagamento
        Ex: Uma mãe pode ter vários filho - posso enxergar esse relacionamento 1:N e os filhos carregaram a FK da mãe.

        * Um para Muitos(1:N) ou Muitos para Um(N:1) - Tipos mais comuns de relacionamento.
        Uma linha na tabela A pode ter vários correspondentes na tabela B,
        mas uma linha da tabela B só pode ter uma linha correspondente na tabela A.

        Ex: Uma categoria pode estar ligada a vários livros; porém um livro deve possuir apenas uma categoria.

        * Muitos para Muitos(N:M) - acontece quando uma linha na tabela A pode possuir 
        muitas linhas correspondentes na tabela B e vice-versa.

        Ex: demostrar que um filme pode contar com vários atores, e também que os atores podem 
        atuar em vários filmes, surge a necessidade de um relacionamento muitos para muitos
*/