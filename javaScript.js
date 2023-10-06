const calcButtons = document.getElementById("calcButtons")
const reseter = document.getElementById("clear")
let firstNumber = document.getElementById("first")
let equationOperator = document.getElementById("operator")
let secondNumber = document.getElementById("second")
let equationResult = document.getElementById("equationResult")

const butIcons = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "x", ".", 0, "=", "/"]
let first = ""
let second = ""
let operation = undefined
let step = 0
let output = 0

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
    first = ""
    second = ""
    step = 0
    output = 0
}
function operate(){
    if(step === 0){
        if(output != 0)
            if(this.classList.contains("operatorButton")){
                first = output
                firstNumber.textContent = first
                secondNumber.textContent = ""
                operation.textContent = ""

            }
            else{
                firstNumber.textContent = ""
                secondNumber.textContent = ""
                operation.textContent = ""
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


        //CLEAN UP THIS AREA OF THE CODE, CAN COMBINE THESE FUNCTIONS ^^^^^^^^^^^^


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
        console.log(step)
    }

}

reseter.addEventListener("click", resetAll)