/*
    Como instalar o JEST

    Passo 1: Criar uma pasta onde irão ficar os arquivos de teste;
    Passo 2: Criar um arquivo chamado package.json, e logo após escrever o seguinte conteúdo:
*/

{
    "scripts": {
        "test": "jest"
    }
}

/*
    Passo 3: No terminal, navegar até a pasta usando o 
    comando cd e rodar o seguinte comando: npm install --save-dev jest (para isso o npm deve 
        estar instalado, e de preferência atualizado).
    Note que foram adicionadas duas coisas, a pasta node_modules e o arquivo package-lock.json.

    Com isso, o testes com JEST já pondem ser feitos.
*/