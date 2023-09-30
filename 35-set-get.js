// get = binds an object property to a function 
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

class Car{

    constructor(power){
        this._power = power;
    }
    get power(){
        return ` ${this._power}hp `;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value){
        if(value > 50) value= 50;
        else if(value <0) value = 0;
        this._gas = value;
    }
   
}

const car = new Car(400);

car.gas=100;

console.log(car.power);
console.log(car.gas);

//---------------------object as argumanets---------------

class Gaddi{

    constructor(model, year, color){
     this.model=model;
     this.year = year;
     this.color = color;

}
}
const caar = new Gaddi("Tesla", 2020, "white");
const caar2 = new Gaddi("ferrari", 2025, "green");

displayInfo(caar2);


function displayInfo(car){

    console.log(car.model);
    console.log(car.year);
    console.log(car.color);

}