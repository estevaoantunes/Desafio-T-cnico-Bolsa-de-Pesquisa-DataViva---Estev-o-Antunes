//Desafio Encontrar Duplicados

//Função pra encontrar duplicatas que recebe como parâmetro um array de números.
function encontrarDuplicatas(listaNumeros) {

    //Variávl com um array vazia.
    let listaDuplicados = [];
    
    //For que vai percorrer toda o array da list que foi inserida anteriormente.

    for (let i = 0; i < listaNumeros.length; i++) {
      //Caso a posição da primeira vez que o número aparecer for diferente da posição atual, ele é então considerado duplicata.
        if (listaNumeros.indexOf(listaNumeros[i]) !== i)
        {   
            //Então é inserido o número rpetido no array vazio.
            listaDuplicados.push(listaNumeros[i]);
        }
    }

    //Retorna a lista dos números duplicados
    return listaDuplicados;
}

    //Mostra no terminal chamando a função com os parâmetros inseridos exibindo então os resultados.
console.log(encontrarDuplicatas([1, 2, 3, 4, 5, 4, 2, 0, 1, 7, 5]));
