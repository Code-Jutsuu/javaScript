// Map = object that holds key-value pairs of any data type

let store = new Map([
    ["chaddi", 210],
    ["shirt", 400],
    ["jeans", 600],
    ["shoe", 540]
])

let bill = 0;

 bill += store.get("chaddi");
 bill += store.get("shirt");
 bill += store.get("shoe");
 store.set("chasma", 150)
 store.delete("jeans");



store.forEach((value, key) => console.log(`${key} $${value}`))
console.log(`Your total bill is $${bill}`);