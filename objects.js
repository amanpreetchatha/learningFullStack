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

/*
console.log(foodItem["potassium"]);
console.log(foodItem.potassium);
console.log(foodItem.$);

console.log(console)
*/

//const { ...allother} = foodItem;

//console.log(name, flavor, protein, itemCalories);
//console.log(allother);
//Object.seal(allother);
//allother.calciuum = 1;

//console.log(allother.calciuum);

//Object.defineProperty(foodItem, "company", {value: "Pepsi Co.", writable: true});
//console.log(foodItem);
//console.log(foodItem.company);
//foodItem.company = "Frito Lays";
//console.log(foodItem["company"]);

let mealType = {
    breakFast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    snack: "Snack",
    22: "hello world"
}

let mergedObject = {...foodItem,...mealType};
console.log(mergedObject);
