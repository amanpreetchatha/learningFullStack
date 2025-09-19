let userNames = new Set();

let cityNames = new Set();
cityNames.add('brampton');
cityNames.add('toronto');
cityNames.add('brampton');
cityNames.add('Brampton');
cityNames.add('Toronto');
cityNames.add('Dallas');
let user1 = {name: 'Amanjot', age: 25};
let user2 = {name: 'Manpreet', age: 25};
let user3 = {name: 'Katie', age: 19}

userNames.add('harry');
userNames.add('Krishan');
userNames.add('katie42');
userNames.add('susan');

//console.log(userNames)

userNames.add('harry');
userNames.add('susan');

userNames.delete('Krishan');
userNames.add('julia');
userNames.add('Toronto');
//console.log(userNames);
userNames.clear();
//console.log(userNames);

userNames.add(user1);
userNames.add(user2);
userNames.add(user1);
//console.log(userNames);

//console.log(userNames.size);
let mergedSet = new Set([...userNames,...cityNames]);

//console.log(mergedSet[1]);

for(let i of mergedSet){
    //console.log(i);
}

cityNames.forEach((item,d,a)=>{
    //console.log(item,d,a);
});


let arrA = Array.from(mergedSet);
//console.log(mergedSet )
let againSet = new Set(arrA);
//console.log(againSet)



let setIti =mergedSet[Symbol.iterator]();
//console.log(setIti.next(),"    ", setIti.next());

for(let i of setIti){
    console.log(i)
    
}


