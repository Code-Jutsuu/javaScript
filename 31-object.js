// object = A group of properties and methods
//                properties = what an object has
//                methods = what an object can do
//                use . to access properties/methods

const car1 = {

    model:"Tesla",
    color:"Blue",
    year:2024,

    drive: function(){
        console.log("why are you driving ")
    },

    break: function(){
        console.log("why are you running")
    }

}

const car2 = {

    model:"Ferari",
    color:"Balck",
    year:2022,

    drive: function(){
        console.log("why are you driving ")
    },

    break: function(){
        console.log("why are you running")
    }

}

car1.break();
car2.drive();

console.log(car1.model);
console.log(car2.model);

//---------------- this -----------------------

// this = reference to a particular object
//           the object depends on the immediate context


const car3 = {

    model:"Ferrari",
    color:"Balck",
    year:2022,

    drive: function(){
        console.log(`why are you driving that fast ${this.model}`)
    },

    break: function(){
        console.log("why are you running")
    }

}
car3.drive();