//------------function----------
/*
startProgram();

function startProgram(){
    let username = "himanshi"
    let age = 21;

    greeting(username, age);
}
function greeting(x,y){
    console.log(x+"ahfglsahdl");
    console.log(y+"a;fla");
}
*/

// ------------- function and return-------

let width;
let length;
let area;

width = window.prompt("enter width");
length = window.prompt("enter legth");

area = getArea();

console.log(area);

function getArea(){

    return width* length;

}