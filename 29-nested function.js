
// nested functions = Functions inside other functions.
//                    Outer functions have access to inner functions.
//                    Inner functions are "hidden" from outside.
//                    used in closures (future video topic)
 
let naam = "Ganjaa";
let calls = 69;

pickUp();

function pickUp(){
    someone();
    calling();

    function someone(){
        console.log(`call back kar ${naam}`)
    }
    function calling(){
        console.log(`tere ko mane ${calls} kiya hu bsdk`)
    }
}