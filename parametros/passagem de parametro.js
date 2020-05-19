// validar parametro passado ou não
function coisa(parametro1, parametro2) {
  if (parametro1 == undefined) {
    //Só cai aqui se o parametro1 não foi passado.
  }

  if (parametro2 == undefined) {
    //Só cai aqui se o parametro2 não foi passado.
  }
}

//com a não passagem de parametros, parametro1 e parametro2 são undefined
coisa();

//com a não passagem do segundo parametro, apenas o parametro2 será undefined.
coisa("coisa 1")

//Nomes de variáveis passadas como parametros de funções não precisam ter o mesmo nome

const mary = "mary";
const cleiton = "clerton"

coisa(mary, cleiton)


const lista = ["Clerton", "Mary", "Cacau"];

function verifica(elemento) {
  return elemento == "Josefina";
}

lista.filter(verifica);