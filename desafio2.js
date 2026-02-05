//Desafio Verificador de Palíndromo

//Criei uma função que recebe como parâmetro uma palavra como string, que é declarada a partir da chamada da função logo abaixo.

function verificadorPalindromo(palavra) {
  //Criei outra variável que serve pra inverter a palavra recebida.

  //Usei o método split() pra poder retornar um array de cada letra.
  //Usei o método reverse() pra inverter a ordem do array.
  //E por final, utilizeo o método join() pra unir os elementos do array para uma string.
  let palavraInvertida = palavra.split("").reverse().join("");

  //Condicional pra comparar o valor e o tipo entre a palavra e a palavraInvertida.
  if (palavra === palavraInvertida) {
    //Se for uma palavra palíndromo, retorna true.
    return true;
  }
  //Se for uma palavra que nao seja palíndromo, retorna false.
  else {
    return false;
  }
}

//Chamei a função pra testar algumas palavras que achei interesante colocar como parâmetro para exibir os seus resultados.

console.log(verificadorPalindromo("ovo"));
console.log(verificadorPalindromo("arara"));
console.log(verificadorPalindromo("casa"));
console.log(verificadorPalindromo("estevao"));
console.log(verificadorPalindromo("dataviva"));
console.log(verificadorPalindromo("palíndromo"));
console.log(verificadorPalindromo("uva"));
console.log(verificadorPalindromo("renner"));
console.log(verificadorPalindromo("rir"));
