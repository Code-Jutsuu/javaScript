//slice() extracts a section of a string 
//         and returns it as a new string, 
//         without modifying the original string

let fullName = "Snoop Dogg";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

// method chaining = calling one method after another
//                   in one continuous line of code

let userName = "bro";

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);