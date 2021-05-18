let images = [
    {name: "Meh", path: "img/meh_1.svg"},
    {name: "Cry", path: "img/cry_2.svg"},
    {name: "Tired", path: "img/tired_3.svg"}
]

let pic = document.body.firstElementChild.firstElementChild;
let text = document.body.firstElementChild.lastElementChild;

let select = document.createElement("select")
for (let img of images) {
    let opt = new Option(img.name, img.path);
    select.appendChild(opt);
}
document.body.appendChild(select);

select.onchange = function(e) {
    pic.src = this.value;
}