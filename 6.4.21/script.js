const body = document.body;
const block = document.getElementById("block");
const button = document.getElementById("btn");

body.addEventListener("click", function (e) {
    this.style.background = getRGB();
});

block.addEventListener("click", function(e) {
    this.classList.toggle("white");
});

let cnt = 0;
button.addEventListener("click", e => {
    cnt++;
    e.target.innerText = `Clicked ${cnt} times`;
})