//const element = document.querySelector("#myButton");
//const element = document.body;
//const element = document.getElementById("myText");
const element = document.getElementById("myDiv");

//element.onclick = doSomething;
//element.onload = doSomething;
////element.onchange = doSomething;  //leave the textbox and it will work 
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
element.onmouseup = doSomething;
element.onmousedown= doSomethingElse;

function doSomething(){
   // document.write("loda bc");
    element.style.backgroundColor = "rgb(20, 200, 250)";

}
function doSomethingElse(){
    // document.write("loda bc");
     element.style.backgroundColor = "rgb(200, 200, 250)";
 
 }