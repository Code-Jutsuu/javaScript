// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands

//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False 

console.log(checkAge(17));
function checkAge(age){
    return age >= 18 ? true: false; 
}

checkWinner(false);

function checkWinner(win){
    win ? console.log("you win") : console.log("you lose");
}