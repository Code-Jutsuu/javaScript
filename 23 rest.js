// rest parameters = represents an indefinite number
//...                of parameters
//                  (packs arguments into an array)
  
let a = 2;
let b = 3;
let c = 6;
let d = 3;
let e = 9;

console.log(sum(a,b,c,d,e))

function sum(...number){
    let total = 0;
    for(let sam of number){
        total += sam;
    }
    return total;
}

