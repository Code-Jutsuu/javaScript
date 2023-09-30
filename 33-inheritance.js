// inheritance = a child class can inherit all the 
//                        methods and properties from another class

class human{

    innosecnce = false;

    killers(){
        console.log(`At the last we all killers whatever the reason is kill someone just satisfy our ego`)
    }
}
class superhero extends human{

    name = "thor";
    kill(){
        console.log(`we sacrifies our own people because of thousands of people`)
    }
}

class superVillen extends human{

    name = "loki";
    kill(){
        console.log(`we sacrifies thousands of people because of one people who matters to us`)
    }
}

const thor = new superhero();
const loki = new superVillen();

console.log(thor.innosecnce);
loki.kill();
thor.kill();
