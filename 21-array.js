/*
let fruits = ["kela","seb","aam"];

fruits.push("nariyal");
fruits.pop();
fruits.unshift("nariyal");
fruits.shift();

console.log(fruits);
*/

//------------------------------------Types of for loop------------------------------------


/* let prices = [2, 4, 6, 7, 21, 24, 66];
  let sum = 0;

 for(i=0; i<prices.length; i++){
    sum+=prices[i];
 }
 console.log(sum);
*/
/*
for(let price of prices){
     console.log(price);
     sum += price;
}
 console.log(sum);
 */

 //----------------------------------------------------Sorting------------------
/*
 let fruits = ["kela","seb","aam"];
// fruits.sort();
 fruits.sort().reverse();

 for(let fruit of fruits){
    console.log(fruit);
 }
 */

 //------------------------------------------------ 2D array ----------
 let fruits = ["kela","seb","aam"];
 let vegetable = ["tamatar", "aloo", "pyaz"];
 let nut = ["badam", "kaju", "khajooor"];

 let groceryList = [fruits, vegetable, nut];

// console.log(groceryList);
 
 for(let list of groceryList){
     for(let item of list){
        console.log(item);
     }
 }


