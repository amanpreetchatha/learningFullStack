function arrayToList(inputArray){
    let list= null;
    for(let i=inputArray.length-1; i>=0;i--){
        list = {
            value: inputArray[i],
            rest: list
        };
    }
    return listToArray(list);
}
function listToArray(list){
    let arr = [];
    arr.push(Object.keys(list).value);
    return arr;
}
console.log(arrayToList([1,2,3,4,5,6]));

