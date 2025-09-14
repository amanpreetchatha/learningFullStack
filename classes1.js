let HotSauce = class {
    static units = "scoville";
    static maxHotness = 20000000;
    static name = "Jelly";
    static hotness = 5000;
    #b = 0;
    static {
        this.name = "chilli";
        this.hotness = 55000;
        
    }
    static getName(){
        if(this.hotness < this.maxHotness){
            return `${this.name} is ${this.hotness} ${this.units}`;
        }else {

            
            return `${this.name} is hotter than ${this.maxHotness}`;
            
        }
    }
    getB(){
        return this.#b;
    }
}


console.log(HotSauce.getName());

HotSauce.getName = function (){
    return "How are you"
}
console.log(HotSauce.maxHotness)

let temp = new HotSauce();
console.log(temp.getB());

