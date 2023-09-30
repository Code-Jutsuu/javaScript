
// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with names
//                       write it, then forget about it

/*
// ------------ Example 1 ------------

const greeting = function(){
    console.log("hello g")
}
greeting();

// ------------ Example 2 ------------

let count = 0;

document.getElementById("inc").onclick = function(){

    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("dec").onclick = function(){

    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}

*/

//--------------------- arrow function --------------

// arrow function expression = compact alternative to a traditional function expression
//    =>

/*
let greeting = hello => console.log(`hello ${hello}`);

greeting("ram ram");
*/

let temperature = (x , y) => x / y*100;

console.log(temperature(75, 100));

/*

let temperature = function(x,y) = {
     return x/y*100 ;
}
console.log(temperature(75,100))

*/
