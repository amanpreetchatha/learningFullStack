export function range(startNum, endNum, step = 1) {
    let allNumbers = [];
    if(startNum<endNum && step > 0)
    {
        while(startNum<=endNum){
            allNumbers.push(startNum);
            
            startNum+=step;
        }
    }else if(startNum>endNum && step < 0){
        while(startNum>=endNum){
            allNumbers.push(startNum);
            
            startNum += step;
        }
    }
    return allNumbers;
}
function sum(array){
    let sum = 0;
    array.forEach((i)=>sum+=i);
    return sum;
}
// console.log(sum(range(15,100,6)));
// console.log(sum(range(100,12,-5)));
// console.log(sum(range(200,64,-9)))
// console.log((range(5,2,-1)));
