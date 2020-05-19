/*
Como fazer um algorítmo

O enunciado diz:

Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:

let fruits = [3, 4, 10, 1, 12];

A resolução do problema acontece em 3 etapas:

1.Interpretação;
2.Criação do algoritmo;
3.Codificação do algoritmo.
Portanto, primeiro vamos interpretar o que está sendo pedido, e esse etapa é crucial para solucionar o problema. Se interpretarmos errado, o algoritmo e consequentemente o código estará errado.

Analisando o enunciado, sabemos que:

1. devemos utilizar o array fruits;
2. o termo “percorra” indica uma estrutura de repetição, ou loop;
3. “somando todos os valores” mostra que devemos ter uma variável que guarda o valor da soma dos valores;
4. o termo “caso” indica uma estrutura condicional, ou if;
5. “imprima o valor final” indica um console.log;

Pode parecer um pouco bobo, mas em enunciados complexos, analisar friamente o enunciado nos afasta de cometermos erros e termos que escrever todo os passos seguintes novamente.

Agora vamos criar o algoritmo, e pra isso faremos uso dos baby steps. Eles nos estimulam a dividir grandes e complexos problemas em pequenos e simples.

1. Adicionar o array;

//exercise.js
let fruits = [3, 4, 10, 1, 12];

2. Criar uma variável com valor 0;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

3. Criar um loop que percorre o array;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i+= 1) {

}

4. Incrementar a variável com o valor correspondente a cada loop;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i+= 1) {
  sum += fruits[i];
}

5. Criar um if com a condição da váriavel ser maior que 15;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i+= 1) {
  sum += fruits[i];
}

if (sum > 15) {
    
} else {
    
}

6. Caso a varíavel obedeça a condição;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i+= 1) {
  sum += fruits[i];
}

if (sum > 15) {
    
} else {
    
}

6.1 Imprimir a varíavel

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i+= 1) {
  sum += fruits[i];
}

if(sum > 15) {
  console.log(sum);
} else {

}

7. Caso não obedeça a condição;
7.1 Imprimir a mensagem “valor menor que 16”;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i+= 1) {
  sum += fruits[i];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}

*/
