/*
Método fs.readFileSync: método sincrono que é responsável por ler arquivos
e trazer seu conteúdo para dentro do Node.JS

O método readFileSync recebe dois parâmetros:
  # O nome do arquivo;
  # Um parâmetro opcional que, quando é uma string,
  define o encoding que será utilizado durante a leitura do arquivo.

  Ex: const data = fs.readFileSync('meu-arquivo.txt', 'utf8');



* Realizar operações assíncronas utilizando callbacks;

Método fs.readFile: esse método também é responsável por ler o arquivo e trazer
seu conteúdo para dentro do NodeJS. Ele recebe três parâmetros
  # O nome do arquivo;

  # Um parâmetro opcional que, quando é uma string, define o
  encoding que será utilizado durante a leitura do arquivo;

  # Uma callback que permite receber e manipular os dados lidos do arquivo
    - A callback é uma função que recebe dois parâmetros: data e err. Caso aconteça um erro
      durante a leitura, o parametro erro virá preenchido. Se o parametro vier
      vazio, significa que o conteúdo foi lido sem problemas e neste caso, data virá preenchido.

      caso nenhum erro tenha ocorrido, esse parâmetro err retorna undefined.

    OBS: É importante especificar o encoding (utf8), caso contrário o encoding 
    padrão será estabelecido. O arquivo será lido como raw buffer,
    que é um formato muito útil quando estamos enviando dados através de requisições HTTP.


    É importante lembrar que esses dados ficam armazenados em memória. 
    Ou seja, caso você tenha um arquivo de 1GB de texto, você trará 1GB de 
    dados para a memória RAM.


* Realizar operações assíncronas utilizando Promises;

  Para resolver o problema de callback hell e facilitar a 
  manutenção do código, utilizamos as promises.

  Promises no JavaScript funcionam do mesmo jeito: uma promessa é criada, e dentro
  dela existe código a ser executado. Se o código é executado sem nenhum problema,
  a Promise é resolvida através da função resolve, que veremos daqui a pouco.
  Se algo dá errado durante a execução do código, a Promise é rejeitada através da função reject.

  A grande vantagem da promise é a possibidade de tratar o sucesso ou o erro,
  enquanto no callback temos somente uma função que recebe sucesso e erro.

  Sintaxe da Promise:
    sempre que precisar criar uma nova promise, devemos invocar
    o contrutor através da palavra "new". Para o contrutor, devemos passar duas
    funções de parametro: resolve e reject. E dentro da função escrevemos o código que será
    executado de forma assincrona dentro da Promise. Essa função que vai dizer se será resolvida ou rejeitada.

      Ex:
        const p = new Promise((resolve, reject) => {
          // Aqui é onde vamos realizar a lógica que precisamos
          // para resolver ou rejeitar a promise
        });
      
      Ex de código para a Promise

        const fs = require('fs');

        function readFilePromise (fileName) {
          return new Promise((resolve, reject) => {

            fs.readFile(fileName, (err, content) => {
              if (err) return reject(err);
              resolve(content);
            });

          });
        }


* Ler e escrever arquivos localmente com NodeJS;
* Escrever seus próprios scripts que criam e consomem Promises;
* Reescrever código que usa callbacks para que use Promises.







*/