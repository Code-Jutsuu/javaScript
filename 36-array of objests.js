
class Car{

    constructor(model , year, color){
        this.model = model;
        this.year = year;
        this.color = color;

    }
    drive(){
        console.log(`You are driving the ${this.model}`)
    }

}
const car1 = new Car("tesla", 3030, "white");
const car2 = new Car("Lambo", 3020, "yellow");
const car3 = new Car("Ferrari", 3010, "green");
const car4 = new Car("Corvette", 3030, "blue");

console.log(car1.model);

car2.drive();