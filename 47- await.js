// async makes a function return a Promise.
// await makes a function wait for a Promise.

async function loadFile(){
    let fileLoaded = false;
    if(fileLoaded) return "file loaded";
    else throw "file is not loaded";

}


//let msg = await loadFile();
//console.log(msg);

async function startProgram(){
    try{
        let msg = await loadFile();
        console.log(msg);
    }
    catch(error){
        console.log(error);
    }
}
startProgram();
