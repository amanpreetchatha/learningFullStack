/*let fanObj = {
    manufacturer: "Living Inc.",
    type: "rotating",
    size: 200
}

let {type, ...y} = fanObj;
console.log(type,y);

let g=[65,5,45];
let [a,b] = g;

console.log(a,b)
*/

const car = {
    speed: 100,
    color: "blue",
    model: "Camry",
    make: "Toyota",
    year: 2024
}
//console.log(Object.keys(car));
for(prop of Object.keys(car)) {
    //console.log(car[prop]);
   // console.log(Math.random());

}



let arr = [2,3,"red",21];
for(let i in car){
    console.log(car[i]);
}
