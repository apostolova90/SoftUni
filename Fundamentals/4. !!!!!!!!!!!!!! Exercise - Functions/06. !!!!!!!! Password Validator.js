
85/100...............


function passwordValidator(input){

    let counter = 0;
    let numberCounter = 0;
    let numbersAndDigits = 0;


    for (let i = 0; i < input.length; i++){
        let string = input[i];
        counter++

        if (/\d/.test(string)){
            numberCounter++
          }
        }



        if (counter < 6){
            console.log("Password must be between 6 and 10 characters")
        }

        if (!onlyLettersAndDigits(input)){
            console.log("Password must consist only of letters and digits")
          }
          
        if (numberCounter < 2){
            console.log("Password must have at least 2 digits")
        }


        if ((counter >= 6) && (numberCounter >= 2) && (isOnlyLettersAndD = 1)){
            console.log("Password is valid")
        }



        function onlyLettersAndDigits(pass){
        return /^[A-Za-z0-9]*$/.test(pass);     
        }   
    
}
passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')


/* друго подобно решение


function sumOfTwoNumbers(firstNumber, secondNumber){

    let sum = firstNumber + secondNumber;
    return sum;

} */


/* function passwordValidator(input){

    let counter = 0;
    let numberCounter = 0;
    let numbersAndDigits = 0;


    for (let i = 0; i < input.length; i++){
        let string = input[i];
        counter++

        if (/\d/.test(string)){
            numberCounter++
          }
        }



        if (counter < 6){
            console.log("Password must be between 6 and 10 characters")
        }

        if (/^[A-Za-z0-9]*$/.test(input)){
            numbersAndDigits++
          } else {
            console.log("Password must consist only of letters and digits")
          }
          
        if (numberCounter < 2){
            console.log("Password must have at least 2 digits")
        }


        if ((counter >= 6) && (numberCounter >= 2) && (isOnlyLettersAndD = 1)){
            console.log("Password is valid")
        }

        }
        

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')
 */