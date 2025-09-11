
let user1 = ["Amanpreet","101","Punjabi","Brampton","Chathewala"];
let user2 = ["Satinderpal","104","Punjabi","Toronto","Patiala"];

let User = {
    name: "",
    age: null,
    hometown: "",
    get getDetail(){
        return [this.name,this.age,this.hometown];
    },
    set setDetail(userDetail){
        this.name = userDetail[0];
        this.age = userDetail[1];
        this.hometown = userDetail[2];
    }
}

User.setDetail = user1;
console.log(User.getDetail);