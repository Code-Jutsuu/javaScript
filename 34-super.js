
// super = Refers to the parent class. 
//               Commonly used to invoke constructor of a parent class

class Animal{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal{
     
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{
     
    constructor (name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{
     
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const fish = new Fish("nimbo", 1, 60);
let hawk = new Hawk("baaz", 4, 220);
let rabbit = new Rabbit("poplu", 2, 30);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
