let items = document.getElementsByClassName("caption");

//Array.from - преобразование псевдо-массива в массив 
items = Array.from(items);
items.forEach(item => {
    // список всех классов элемента в виде массива
    /* 
        Методы classList:
        .add("class") - добавить класс элементу
        .remove("class") - удалить класс из элемента
        .contains("class") - проверка наличия класса в теге
        .toggle("class") - добавляет класс если его нет, или удаляет класс если он есть    
        */
    item.onclick = (e) => {
       e.target.classList.toggle("active");
       let bro = e.target.nextElementSibling
       if (e.target.classList.contains("active")) {
          bro.style.height = bro.scrollHeight + "px"; 
       } else {
          bro.style.height = 0 + "px";  
       }
       
    }
})