//Desafio FizzBuzz

//Criei uma variável cont recebendo valor 0;
let cont = 0;

//Criei uma função chamado contador que recebe como parâmetro a variável contl.

function contador(cont)
{   
    //Laço de repetição do tipo for de 1 a 100, com o cont incrementando a cada laço.
    for(cont = 0; cont <= 100; cont++)
    {   
        //Condicionais para reconhecer números múltiplos de 3 e 5 ou com os mesmos múltiplos.

        //Condicional para verificar se é múltiplo de 3 e 5 ao mesmo tempo.
        if(cont % 3 === 0 && cont % 5 === 0)
        {   
            //Exibição da mensagem "FizzBuzz" caso seja atendida a condição.
            console.log("FizzBuzz");
        }

        //Condicional para verificar se é múltiplo de 3.
        else if(cont % 3 === 0)
        {   
            //Exibição da mensagem "Fizz" caso seja atendido a condição.
            console.log("Fizz");
        }

            //Condicional para verificar se é múltiplo de 5.
        else if(cont % 5 === 0)
        {   
            //Exibição da mensagem "Buzz" caso seja atendido a condição.
            console.log("Buzz")
        }   

            //Condição caso nenhum outro número atenda as condições anteriores.
        else{
            
            //Exibição do valor da variável incrementada.
            console.log(cont);
        }
    }
}

//Chamada da função contador com a variável cont, no momento inicial com valor 0.
contador(cont);