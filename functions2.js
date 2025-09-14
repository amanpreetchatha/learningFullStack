//"user strict"
let user1 = ["Amanpreet","101","Punjabi","Brampton","Chathewala"];
let user2 = ["Satinderpal","104","Punjabi","Toronto","Patiala"];
/*
let getUserName = function(...user){
    console.log(user);
    return this.message + user;
}

let contentMessage = {
    message: "How are you "
}

//console.log(getUserName.apply(contentMessage,userDetails));
let tempFunc = getUserName.bind(contentMessage);

console.log(getUserName(userDetails));
console.log(tempFunc(userDetails));


let createUser = function(user){
    if(new.target){
        this.userName = user[0];
        this.age = user[1];
        this.language = user[2];
        this.city = user[3];
        this.hometown = user[4];
        console.log(this);
    }else{
        console.log("you cant do this")
    }
}
createUser.prototype.getName = function(){
    return this.userName;
}

//console.log(assignValues(user1));

let userA = new createUser(user1);
let userB = new createUser(user2);
console.log(userB.getName());
console.log(userA.getName());
//let userC = assignValues(user2);


*/


function* infiniteItirator(){
    let counter = 0;
    while(true){
        yield counter;
        counter++;
    }
}

let counterA = infiniteItirator();
let counterB = infiniteItirator();


console.log(counterA.next());
console.log(counterA.next());
console.log(counterA.next());
console.log(counterA.next());
console.log(counterA.next());
console.log(counterA.next());
console.log(counterA.next());
console.log(counterA.next()); 



console.log(counterB.next());
console.log(counterB.next());
console.log(counterB.next());