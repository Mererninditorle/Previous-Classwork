const group = [
    "Konovalov Pavel",
    "Anofriev Ivan",
    "Asatryan Eduard",
    "Bezusov Pavel",
    "Bel'ski Dmitry",
    "Bodacheva Yana",
    "Lominsky Timofey",
    "Timonyn Igor",
    "Magasumova Alina",
    "Drey Sofya",
    "Shapovalov Ivan",
    "Grinevich Aleksandr",
    "Potemkin Georgy",
    "Dudukalov Mark",
    "Pavlova Marya",
    "Fedorkov Michail",
    "Mironchuk Dmitry",
    "Grachev Nikita",
    "Vasilov Shamil",
    "Popov Leonid",
    "Yakusheva Sofya",
];
console.log(group.length);
group.sort( (a,b)=> {
    if (a > b) {
        return 1 ;
    } else {
        return -1;
    }
});
console.log(group);

let team = [];
let teams = [];

// let cnt = Math.floor(group.length / 3);

for (let i = 0; i < group.length; i++) {
    if (i % 3 === 0) {
        if (i !== 0) {
        teams.push(team);
        }
        team = [];
        team.push(group[i]);
    } else {
        team.push(group[i]);
    }
}
teams.push(team);
console.log (teams.length);
console.log(teams);

let main = document.body.firstElementChild.nextElementSibling;
teams.forEach(t => {
    let card = document.createElement("div")
    card.className = "team";
    for (let i = 0; i < t.length; i++) {
        card.innerHTML += `<div>${t[i]}</div>`
    }
    main.appendChild(card);
});