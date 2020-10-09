/*
    - Utilizar SUBQUERIES
    * O que é uma subquery: É uma query aninhada, avaliada dentro de um par de parênteses. 
    A subquery não é a única maneira de encontrar resultados de tabelas relacionadas, podemos usar o JOIN,
    mas precisamos avaliar qual possui a melhor performance.
    Ex:

    * Como utilizar uma subquery: 
        usando subquery para fonte de dados no FROM

            SELECT f.title, f.rating
            FROM (
            SELECT *
            FROM sakila.film
            WHERE rating = 'R'
            ) AS f;

        Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY

            SELECT
            address,
            district,
            (
                SELECT city
                FROM sakila.city
                WHERE city.city_id = sakila.address.city_id
            ) AS city
            FROM sakila.address;
        
        Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY

            SELECT address, district
            FROM sakila.address
            WHERE city_id in (
                SELECT city_id
                FROM sakila.city
                WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
            );
        
        
    - Criar queries mais eficientes através do EXISTS

            sintaxe EXISTS

        O que o EXISTS responde: Em quais registro da tabela A existe relacionamento com a tabela B?

    - Montar blocos de código SQL reutilizáveis com STORED PROCEDURES e STORED FUNCTIONS
        A palavra stored significa armazenado.

    -- Verbo + Resultado

        ObterTotalDeVendas
        ExibirRankMaximo
        ObterClienteMaisAtivo
        CalcularNivelEngajamento
        MontarNomeCompleto

        STORED PROCEDURES ou Procedimento armazenado:
        
        Sintaxe criação do procedure:

                CREATE PROCEDURE nome_procedimento (parâmetros)
                declarações;
        
        Invocando o procedure:

                CALL nome_procedimento (parâmetro);
*/