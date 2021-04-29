const setNumber = function(){
    let number = getNumber(100,1);
    console.log(number)
    /*
        firstElementChild - первый дочерний элемент
        lastElementChild - последний дочерний элемент
        nextElementSibling - младший брат элемента
        previousElementSibling - старший брат элемента
     */
    let tbl = document.body.lastElementChild.previousElementSibling.firstElementChild;

    let rowsCnt = tbl.childNodes.length;
    if (rowsCnt > 0) {
        let row = tbl.childNodes[rowsCnt - 1];
        if (row.childNodes.length < 4) {
            row.innerHTML += `<td>${number}</td>`
        } else {
            tbl.innerHTML += `<tr><td>${number}</td></tr>`
        }
    } else {
        tbl.innerHTML = `<tr><td>${number}</td></tr>`
    }
    console.log(tbl.childNodes);
}


const Sum = function() {
    let horizontal = document.body.lastElementChild.previousElementSibling.firstElementChild.childNodes;
    let digits = sdf;
    console.log(digits)
}
