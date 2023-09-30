
let grades = [100, 50, 40, 80, 90];
let grade = grades.sort(decendion);

console.log(...grade);

function ascendion(element, index){
    return element-index;
}
function decendion(element, index){
    return index-element;
}