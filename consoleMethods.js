console.clear();
console.log("This is a normal log on the console");
console.groupCollapsed("Level 1");
console.log("You are logging in Level 1");

console.groupCollapsed("Level 1.1");
console.log("You are logging in Level 1.1");

console.groupCollapsed("Level 1.2");
console.log("You are logging in Level 1.2");
console.groupEnd("Level 1.2");

console.log("You are back in Level 1.1");
console.groupEnd("Level 1.1");

console.log("You are back in Level 1");
console.groupEnd("Level 1");

console.log("Welcome home");


var foodItem = {
    name : "Doritos",
    flavor : "Nacho cheese",
    servingSizeInGrams : 28,
    caloriesPerServing : 150,
    totalFat : 8,
    saturatedFat : 1,
    transFat : 0,
    cholestrol : 0,
    sodium : 0.170,
    totalCarbs : 17,
    fiber : 1,
    totalSugar : 0,
    protein : 2,
    vitaminD : 0,
    calcium : 0.050,
    iron : 0.003,
    potassium : 0.100,
    22: "hi",
    $: 2000,    
    "x":99
}

//console.table(foodItem);

let userArray = ["Amanpreet", 101, "###"];
//console.table(userArray);

let anotherArray = [["User","Data"],["Age",101],["Name","Amanpreet"]];
//console.table(anotherArray);

let tempArray = [];
tempArray.push(foodItem);
tempArray.push(foodItem);
tempArray.push(foodItem);
tempArray.push(foodItem);
tempArray.push(foodItem);
tempArray.push(foodItem);

console.table(tempArray);