// synchronous code = In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

//asynchronous code = Out of sequence.
//                    Ex. Access a database
//                        Fetch a file
//                        Tasks that take time
//                        (start now, finish sometime later)

//console.log("START");
//console.log("This is synchronous code");
//console.log("END");

console.log("START");
setTimeout(()=>console.log("This is asychronous code"), 5000);
console.log("END");


//------------------- console.Time ------------
//console.time() = Starts a timer you can use to 
//                 track how long an operation takes
//                 Give each timer a unique name.

//start
console.time("responseTime");
 
//setTimeout(() => console.log("gandu"), 1000);
alert("jaago grahak jaago");

//end
console.timeEnd("responseTime");
