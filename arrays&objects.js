let myObject = {
    firstName: "Aman",
    lastName: "Chatha",
    age: 101
}
//let array=Object.entries(myObject);

let array = [2022, "volvo", 22.43, "jjajf", 322];
//let array1 = new Array(2022, "volvo", myObject);
let array1 = [323,324,325,"326"];

console.clear();
//console.log(array1.at(-10));
/*
array.push("HI");
array.unshift("Truck");
console.log(array);
array.pop();
array.shift();
console.log(array);


//array.splice(-5,5, 2025, 2026, myObject);
array.splice(0,2);
console.log(array);


/*
for( let [key,value] of array){
    console.log(key,value)
}
*/
//const [year, make, nextvalue] = array;
//console.log(nextvalue);

//let mergedArray=[...array,array1];
//let mergedArray=[...array1,...array];

let objectArray={...array}
//console.log(array.__proto__);


//let myArr = ["b","a","s","c"];

//console.log(myArr.slice(1,));
//let myArr2= myArr.slice(2,3);
//console.log("array1:",myArr);

//console.log(objectArray);

/*
Shallow Copy example:

let shallowCopy=objectArray;
console.log("Shallow Copy:",shallowCopy);
shallowCopy[0]=2023;
shallowCopy[1]="frightliner";
shallowCopy[2]=43.22;

console.log("\n");
console.log("Original Copy:",objectArray);
objectArray[0]="1999";
console.log("Shallow Copy:",shallowCopy);
*/


/* 
Deep Copy example:

let deepCopy=structuredClone(objectArray);
console.log("deep Copy:",deepCopy);
deepCopy[0]=2023;
deepCopy[1]="frightliner";
deepCopy[2]=43.22;

console.log("\n");
console.log("Original Copy:",objectArray);
console.log("\n");
objectArray[0]="1999";
console.log("Deep Copy:",deepCopy);
*/
//console.error("You made an error");


