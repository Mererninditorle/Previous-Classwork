console.log("Quest 'Dungeon'");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Выбери класс: \n1) Мечник \n2) копейщик \n3) Ассасин \n4) Лучник \n', (answer) => {

    if (answer == 1)
    {
        answer = ("мечника")
    }
    else if (answer == 2)
    {
        answer = ("копейщика")
    }
    else if (answer == 3)
    {
        answer = ("ассасина")
    }
    else if (answer == 4)
    {
        answer = ("Лучника")
    }
    else
    {
        answer = null
    }
    if (answer)
    {
        console.log('Ты выбрал ' + (answer))
        var Class = answer
        rl.question('Что будешь делать?: \n1) Пойдёшь в высокоуровневую пещеру \n2) Пойдешь качать уровень \n3) Отдохнёшь  \n4) Начнёшь выполнять квест своего уровня \n', (answer) => {

            if (answer == 1)
            {
                answer = ("пошёл в пещеру, но умер из-за низкого уровня. \nПопробуй снова")
            }
            else if (answer == 2)
            {
                rl.question('Ты решил прокачать свой уровень. \nЧто будешь прокачивать? \n1) Ловкость \n2) Силу \n3) Меткость \n4) Выносливость\n', (answer) => {

            if (answer == 1)
            {
                rl.question("Ты прокачал Ловкость на 5 уровней. Ты устал. \nЧто будешь делать?", (answer) =>{

                })
            } 
            else if (answer == 2)
            {
                rl.question("Ты прокачал Силу на 5 уровней. Ты устал. \nЧто будешь делать?", (answer) =>{

                })
            } 
            else if (answer == 3)
            {
                rl.question("Ты прокачал Меткость на 5 уровней. Ты устал. \nЧто будешь делать?", (answer) =>{

                })
            } 
            else if (answer == 4)
            {
                rl.question("Ты прокачал Выносливость на 5 уровней. Ты устал. \nЧто будешь делать?", (answer) =>{

                })
            } 
            })
                

            }
            else if (answer == 3)
            {
                answer = ("решил отдохнуть, но во время сна тебя убили и ограбили. \nПопробуй снова")
            }
            else if (answer == 4)
            {
                rl.question("ТЫ решил выпонить квест своего уровня. \nКакой квест выберешь?\n1)Поможешь местному с работой \n2)Выполнишь приказ ярла и сходишь в курган \n3)Поможешь незнакомцам в лесу \n4)", (answer) =>{

                })

            }
            else
            {
                answer = null
            }
            if (answer)
            {
                console.log("Ты " + (answer))
            }
            else
            {
                console.log("Нажал не на ту кнопку")
            }
        })
    }
    else
    {
        console.log("Нажал не на ту кнопку")
    }
})
