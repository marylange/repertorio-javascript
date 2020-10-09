/*
    **** 1 - Filtrar resultados de consultas com o WHERE;
    Filtra dados bem específicos.

    WHERE - significa onde;

    Sintaxe:

    SELECT * FROM tabela
    WHERE condicao

    Ex: 
    SELECT * FROM sakila.actor
    WHERE last_name = 'DAVIS';


    **** 2 - Utilizar operadores booleanos e relacionais em consultas;

    Operadores lógicos

    =  igual
    >  maior que
    <  menor que
    >= maior que ou igual
    <= Menos que ou igual
    <> Diferente de
    AND operador lógico "E" `AND tem preferência(é avaliado primeiro) sobre o operador OR`
    OR  operador lógico "OU"
    IS  Compara valores booleanos (TRUE = 1, FALSE = 0, NULL)
    NOT Nega o operador na pesquisa

Ex: Precisamos fazer uma query que verifica filmes com tempo de duração maior que 50min

SELECT * FROM sakila.film
WHERE length > 50
ORDER BY length; 

OBS: ORDER BY - ordena por default menor para o maior


Ex: Precisamos fazer uma query que busca todos os filmes menos o filme ALIEN CENTER

SELECT * FROM sakila.film
WHERE title <> 'ALIEN CENTER'

< > - diferente


Operadores OR e AND 

    Nesta query, como o operador AND é executado primeiro que o OR,
    o resultado será dos registros buscados em amount = 2.99 e staff_id = 2 e depois em amount = 0.99,
    independente do staff_id.
Ex: 
SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

Parênteses

    Neste exemplo de query, a expressão dentro do parentese é avaliada e 
    os resultados que satisfazem esta condição -> amount = 0.99 OR amount = 2.99 são retornados,
    na seguência ao lado direito de AND, staff_id = 2 é avaliado é os resultados retornados.
    O AND então compara o resultado de ambos os lados e faz com que somente os resultados que 
    satisfazem ambas as condições sejam retornados.

Ex:
SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;


    **** 3 - Criar consultas mais dinâmicas e maleáveis com LIKE;

O LIKE é usado para buscar uma sequencia específica de caracteres.

Ex: Preciso buscar por filmes que terminam com 'don' no nome

SELECT * FROM sakila.film
WHERE title LIKE '%don';

O resultado são todos os filmes que possuem don no final.


                Para fazer essas verificações são usados dois modificadores

% - O sinal de percentual, que pode representar zero, um ou múltiplos caracteres
_ - O underscore (às vezes chamado de underline, no Brasil), que representa um único caractere


Ex: 

-- Encontra qualquer resultado finalizando com "don";
SELECT * FROM sakila.film
WHERE title LIKE '%don';

-- Encontra qualquer resultado iniciando com "plu";
SELECT * FROM sakila.film
WHERE title LIKE 'plu%';

-- Encontra qualquer resultado que contém "plu"
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';

-- Encontra qualquer resultado em que o segundo caractere da frase é "C"
SELECT * FROM sakila.film
WHERE title LIKE '_C%';

-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT * FROM sakila.film
WHERE title LIKE '________';

-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
SELECT * FROM sakila.film
WHERE title LIKE '%E__';


    **** 4 - Fazer consultas que englobam uma faixa de resultados com IN e BETWEEN;

                                    Operador IN

        Sintaxe:

        SELECT * FROM banco_de_dados
        WHERE coluna IN (valor1, valor2, valor3, valor4, ..., valorN);

        -- ou também

        SELECT * FROM banco_de_dados
        WHERE coluna IN (expressão);    

    Posso substituir uma pesquisa com vários operadores OR e AND por IN      

    Ex: 
    SELECT * FROM sakila.actor
    WHERE first_name = 'PENELOPE'
    OR first_name = 'NICK'
    OR first_name = 'ED'
    OR first_name = 'JENNIFER';

    por

    SELECT * FROM sakila.actor
    WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

    Também posso fazer o mesmo processo com números.
    Ex:

    SELECT * FROM sakila.customer
    WHERE customer_id in (1, 2, 3, 4, 5);


    Operador BETWEEN

    Podemos fazer pesquisas dentro de uma faixa inicial e final.

    Ex:

    -- Note que o MySQL inclui o valor inicial e o final nos resultados

    SELECT title, length FROM sakila.film
    WHERE length BETWEEN 50 AND 120;


    **** 5 - Encontrar e separar resultados que incluem datas;

    O banco de dados armazena os valores de data no formato (ano/mês/dia).
    Temos dois tipos de dados temporal, o DATE e o DATETIME

    DATE - Possui apenas data, no formato YYYY-MM-DD na faixa de 1001-01-01 até 9999-12-31;

    DATETIME - Possui data e tempo, no formato YYYY-MM-DD HH:MM:SS com a 
    faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59.


    Ex: Como encontrar pagamentos realizados na data 2005-07-31 na tabela sakila.payment

    -- Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos
    SELECT * FROM sakila.payment
    WHERE DATE(payment_date) = '2005-07-31';
*/