
let x ;
let y ;
let z ;

document.getElementById("roll").onclick = function(){

    x = Math.ceil(Math.random()*6);

    y = Math.ceil(Math.random()*6);

    z = Math.floor(Math.random()*6) + 1 ;

    document.getElementById("xl").innerHTML = x;
    document.getElementById("yl").innerHTML = y;
    document.getElementById("zl").innerHTML = z;

}
