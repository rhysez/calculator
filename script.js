// calculates two numbers
function calculate(a, b, operator){
    if (operator === "+") return a + b;
    else if (operator === "-") return a - b;
    else if (operator === "*") return a * b;
    else if (operator === "/") return a / b;
}

// stores the number from the input bar
//let displayValue = document.querySelector(".inputBar").innerHTML;

// stores refs to buttons
const buttons = {
    "button0": document.getElementById("button0"),
    "button1": document.getElementById("button1"),
    "button2": document.getElementById("button2"),
    "button3": document.getElementById("button3"),
    "button4": document.getElementById("button4"),
    "button5": document.getElementById("button5"),
    "button6": document.getElementById("button6"),
    "button7": document.getElementById("button7"),
    "button8": document.getElementById("button8"),
    "button9": document.getElementById("button9"),
    "buttonDel": document.getElementById("buttonDel"),
    "buttonDot": document.getElementById("buttonDot"),
    "buttonAdd": document.getElementById("buttonAdd"),
    "buttonSubtract": document.getElementById("buttonSubtract"),
    "buttonMultiply": document.getElementById("buttonMultiply"),
    "buttonDivide": document.getElementById("buttonDivide"),
    "buttonEquals": document.getElementById("buttonEquals"),
}

// buttons to return a string
buttons.button0.addEventListener("click", () => {
    console.log("0")
});
buttons.button1.addEventListener("click", () => {
    console.log("1")
});
buttons.button2.addEventListener("click", () => {
    console.log("2")
});
buttons.button3.addEventListener("click", () => {
    console.log("3")
});
buttons.button4.addEventListener("click", () => {
    console.log("4")
});
buttons.button5.addEventListener("click", () => {
    console.log("5")
});
buttons.button6.addEventListener("click", () => {
    console.log("6")
});
buttons.button7.addEventListener("click", () => {
    console.log("7")
});
buttons.button8.addEventListener("click", () => {
    console.log("8")
});
buttons.button9.addEventListener("click", () => {
    console.log("9")
});
buttons.buttonDel.addEventListener("click", () => {
    console.log("del")
});
buttons.buttonDot.addEventListener("click", () => {
    console.log(".")
});
buttons.buttonAdd.addEventListener("click", () => {
    console.log("+")
});
buttons.buttonSubtract.addEventListener("click", () => {
    console.log("-")
});
buttons.buttonMultiply.addEventListener("click", () => {
    console.log("*")
});
buttons.buttonDivide.addEventListener("click", () => {
    console.log("/")
});
buttons.buttonEquals.addEventListener("click", () => {
    console.log("=")
});