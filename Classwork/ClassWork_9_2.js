// let form = document.forms[0];
let form = document.forms.rating;

console.log(form.elements);
function getInfo() {
    for (let i = 0; i < form.elements.length; i++) {
        if (i !== form.elements.length -1){
            console.log(form.elements[i].value)
        }
    }
    // if (form.elements[i].type) {
    //     console.log(form.elements[i].type);
    // } else {
    //     console.log(form.elements[i].value);
    // }
}


/* 
    1. Получить данне из формы
    2. Создаём табличку с полученной инф.
*/


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



/* 
    ДЗ
    СОЗДАТЬ ФАИЛ С ФОРМОЙ ЗАКАЗА, ПРИ НАЖАТИИ НА КНОПОЧКУ (type = button) собирает инф в объект 
    и выгрузить в блок под формой
*/

function getRGB() {
    return `rgb(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)})`
}

let link = form.nextElementSibling;
console.log(link);
link.onclick = function(event) {
    event.preventDefault(); //отменить действие по умолчанию
    this.style.color = getRGB();
}


form.onsubmit = function(event) {
    event.preventDefault();
    let formBody = {};
    for (let i = 0; i < form.elements.length; i++){
        let el = form.elements[i];
        if (el.name) {
            formBody[el.name] = el.value || "Guest";
        }
    }
    console.log(formBody)

    let info = document.createElement("div");
    info.innerHTML = `${formBody.name} : ${formBody.favor}`;
    info.className = "line";
    document.body.insertBefore(info, form);
    // Или 
    form.parentNode.insertBefore(info,form);
}


//Дз изучить Option() 

