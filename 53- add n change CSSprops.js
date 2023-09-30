
const head = document.createElement("h1");
head.textContent = "This is my title";
document.body.prepend(head);

const title = document.querySelector("h1");
title.style.backgroundColor = "salmon";
title.style.border = "3px solid";
title.style.textAlign = "center";
title.style.display = "block";
title.style.fontFamily =  "consolas";
title.style.fontStyle = "italic";
title.style.fontWeight = "900";
title.style.webkitTextStroke = "2px rgb(20 ,200, 250)";
title.style.color = "transparent";

