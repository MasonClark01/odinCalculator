const calcButtons = document.getElementById("calcButtons")
const butIcons = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "x", ".", 0, "=", "/"]

for(let i = 0; i < 16; i++){
    let calcBut = document.createElement("button")
    let calcText = document.createTextNode(String(butIcons[i]))
    calcBut.appendChild(calcText)
    if(typeof butIcons[i] === "string"){
        calcBut.classList.add("operatorButton")
    }
    calcBut.classList.add("calcButton")
    calcButtons.appendChild(calcBut)
}