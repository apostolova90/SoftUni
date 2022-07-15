function nonDecreasingSubset(arr){

    let maxNum = Number.MIN_SAFE_INTEGER;
    let newArr = []
    for (let number of arr) { // вземаме всеки стринг от масив

        if (number >= maxNum) {
            maxNum = number;
            newArr.push(number);
        }
    }

console.log(newArr.join(" "));
    
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);