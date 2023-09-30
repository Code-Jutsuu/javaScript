
 /* let a = window.prompt("put the height")
  a = Number(a);

  let b = window.prompt("write base ") 
  b = Number(b);
   
  let z  = Math.sqrt((a*a)+(b*b) );

  console.log(z)
  */

  document.getElementById("myButton").onclick = function(){
     
    x = document.getElementById("ta").value;
    x=Number(x);

    y = document.getElementById("tb").value;
    y = Number(y);

    z  = Math.sqrt((x*x)+(y*y) );

    document.getElementById("c").innerHTML = " this is Hypotenuse  " + z
  }
