//toLocaleString() = returns a string with a language 
//                   sensitive represetation of this number

// number.toLocaleString(Locale, {options});

//'locale' = specify that language (undefined = defualt set in browser)
//'options' = object with formatting options

let noom = 34204930;
let naam = 34342423;

let paisaa = 89;

//noom = noom.toLocaleString("en-US");
//naam = naam.toLocaleString("hi-IN");

noom = noom.toLocaleString("en-US",{style:"currency", currency:"USD"});
naam = naam.toLocaleString("hi-IN" , {style:"currency" , currency:"INR"});

paisaa = paisaa.toLocaleString(undefined ,{style:"unit", unit:"celsius"});

console.log(noom);
console.log(naam);
console.log(paisaa);
