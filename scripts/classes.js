//@ts-check

class Cheese {
    constructor(type, color, age , cost) {
        this.type = type;
        this.color = "yellow"
        this.age = 0;
        this.cost = 0.0;
    }

eat() {
    console.log(`nom nom nom ${this.type} is yummy`)
}
    
} 

let cheddar = new Cheese("cheddar");
let swiss =  new Cheese("swiss");
swiss.color = "white";

