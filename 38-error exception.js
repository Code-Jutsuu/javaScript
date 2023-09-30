// error = object with a description of 
//             something that went wrong

// throw = executes a user-defined error

try{

    let x = window.prompt("Enter a #");
    x = Number(x);
    
    if(isNaN(x)) throw"That wans't anumber!";
    if(x == "") throw "That was empty";

    console.log(` ${x} is a number`);
}
catch(error){
    console.log(error);

}
finally{

    console.log("This is always executes")
}