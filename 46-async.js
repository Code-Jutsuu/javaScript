// async makes a function return a Promise.
// await makes a function wait for a Promise.

async function loadFile(){
    let fileLoaded = false;
    if(fileLoaded) return "file loaded";
    else throw "file is not loaded";

}
loadFile().then((value) => console.log(value) )
           .catch((error) => console.log(error));


