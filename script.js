let button = document.querySelector(".button-dark");
let body = document.querySelector("body");
let mode = "light";

button.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        body.classList.add("body-dark");
        body.classList.remove("body-light");
        button.classList.add("button-light");
        button.classList.remove("button-dark");
        button.innerText = "Change to light mode";
    } else {
        mode = "light";
        body.classList.add("body-light");
        body.classList.remove("body-dark");
        button.classList.add("button-dark");
        button.classList.remove("button-light");
        button.innerText = "Change to dark mode";
    }
});