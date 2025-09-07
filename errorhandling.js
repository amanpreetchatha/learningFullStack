//different error handling techniques in javascript
console.clear();
console.time("exeTime");

function checkIfValid(number){
    if(typeof(number) != "number")
    {
        //throw TypeError(number, "is not a number");
        //console.trace();
        console.log("You did not enter a valid response:",number);
        console.timeLog("exeTime");
    }else{
        console.info("You entered a valid response:",number);
        console.timeLog("exeTime");
    }

}


checkIfValid("\\");

let tempObject = {
    key: "value1",
    key1: null,
    key2: undefined,
    key3: 234
};

console.timeLog("exeTime");

/*
console.count("mycounter");
console.count("mycounter");
console.count("mycounter");
console.count("mycounter");
console.countReset("mycounter");
console.count("mycounter");
*/



console.timeEnd("exeTime");