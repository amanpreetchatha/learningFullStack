function deepEqual(value1, value2){
    if(value1 === value2)
        return true;
    else
    if(value1 === null || value2 === null)
        return false;
    else
    if (typeof value1 === "object" && typeof value2 === "object"){
        let keysValue1 = Object.keys(value1);   //1-d array of keys might be in different order
        let keysValue2 = Object.keys(value2);   //1-d array of keys might be in different order
        if (keysValue1.length !== keysValue2.length)
            return false
        for (const key of keysValue1) {
            if (!value2.hasOwnProperty(key) || !deepEqual(value1[key], value2[key]))         //if key is found, compare values with a recursive call, in which other if/else statement runs.
                return false;
        } 
        return true;
    }
}

let house1 = { rooms: 3, sqft: 2200, type: "detached" , owners: {name: "aman", age: 28}};
let house2 = { rooms: 5, sqft: 4500, type: "detached" };
let house3 = { type: "detached", rooms: 3, sqft: 2200 };
let house4 = { rooms: 3, sqft: 2200, type: "detached", owners: { name: "aman", age: 28 } };
console.log(deepEqual(house3,house3));
// console.log(deepEqual([44,"3"],["3",44]))    //output- false, need to write a different setup for arrays only

