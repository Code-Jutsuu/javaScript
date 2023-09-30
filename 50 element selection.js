let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";

let fruits = document.getElementsByName("fruits");
// console.log(fruits[2]);
fruits.forEach(fruit => {
    if(fruit.checked)
    console.log(fruit.value);
})
let veges = document.getElementsByTagName("li");
veges[2].style.backgroundColor = "salmon"

let mitha = document.getElementsByClassName("dessert");
mitha[1].style.backgroundColor = "yellow";

// query selector by defaut it selects the first element of any group
// query selector uses same tech as css if you want to change background of:
// ID = "#id"
// Class = "".class"
// li = "li"
// for attribute in HTML = "[for]"

let query = document.querySelectorAll("[for]");
query.forEach((gandu) => gandu.style.backgroundColor = "salmon")
