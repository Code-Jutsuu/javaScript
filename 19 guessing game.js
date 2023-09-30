
const answer = Math.floor(Math.random()*10) +1 ;
let guesses = 0;

document.getElementById("myButton").onclick = function(){

    let guess = document.getElementById("myBox").value;

    guesses++;

    if(answer==guess){
        alert(`${answer} is the #. It took you ${guesses} guesses`)
    }
    else if(guess<answer) {
        alert("too small")
    }
    else{
        alert("too large")
    }

}