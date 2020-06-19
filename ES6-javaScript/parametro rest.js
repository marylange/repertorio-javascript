/*
    A sintaxe de rest parameter( parâmetro rest), nos permite 
    representar um número indefinido de argumentos como um array.

    O Parâmetro é a variável definida na declaração da função.  Ex: function(parametro) {}

    Sintaxe: 
        function(a, b, ...theArgs) {
            código que será executado
        }
    
    Se o último argumento nomeado de uma função tiver prefixo com  ..., ele irá se tornar um array 
    em que os elemento de 0 (inclusive) até theArgs.length (exclusivo) são disponibilizados 
    pelos argumentos atuais passados à função.

    No exemplo acima, theArgs irá coletar o terceiro argumento 
    da função (porquê o primeiro é mapeado para a, e o segundo para b) e assim 
    por diante em todos os argumentos consecutivos.

    rest parameters são instâncias Array,  isso significa que métodos 
    como sort, map, forEach ou pop podem ser aplicados diretamente;
    
*/

// Ex:

const fun1 = (...theArgs) => {
    console.log(theArgs.length);
}

fun1();  // 0
fun1(5); // 1
fun1(5, 6, 7); // 3