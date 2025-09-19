function sum(...numbers){
    console.log(numbers.reduce((acc,value,index,arr)=>{
        console.log(`Accumulator: ${acc}, value: ${value}, index of value: ${index}, array length: ${arr.length}`);
        return acc+value;
    },0));

}

sum(2,4,5,4,2,5,32,3,2)