let myMap = new Map();
myMap.set('color','red');
myMap.set('color','blue');
myMap.set('shape','circle');
myMap.set('size','20cm')
myMap[3] = 'aman'

//console.log(myMap);
myMap.delete('shape');
//console.log(myMap);
//myMap.clear();
//console.log(myMap.size);

function demo(){
    console.log('this is a demo');
}

myMap.set(demo,'2024')
//console.log(myMap.get(demo));

let myObj = {year: 2022, model: 'Y', manuf: 'tesla'};

//console.log(myObj.valueOf())

let arr = [22,34,52,'dkkd'];
let map1 = new Map();

map1.set(arr,'value');
map1.set('3',533);
map1.set('@',42);
//console.log(map1.has(arr));
let bigMap = new Map([...myMap,...map1]);

console.log(bigMap);

