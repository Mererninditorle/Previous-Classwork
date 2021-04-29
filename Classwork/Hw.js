var newDiv = document.createElement("div")
document.body.appendChild(newDiv)

newDiv.style.backgroundColor = "#212126";
newDiv.style.height = "500px";
newDiv.style.width = "700px";  
newDiv.style.display = "flex";  
newDiv.style.justifyContent = "center";  
newDiv.style.flexDirection = "column";  
newDiv.style.alignItems = "center";  


var firstName = document.createElement("div");
firstName.innerText = "Ivan Shapovalov";
newDiv.appendChild(firstName);

firstName.style.color = "white";
firstName.style.fontFamily = "sans-serif";
firstName.style.fontSize = "40px";


var phone = document.createElement("div");
phone.innerText = "+7 800 555 35 35";
newDiv.appendChild(phone);

phone.style.color = "white";
phone.style.fontFamily = "sans-serif";

var mail = document.createElement("div");
mail.innerText = "TestMail@gmail.com";
newDiv.appendChild(mail);

mail.style.color = "white"
mail.style.fontFamily = "sans-serif"

document.body.style.margin = "0";
document.body.style.padding = "0";