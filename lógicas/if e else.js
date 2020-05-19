//Usar if e else para controle de fluxo dentro de código
// if (Tipo Sempre Booleano) { }

// if (Tipo Sempre Booleano) {
// } else {
//     else pode ser usado como um fluxo de negação ao if
// }

if (true) {
  console.log("Sempre passa aqui devido ser sempre true. ;)")
} else {
  console.log("Nunca passa aqui devido ser sempre true. T_T")
}

const isCoisa = true;

//Como isCoisa é um booleano, ele pode ser passado como parametro do if
if (isCoisa) {
  console.log("Sempre passa aqui devido ser sempre true. ;)")
} else {
  console.log("Nunca passa aqui devido ser sempre true. T_T")
}


function coisa(parametro) {
  const isCoisa = true;

  if (isCoisa && parametro === "ai que parametro") {
    console.log("Só entra aqui se o parametro for igual a 'ai que parametro'")
  } else {
    console.log("Só entra aqui se o parametro for diferente a 'ai que parametro'")
  }
}

function fazCoisa(fazCoisa1) {
  if (fazCoisa1 === undefined) {
    //Cai aqui caso o parametro fazCoisa1 não tenha sido passado
    // Devido o return, encerra a execução da função
    return;
  }

  if (typeof fazCoisa1 == "object") {
    // Passa aqui apenas se o parametro fazCoisa1 é um object
  } else if (fazCoisa1) {
    // Passa aqui caso o parametro seja um booleano true
  } else {
    // Passa aqui apenas se nenhuma das condições anteriores forem atendidas.
  }
}

fazCoisa(true)