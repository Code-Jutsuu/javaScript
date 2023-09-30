/*
const promise = new Promise((resolve, reject) => {
    
    let fileLoaded = false;

    if(fileLoaded) resolve("fileLoaded");
    else reject ("fileRejected");

});

promise.then((value) => console.log(value))
        .catch((error) => console.log(error));
       
 */

//-----------------------------------------------

/*      
  const promise = new Promise((resolve) => {
        setTimeout(resolve,5000);
  })

  promise.then(() => {
    console.log("gandu");
  })
 
*/

//-----------------------------------------------

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);

});

wait(5000).then(() => console.log("loda bc"));


