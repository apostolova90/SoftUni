function calculator(num, oper, num2){

    let firstNumber = num;
    let operator =  oper;
    let secondNumber = num2;
    let result = 0;

switch(operator){
    case `+`: result = firstNumber + secondNumber; break;
    case `-`: result = firstNumber - secondNumber; break;
    case `*`: result = firstNumber * secondNumber; break;
    case `/`: result = firstNumber / secondNumber; break;
}
console.log (result.toFixed(2))

}
calculator(5,'+',10)
calculator(25.5,'-',3)
