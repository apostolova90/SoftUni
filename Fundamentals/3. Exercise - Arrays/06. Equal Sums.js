function equalSum(array){
 
    let foundIndex = "no";
    let inputL = array.length;
 
    for (let i = 0; i < inputL; i++) { // цикъл грижещ се за преминаване през целия цикъл
        
        let leftSum = 0;
        let rightSum = 0;
 
        for(let l = 0; l < i; l++){
            leftSum += array[l];
 
        }
        for (let r = i + 1; r < inputL; r++){
            rightSum += array[r];
        }
 
        if (leftSum === rightSum) {
            foundIndex = i;
        }
        
    }
 
    console.log(foundIndex);
}
equalSum([1, 2, 3, 3])
equalSum([1, 2])
equalSum([1])
equalSum([1, 2, 3])
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])