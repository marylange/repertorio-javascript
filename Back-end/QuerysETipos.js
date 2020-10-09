/*

Inquirir, ou query, em inglês, é o nome dado aos comandos
que você digita dentro de uma janela ou linha de comando com a 
intenção de interagir de alguma maneira com uma base de dados.

DDL: Data Definition Language - todos os comandos que lidam com o esquema,
a descrição e como os dados devem existir em um banco de dados:

CREATE - Para criação de bancos de dados, tabelas, índices, views, procedures, functions e triggers
ALTER - Para alteração da estrutura de qualquer objeto
DROP - Permite deletar objetos
TRUNCATE - Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados


DML: Data Manipulation Language - os comandos que são usados para manipular dados. 
São utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados. 
Os comando e usos mais comuns nesta categoria são:

SELECT: Usado para buscar dados em um banco de dados
INSERT: Insere dados em uma tabela
UPDATE: Altera dados dentro de uma tabela
DELETE: Exclui dados de uma tabela


DCL: Data Control Language - Focado mais nos comandos que concedem direitos, 
permissões e outros tipos de controle ao sistema de banco de dados.

GRANT - Concede acesso a um usuário
REVOKE - Remove acessos concedidos através do comando GRANT


TCL: Transactional Control Language - Lida com as transações dentro de suas pesquisas.

COMMIT - Muda suas alterações de temporárias para permanentes no seu banco de dados
ROLLBACK - Desfaz todo o impacto realizado por um comando
SAVEPOINT - Define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query
TRANSACTION - Comandos que definem onde, como e em que escopo suas transações são executadas



**** Query SELECT é usado para gerar valor

**** O AS é usado para dar nome às suas colunas

**** Caso o nome tenha mais de uma palavra, devemos usar ASPAS SIMPLES para nomear as colunas.

**** Palavras-chaves ficam em maiúsculo para facilitar a leitura da query.

Ex: SELECT, CREATE, DELETE, AS;

**** As querys são finalizadas com ponto e vírgula;

*/