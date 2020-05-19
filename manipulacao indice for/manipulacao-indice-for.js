let list = [1, 5, 7, 23, 56, 65];
let result = [];

for (var x = 0; x < list.length; x++) {
    let valorAtual = list[x];
    let proximoValor = list[x + 1];
    
    if (proximoValor !== undefined) {
        result.push(valorAtual * proximoValor);
    }
}

console.log(result);

//[ 5, 35, 161, 1288, 3640 ]