const calcButtons = document.getElementById("calcButtons")
const reseter = document.getElementById("clear")
const delButton = document.getElementById("back")
let firstNumber = document.getElementById("first")
let equationOperator = document.getElementById("operator")
let secondNumber = document.getElementById("second")
let equationResult = document.getElementById("equationResult")

const butIcons = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "x", ".", 0, "=", "/"]
let first = ""
let second = ""
let operation = ""
let step = 0
let output = undefined

function add(a, b){
    return Number(a)+Number(b)
}
function subtract(a, b){
    return Number(a)-Number(b)
}
function multiply(a, b){
    return Number(a)*Number(b)
}
function divide(a, b){
    return Number(a)/Number(b)
}

for(let i = 0; i < 16; i++){
    let calcBut = document.createElement("button")
    let calcText = document.createTextNode(String(butIcons[i]))
    calcBut.appendChild(calcText)
    if(typeof butIcons[i] === "string" && butIcons[i] != "=" && butIcons[i] != "."){
        calcBut.classList.add("operatorButton")
    }
    calcBut.classList.add("calcButton")
    calcBut.addEventListener("click", operate)
    calcButtons.appendChild(calcBut)
}

function resetParams(){
    first = ""
    second = ""
    step = 0
}
function resetAll(){
    firstNumber.textContent = ""
    equationOperator.textContent = ""
    secondNumber.textContent = ""
    equationResult.textContent = ""
    operation = ""
    first = ""
    second = ""
    step = 0
    output = undefined
}
function delLast(){
    if(step === 0){
        if(first != ""){
            if(operation === ""){
                first = first.slice(0, -1)
                firstNumber.textContent = first
            }
            else{
                operation = ""
                equationOperator.textContent = operation
            }
        }
        else{
            return
        }
    }
    if(step === 1){
        if(second != ""){
            second = second.slice(0, -1)
            secondNumber.textContent = second
        }
        else{
            operation = ""
            step -= 1
            equationOperator.textContent = operation
        }
    }
}
function setFirstNum(num, op){
    resetAll()
    first = num
    firstNumber.textContent = first
    operation = op
    equationOperator.textContent = op
    step = 1
}
function operate(){
    if(step === 0){ //step refers to number being modified
        if(output != 0) // checks if you can run a calculation using output as the first number
            if(this.classList.contains("operatorButton")){
                first = output
                firstNumber.textContent = first
                secondNumber.textContent = ""
                equationOperator.textContent = ""
                equationResult.textContent = ""
            }
            else if(this.textContent != "="){
                firstNumber.textContent = ""
                secondNumber.textContent = ""
                equationOperator.textContent = ""
                output = 0
            }
        if(this.classList.contains("operatorButton") && first === ""){
            return
        }
        else if(this.classList.contains("operatorButton") && first != ""){
            step += 1
            operation = this.textContent
            console.log(operation)
            equationOperator.textContent = operation
        }

        else if(this.textContent != "="){
            if(this.textContent != "."){
                first += this.textContent
                firstNumber.textContent = first
            }
            else{
                if(first.includes(".")){
                    return
                }
                else{
                    first += this.textContent
                    firstNumber.textContent = first
                }
            }
        }
    }
    else if(step === 1){
        if(this.classList.contains("operatorButton")){
            return
        }
        else if(this.textContent === "=" && second === ""){
            return
        }
        else if(this.textContent === "=" && second != ""){
            if(operation === "+"){
                output = add(first, second)
                equationResult.textContent = output
                resetParams()
            }
            if(operation === "-"){
                output = subtract(first, second)
                equationResult.textContent = output
                resetParams()
            }
            if(operation === "x"){
                output = multiply(first, second)
                equationResult.textContent = output
                resetParams()
            }
            if(operation === "/"){
                output = divide(first, second)
                equationResult.textContent = output
                resetParams()
            }
        }
        else{
            if(this.textContent != "."){
                second += this.textContent
                secondNumber.textContent = second
            }
            else{
                if(second.includes(".")){
                    return
                }
                else{
                    second += this.textContent
                    secondNumber.textContent = second
                }
            }
        }
        console.log(first)
        console.log(second)
    }

}

reseter.addEventListener("click", resetAll)
delButton.addEventListener("click", delLast)