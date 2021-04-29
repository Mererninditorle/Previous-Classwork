const getFormBody = function(el) {
    console.log(el)
    let formBody = {};
    for (let i = 0; i < form.elements.length; i++){
        let el = form.elements[i];
        if (el.name) {
            formBody[el.name] = el.value;
        }
    }
    console.log(formBody)
}

let form = document.forms.rating;

console.log(form.elements);
function getInfo() {
    for (let i = 0; i < form.elements.length; i++) {
        if (i !== form.elements.length -1){
            console.log(form.elements[i].value)
        }
    }
}

const ConsoleIt = function() {
    var formBody = {};
    for (let i = 0; i < form.elements.length; i++){
        let el = form.elements[i];
        if (el.name) {
            formBody[el.name] = el.value;
        }
    }

}