//array.forEach() = executes a provided callback function
//                  once for each array element

/*
let students = ["spongebob", "patrick", "sandy"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element){
    console.log(element);
}
*/

//---------------------------------- array.map() ---------------------------

//array.map() = executes a provided callback function
//                         once for each array element
//                         AND creates a new array

/*
let nums = [1,2,3,4,5];

let squares = nums.map(square);
let cubes = nums.map(cube);

cubes.forEach(print);


function square(element){
    return  Math.pow(element , 2);

}
function cube(elements){
    return Math.pow(elements,3);
}

function print(element){
    return console.log(element)
}
*/


//---------------------------------- array.filter() ---------------------------

//array.filter() = creates a new array with all elements 
//                         that pass the test provided by a function
/*
let ages = [16, ,17,24, 35, 64, 80, 15,11,37];
let adults = ages.filter(adult);

//adults.forEach(print);
console.log(...adults);


function adult(elements){
    return elements >= 18;
}
function print(elements){
    console.log(elements)
}
*/

//---------------------------------- array.reduce() ---------------------------

//array.reduce() = reduces an array to a single value            


let prices = [22, 45, 56, 0, 43, 55];
let total = prices.reduce(price);

console.log(total);

function price(add, elements){
    return add+elements;
}