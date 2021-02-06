
/**
 * As variaveis sao declaradas apenas dentro das funcoes, e suas alteracoes tambem
 * sao vistas apenas dentro da funcao.
 */

function userInput() {
    var number1 = parseInt(document.getElementById("num1").value);
    console.log(number1);
    var number2 = parseInt(document.getElementById("num2").value);
}

function calcMajorNumber() {
    var number1;
    var number2;
    console.log(number1+ " "+number2 );
    userInput();
    console.log(number1+ " "+number2 );

    if(number1> number2){
        document.getElementById("result").textContent = `The number ${number1} is the biggest`;
    }else if(number2 > number1){
        document.getElementById("result").textContent = `The number ${number2} is the biggest`;
    }
}