import { range } from "./4.1-array1.js";
function reverseArray(inputArray){
    let newArray = [];
    for(let i = inputArray.length-1;i>=0;i--){
        newArray.push(inputArray[i]);
    }
    return newArray;
}
function reverseArrayInPlace(inputArray){
    let len = Math.floor(inputArray.length/2);
    for(let i = 0;i<len;i++){
        let last = inputArray[inputArray.length-i-1];
        let first = inputArray[i];
        inputArray[i]=last;
        inputArray[inputArray.length-i-1] = first;
        

    }
    return inputArray;
}
let myArray = range(1,100);

// console.log(reverseArray(myArray));
console.log(myArray);
console.log(reverseArrayInPlace(myArray));
console.log(myArray);