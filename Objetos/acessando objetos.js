// Como manipular objetos
const usuarioDeDrogas = {
  nome: "José",
  sobrenome: "Barbosa",
  drogaFavorita: "Baseado em fatos reais",
  idade: 33,
  aindaEViciado: true,
  quantidadeDeDrogas: 23.67
}

// Acessar propriedades de objetos
console.log(usuarioDeDrogas.sobrenome); // Barbosa
console.log(usuarioDeDrogas[drogaFavorita]); // Baseado em fatos reais

// Pode também usar desestruturação de objetos
// Usando essa sintaze especial, desmanchamos os objeto, extraindo apenas as propriedades com os nomes definidos
// Nesse caso, criamos 3 variáveis com os conteudos de sobrenome, drogaFavorita e idade do objeto usuarioDeDrogas
const { sobrenome, drogaFavorita, idade } = usuarioDeDrogas
console.log(sobrenome); // Barbosa
console.log(drogaFavorita); // Baseado em fatos reais
console.log(idade); // 33

// Adicionando novas propriedades em objetos
usuarioDeDrogas.novaPropriedade = "Novo Valor =D";
usuarioDeDrogas[novaPropriedade] = "Novo Valor =D";




//FUNÇÕES UTILITÁRIAS PARA OBJETOS

Object.keys(usuarioDeDrogas) // ['nome', 'sobrenome', 'drogaFavorita', 'idade', 'aindaEViciado', 'quantidadeDeDrogas']
Object.values(usuarioDeDrogas) // ['José', 'Barbosa', 'Baseado em fatos reais', 33, true, 23.67]
Object.entries(usuarioDeDrogas) // [['nome', 'José'], ['sobrenome', 'Barbosa'], ['drogaFavorita', 'Baseado em fatos reais'], ['idade', 33], ['aindaEViciado', true], ['quantidadeDeDrogas', 23.67]]

const novoObjeto = {
  encontreiJesus = true,
  naoAsDrogas = false
}

Object.assign(usuarioDeDrogas, novoObjeto) //Combina dois objetos em um só (mergear)
/*
{
  nome: "José",
  sobrenome: "Barbosa",
  drogaFavorita: "Baseado em fatos reais",
  idade: 33,
  aindaEViciado: true,
  quantidadeDeDrogas: 23.67,
  encontreiJesus = true,
  naoAsDrogas = false
}
 */