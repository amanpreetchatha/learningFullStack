// create your classes here
class Vehicle{
    
    constructor(make,model,year,color,mileage,forSale){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.forSale = forSale;
    }
    getMake(){
        return this.make;
    }
    getModel(){
        return this.model;
    }
    getYear(){
        return this.year;
    }
    getColor(){
        return this.color;
    }
    getMileage(){
        console.log("This function is in super class");
        return this.mileage;
    }
    getSelf(){
        return(this);
    }
    getPrototype(){
        return Object.getPrototypeOf(this);
    }

}

class Car extends Vehicle{ 
    constructor(make,model,year,color,mileage,seats,forSale){
        super(make,model,year,color,mileage,forSale);
        this.seats = seats;
    }
    getSeats(){
        return this.seats;
    }
    getMileage(){
        super.getMileage();
        console.log(this.mileage);
    }

    
}

let ferrari = new Car("Hyundai","Elantra",2017,"Black","165830",4,true);
let output = console.log(ferrari.getMileage());
console.log(ferrari.getPrototype())

let vehicleA = new Vehicle("Volvo","VNL",2022,"White",943249,false);
console.log(vehicleA.getPrototype());

//let m = Math.pow(2,10);
//console.log(m);