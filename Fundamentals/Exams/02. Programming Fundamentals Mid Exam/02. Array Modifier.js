/* function arrayMod(arr) {
    let str = arr.shift()
    let workArr = str.split(' ')
    let index = 0
    let command = arr[index];
    while (command !== 'end') {
 
        command = arr[index];
 
        let inputArr = command.split(' ');
        let mods = inputArr[0];
        let indexOne = inputArr[1];
        let indexTwo = inputArr[2];
 
        let temp = 0
        if (mods == 'swap') {
            temp = workArr[indexOne];
            workArr[indexOne] = workArr[indexTwo];
            workArr[indexTwo] = temp;
        } else if (mods == 'multiply') {
            temp = Number(workArr[indexOne]) * Number(workArr[indexTwo]);
            workArr[indexOne] = temp;
        } else if (mods == 'decrease') {
            for (let i = 0; i < workArr.length; i++) {
                temp = Number(workArr[i]) - 1;
                workArr[i] = temp;
            }
        }
 
        index++;
    }
    console.log(workArr.join(', '))
 
} */


................................................................