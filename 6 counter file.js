
  let count = 0;

    document.getElementById("dec").onclick = function(){

     count -=1;
     document.getElementById("counter").innerHTML = count;

  }
     document.getElementById("res").onclick = function(){

     count = 0 ;
     document.getElementById("counter").innerHTML= count;
   
     }

     document.getElementById("inc").onclick = function(){

     count += 1;
     document.getElementById("counter").innerHTML = count;
       
 }