// spread operator = allows an iterable such as an 
// ...               array or string to be expanded 
//                   in places where zero or more 
//                   arguements are expected
//                   (unpacks the elements)
let string = "naaaaaaaaam kya h tumharaa"

let num = [2,4,5,56,6,66,5,8];
let max = Math.max(...num);

console.log(...string);

let class1 = ["spongebob", "patrix", "sandy"];
let class2 = ["squidward", "Mr.krabs", "plankton"];

class1.push(...class2);
console.log(...class1)
