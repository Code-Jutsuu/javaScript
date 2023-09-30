
// closure =  A function with preserved and private data.
//                   Gives you access to an outer function’s scope,
//                   from an inner function.

class superHero{

    gender = "";
    power = "";
    noOFKills = 0;

    kill(){
        console.log("you kill the enemy 'dhanoo dhanooo '");
    }
    killed(){
        console.log("Rest in peace the pieces");
    }

    static we(){
        console.log(`we are heroes we sacrifice our own people because of thouosands of people`)
    }

}

const batman = new superHero();
batman.noOFKills = 2;
batman.gender = "male";

const ironman = new superHero();
ironman.power = "money and technology"
ironman.noOFKills = "half humanity";

console.log(ironman.power);
ironman.kill();
console.log(batman.noOFKills);
batman.killed();

//-------------------------- constructor ---------

// constructor = a special method of a class,
//                accepts arguments and assigns properties

class superVillen{

    constructor( name , gender , noOFKills){
        this.name = name;
        this.gender = gender;
        this.noOFKills = noOFKills;

    }

    kill(){
        console.log(`you killed the Suooerhero my ohh yeahh ${this.name}`)
    }
    
    killed(){
        console.log(`my friend ${this.name} you killed ${this.noOFKills} super hero and now you get killed`)
    }

    static we(){
        console.log(`we are Villens we killed thousands of people to save my people`)
    }

}
const joker = new superVillen("Joker", "male", 389);
const thanos = new superVillen("Thanos", "alien", 999);

console.log(joker.name);
thanos.killed();

//------------------ static -------------------------------------

// static = belongs to the class, not the objects
//          properties: useful for caches, fixed-configuration
//          methods:    useful for utility functions


superHero.we();

superVillen.we();