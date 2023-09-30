
let nameTag = document.createElement("h1");
 nameTag.textContent="hahahhahahh";
 document.body.prepend(nameTag);

const myList = document.querySelector("#fruits");
const listItem = document.createElement("li");
listItem.textContent = "Banana";
myList.append(listItem);

//myList.prepend(listItem);
//myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);
