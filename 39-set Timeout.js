
// setTimeout() = invokes a function after a number of milliseconds            
//                            asynchronous function (doesn't pause execution) 

let item = "cryptocurrency";
let price = 2689.49;
let time1 = setTimeout(firstMsg , 3000);
let time2 = setTimeout(secondMsg , 6000);
let time3 = setTimeout(thirdMsg , 9000);

function firstMsg(){
    alert(`Buy this ${item} omnly in ${price} for exclusive day`);
}
function secondMsg(){
    alert(`Buy now this is last time offer`);
}
function thirdMsg(){
    alert(`Just buy you asshole`);
}

document.getElementById("myButton").onclick = function() {

    clearTimeout(time1);
    clearTimeout(time2);
    clearTimeout(time3);
    alert(`Thanks for the Buying you become flower`)
}