//Manipulação de Dados (Bônus)

//Criei uma função pra somar os valores, recebendo transacoes como parâmetro a partir de um objeto.
function somarValores(transacoes) {
  //Criei um objeto vazio onde vai conter os resultados das transações.
  let resultado = {};

  //Repetição pra percorrer cada item do objeto.
  for (let item of transacoes) {
    //Condicional para verificar se a categoria existe ou não no objeto.
    if (!resultado[item.categoria]) {
      //Se não houver, ele vai criar a categoria e inicializar com 0, como se tivesse nada. Isso serve para caso tenha outros objetos com outras categorias.
      resultado[item.categoria] = 0;
    }

    //Aqui ele vai somando e guardando o valor do objeto existente para o objeto resultado.
    resultado[item.categoria] += item.valor;
  }

  //Retorna um objeto novo, que é objeto resultado com os valores somados de outro objeto.
  return resultado;
}

//Objeto transações como estava no desafio.
const transacoes = [
  { categoria: "Alimentação", valor: 10 },
  { categoria: "Transporte", valor: 5 },
  { categoria: "Alimentação", valor: 20 },
  { categoria: "Lazer", valor: 50 },
];

const transacoesMesJaneiro = [
  { categoria: "Alimentação", valor: 20 },
  { categoria: "Transporte", valor: 10 },
  { categoria: "Alimentação", valor: 12 },
  { categoria: "Lazer", valor: 35 },
];

const transacoesMesFevereiro = [
  { categoria: "Roupas", valor: 14 },
  { categoria: "Transporte", valor: 30 },
  { categoria: "Roupas", valor: 35 },
  { categoria: "Remedios", valor: 18 },
];

const transacoesMesMarco = [
  { categoria: "Remedio", valor: 18 },
  { categoria: "Remedio", valor: 10 },
  { categoria: "Hospedagem", valor: 20 },
  { categoria: "Remedios", valor: 12 },
];
//Testei a função usando alguns objetos como parâmetro.
console.log(somarValores(transacoes));
console.log(somarValores(transacoesMesJaneiro));
console.log(somarValores(transacoesMesFevereiro));
console.log(somarValores(transacoesMesMarco));
