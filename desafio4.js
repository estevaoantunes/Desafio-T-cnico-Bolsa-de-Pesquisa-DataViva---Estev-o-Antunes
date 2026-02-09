// Desafio Validação de Parênteses

//Criei uma função para verificar se é valido a forma como (), [] e {} estão corretas ou não.
function validadorParenteses(string) {

    //Criei um array vazio
    let pilha = [];

    //Criei um objeto que mostra os pares de abertura e fechamento.
    let pares = {
        ')': '(',
        '}': '{',
        ']': '['        
    };

    //Laço de repetição que vai percorrer o array de cada caracetere da string.

    for (let char of string) {

        // Condição para verificar se o caractere atual é de abetura
        if (char === '(' || char === '{' || char === '[') {
            //Caso seja é adicionado na pilha, atualmente vaiza.
            pilha.push(char);
        } 
        // Condição caso seja fechamento.
        else {

            //Ele tira o úlimo elemento e verifica se ele correspondeo ao mesmo da abertura.
            if (pilha.pop() !== pares[char]) {

                //Caso atenda a esta condição, onde não é o mesmo elemento que correspondeo ao seu par de abertura, ele retorna um false.
                return false;
            }
        }
    }

    // Caso a pilha esteja totalmente vazia, significa que todos os parênteses foram fechados corretamente.
    return pilha.length === 0;
}

    //Aqui se exibe no terminal todos os resultados com alguns testes.
console.log(validadorParenteses("{[()]}")); 
console.log(validadorParenteses("{[(])}"));
console.log(validadorParenteses("{{[[(]]}}"));