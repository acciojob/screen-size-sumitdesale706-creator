//your JS code here. If required.
let body = document.querySelector("body");

let div = document.createElement("div");
div.id = "sizeInfo";

let h1 = document.createElement("h1");


window.addEventListener("resize", () => {
	h1.innerText = `Width ${window.innerWidth} and Height ${window.innerHeight}`;
})

div.appendChild(h1);
body.appendChild(div);
