// This javascript file is for all the Basic Arithemathic Calculations.....
// Made by : ANURAG VISHWAKARMA.....


let div = false;
let mult = false;
let add = false;
let sub = false;

let tempData = 0;
let accumulator = 0;

let resultScreen = document.getElementById('mainScreen');
let tempScreen = document.getElementById('tempOperand');
let optCode = document.getElementById('optCodeSymbol');



// Numeric Button Section.....
function num(inputVal) {
    accumulator = (accumulator * 10) + inputVal;
    resultScreen.innerHTML = accumulator;
}


// Clear & Backspace Buttons Section..........
function AllClear() {
    accumulator = 0;
    resultScreen.innerHTML = accumulator;
    tempScreen.innerHTML = "";
    optCode.innerHTML = "";
}
function Backspace() {
    accumulator = ((accumulator - (accumulator % 10)) / 10);
    resultScreen.innerHTML = accumulator;
}


// Operation Section i.e., Addition, Subtraction, Multiplication, Division.............
function Addition() {
    optCode.innerHTML = "+";
    tempData = accumulator;
    accumulator = 0;
    tempScreen.innerHTML = tempData;
    resultScreen.innerHTML = 0;
    add = true;
}
function Subtraction() {
    optCode.innerHTML = "-";
    tempData = accumulator;
    accumulator = 0;
    tempScreen.innerHTML = tempData;
    resultScreen.innerHTML = 0;
    sub = true;
}
function Multiply() {
    tempData = accumulator;
    optCode.innerHTML = "×";
    accumulator = 0;
    tempScreen.innerHTML = tempData;
    resultScreen.innerHTML = 0;
    mult = true;
}
function Division() {
    tempData = accumulator;
    optCode.innerHTML = "÷";
    accumulator = 0;
    tempScreen.innerHTML = tempData;
    resultScreen.innerHTML = 0;
    div = true;
}



// Equal Button Section.........
function EqualButton() {
    optCode.innerHTML = "=";

    if(add) {
        accumulator = (tempData + accumulator);
        add = false;
    } else if(sub) {
        accumulator = (tempData - accumulator);
        sub = false;
    } else if(mult) {
        accumulator = (tempData * accumulator);
        mult = false;
    } else if(div) {
        accumulator = (tempData / accumulator);
        div = false;
    }

    resultScreen.innerHTML = accumulator;
}

//Made by :  ANURAG VISHWAKARMA...