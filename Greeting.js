function greet() {
    "use strict";
    var body = document.querySelector("body");
    body.innerHTML = "Hello World!";
}

if (document.readyState === "complete") {
    greet();
} else {
    document.addEventListener("DOMContentLoaded", greet);
}