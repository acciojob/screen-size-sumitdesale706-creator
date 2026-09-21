//your JS code here. If required.
let body = document.querySelector("body");
let display = document.createElement("h1");

display.innerText = `Width ${window.innerWidth} and Height ${window.innerHeight}`;

body.appendChild(display);
