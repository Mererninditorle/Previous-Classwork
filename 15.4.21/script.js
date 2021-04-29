const today = new Date(); 
const currentYear = today.getFullYear(); 
const monthNames = [ 
"January", 
"February", 
"March", 
"April", 
"May", 
"June", 
"July", 
"August", 
"September", 
"October", 
"November", 
"December" 
]; 

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const currentMonth = monthNames[today.getMonth()]; 

let step = 0; 

const showCalendar = function() { 
    const clndr = document.querySelector(".calendar"); 
if (clndr) { 
clndr.remove(); 
    } else { 
const block = document.createElement("div"); 
block.className = "calendar"; 
block.innerText = `${currentMonth}, ${currentYear}`; 
document.body.appendChild(block); 
const plus = document.createElement("button"); 
const minus = document.createElement("button"); 
plus.innerText = "+"; 
minus.innerText = "-"; 
block.append(plus, minus); 
addGrid(block);
plus.addEventListener("click", function(e) { 
step++; 
console.log(block.firstChild.value); 
updateDate(step, block); 
setMonthGrid(step, new Date(CurrentYear, today.getMonth() + step).getFullYear());
}) 
minus.addEventListener("click", function(e) { 
step--; 
updateDate(step, block); 
setMonthGrid(step, new Date(CurrentYear, today.getMonth() + step).getFullYear());
}) 
setMonthGrid(today.getMonth(), currentYear);
} 
} 

const updateDate = function(step, box) { 
    newDate = new Date(currentYear, today.getMonth() + step); 
    box.firstChild.nodeValue = monthNames[newDate.getMonth()] + ", " + newDate.getFullYear(); 
} 

const setZeroNumber = function(number) { 
if ((number + "").length < 2) { 
return "0" + number; 
} 
return number; 
}

const addGrid = function (parent) {
    const grid = document.createElement("div");
    grid.className = "monthGrid";
    let cnt = 42;
    for (let day of daysOfWeek) {
        grid.innerHTML += `<div class =\"cell day\">${day}</div>`;
    }
    while(cnt--) {
        grid.innerHTML += "<div class =\"cell\"></div>";
    } 
    parent.appendChild(grid);
}

const setMonthGrid = function(m, y) {
    let firstMonthDay = new Date(y, m);
    let lastMonthDay = new Date(y, m + 1, 0);
    console.log(firstMonthDay, lastMonthDay);
    let cells = document.querySelectorAll(".cell:not(.weekDay)");
    cells.forEach(c => c.innerText = "");
    console.log(cells);
    for (
        let day = firstMonthDay.getDate(),
            start = firstMonthDay.getDay() === 0 ? 
                    7 : 
                    firstMonthDay.getDay(), 
            end = lastMonthDay.getDate();
        day <= end;
        day++
    ) {
        cells[start - 2 + day].innerText = new Date(y, m, day);
        getDate();
    }
}