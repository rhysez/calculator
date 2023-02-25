// calculates the user's choices
function calculate(a, operator, b){
    if (operator === " + ") return a + b;
    else if (operator === " - ") return a - b;
    else if (operator === " * ") return a * b;
    else if (operator === " / ") return a / b;
}

// stores DOM button refs
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
// stores user button choices
let choices = [];
let operators = [];

// user displayed input
let displayInput = document.querySelector(".inputBar");

// buttons display a string on click, adds number to choices[]
buttons.button0.addEventListener("click", () => {
    displayInput.textContent += "0";
    choices.push(0);
});
buttons.button1.addEventListener("click", () => {
    displayInput.textContent += "1";
    choices.push(1);
    displayInput.style.color = "black";
});
buttons.button2.addEventListener("click", () => {
    displayInput.textContent += "2";
    choices.push(2);
    displayInput.style.color = "black";
});
buttons.button3.addEventListener("click", () => {
    displayInput.textContent += "3";
    choices.push(3);
    displayInput.style.color = "black";
});
buttons.button4.addEventListener("click", () => {
    displayInput.textContent += "4";
    choices.push(4);
    displayInput.style.color = "black";
});
buttons.button5.addEventListener("click", () => {
    displayInput.textContent += "5";
    choices.push(5);
    displayInput.style.color = "black";
});
buttons.button6.addEventListener("click", () => {
    displayInput.textContent += "6";
    choices.push(6);
    displayInput.style.color = "black";
});
buttons.button7.addEventListener("click", () => {
    displayInput.textContent += "7";
    choices.push(7);
    displayInput.style.color = "black";
});
buttons.button8.addEventListener("click", () => {
    displayInput.textContent += "8";
    choices.push(8);
    displayInput.style.color = "black";
});
buttons.button9.addEventListener("click", () => {
    displayInput.textContent += "9";
    choices.push(9);
    displayInput.style.color = "black";
});
buttons.buttonDel.addEventListener("click", () => {
    displayInput.textContent = "";
    choices.length = 0;
    operators.length = 0;
});
buttons.buttonDot.addEventListener("click", () => {
    displayInput.textContent = "I do nothing!";
    displayInput.style.color = "black";
});
buttons.buttonAdd.addEventListener("click", () => {
    displayInput.textContent += " + ";
    operators.push(" + ")
    displayInput.style.color = "black";
});
buttons.buttonSubtract.addEventListener("click", () => {
    displayInput.textContent += " - ";
    operators.push(" - ");
    displayInput.style.color = "black";
});
buttons.buttonMultiply.addEventListener("click", () => {
    displayInput.textContent += " x ";
    operators.push(" * ")
    displayInput.style.color = "black";
});
buttons.buttonDivide.addEventListener("click", () => {
    displayInput.textContent += " / ";
    operators.push(" / ")
    displayInput.style.color = "black";
});

// invokes calculate() with arguments
buttons.buttonEquals.addEventListener("click", () => {
    displayInput.textContent = calculate(choices[0], operators[0], choices[1]);
    displayInput.style.color = "green";
});

// dark mode button
let pageBody = document.querySelector("body");
let darkMode = document.getElementById("darkMode");
let footerText = document.querySelector("h3")
darkMode.addEventListener("click", () => {
    pageBody.style.background = "black";
    footerText.style.color = "snow";
});

