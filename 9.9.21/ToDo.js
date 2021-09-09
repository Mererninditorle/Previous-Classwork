var button = document.getElementsByClassName(button);
// var button = document.getElementById("button")
var task = document.querySelector("#task");
button.onclick = (e) => {
    var li = document.createElement("div");
    li.innerText = `- ${task}`
}
