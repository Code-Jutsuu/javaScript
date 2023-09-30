// while loop = repeat some code 
//              while some condition is true
//                potentially infinite


/*let userName = "";

 

while(userName == "" || userName == null){
      userName = window.prompt("Enter your name");
} 

console.log("Hello", userName);


// do while loop

// do while loop = do something,
//                             then check the condition,
//                             repeat if condition is true

let usserName;

do{
    usserName = window.prompt("Enter your name");
}while(usserName == "")

console.log("Hello", usserName);



// for loop

// for loop = repeat some code a 
//            certain amount of times
/*
for(let i = 1; i <= 10; i+=1){
    console.log(i);
}

for(let i = 10; i > 0; i-=1){
    console.log(i);
}

console.log("HAPPY NEW YEAR!");

*/

// --------BREAK AND CONT --------------

// break = breaks out of a loop entirely
// continue = skips an iteration of a loop
/*
for(i=1; i<=20; i++){
    if(i==13) continue;
    if(i==17) break;
      
    console.log(i)
}

*/

//--------- nested loop----------
/*
let x = window.prompt("write # of row");
let y = window.prompt("write # of column");
let z =window.prompt("write a symbol");

for( i=1; i<=x; i++ ){
    document.getElementById("myLabel").innerHTML += "<br>";
        for(j=1; j<=y ;j++){
            document.getElementById("myLabel").innerHTML += z

        }
}
*/
for(i=0; i<5; i++){
    document.getElementById("myLabel").innerHTML += i;
}
