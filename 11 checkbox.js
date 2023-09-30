
document.getElementById("submit").onclick = function(){

   let checkup = document.getElementById("myCB");
   const oneMonth = document.getElementById("oneMonth");
   const threeMonth = document.getElementById("threeMonth");
   const nineMonth = document.getElementById("nineMonth");

   if(checkup.checked){

      console.log(" yaa hooo! you are suscriber")
   }
   else{
    console.log("boooo! you are not a suscriber")
   }


  if(oneMonth.checked){
         console.log(" One month suscriber")
   }

    else if(threeMonth.checked){
    console.log(" Three month suscriber")
    }

    else if(nineMonth.checked){
    console.log(" Nine month suscriber")
    }

    else{
      console.log("Fuck OFF ! ")
 }


}
    