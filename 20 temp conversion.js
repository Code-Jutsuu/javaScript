 
document.getElementById("myBut").onclick = function(){

   let temp = document.getElementById("myText").value ;
   temp = Number(temp);

   if(document.getElementById("CB").checked){
        temp = toCelsius(temp);
        document.getElementById("ans").innerHTML = temp + "°C"
   }

   else if(document.getElementById("FB").checked){
        temp = toFahrenheit(temp);
        document.getElementById("ans").innerHTML = temp + "°F"
   }
   else{
    document.getElementById("ans").innerHTML = "<big><big><big><big>Please provide a unit</big></big></big></big>"
   }

}

function toCelsius(temp){
    return (temp-32)*(5/9);
}
function toFahrenheit(temp){
    return temp*9/5+32;

}