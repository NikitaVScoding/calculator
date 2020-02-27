/*import React from 'react';
import ReactDOM from 'react-dom';
import './calculator.css';
*/

/* This section defines how the character icons of interface are transformed into
   single line of characters for further calculations */
var arr = ["0"]; //container for characters
var numString = arr; //the copy that we will work with
var combined = ""; //container for final string
var result;

document.getElementById("zero").addEventListener('click', addChar0);
document.getElementById("zero").addEventListener('click', preventExtraChars);
document.getElementById("one").addEventListener('click', addChar1);
document.getElementById("one").addEventListener('click', preventExtraChars);
document.getElementById("two").addEventListener('click', addChar2);
document.getElementById("two").addEventListener('click', preventExtraChars);
document.getElementById("three").addEventListener('click', addChar3);
document.getElementById("three").addEventListener('click', preventExtraChars);
document.getElementById("four").addEventListener('click', addChar4);
document.getElementById("four").addEventListener('click', preventExtraChars);
document.getElementById("five").addEventListener('click', addChar5);
document.getElementById("five").addEventListener('click', preventExtraChars);
document.getElementById("six").addEventListener('click', addChar6);
document.getElementById("six").addEventListener('click', preventExtraChars);
document.getElementById("seven").addEventListener('click', addChar7);
document.getElementById("seven").addEventListener('click', preventExtraChars);
document.getElementById("eight").addEventListener('click', addChar8);
document.getElementById("eight").addEventListener('click', preventExtraChars);
document.getElementById("nine").addEventListener('click', addChar9);
document.getElementById("nine").addEventListener('click', preventExtraChars);
document.getElementById("plus").addEventListener('click', addCharPlus);
document.getElementById("plus").addEventListener('click', noDoublePlus);
document.getElementById("plus").addEventListener('click', preventExtraChars);
document.getElementById("minus").addEventListener('click', addCharMinus);
document.getElementById("minus").addEventListener('click', noDoubleMinus);
document.getElementById("minus").addEventListener('click', preventExtraChars);
document.getElementById("multiply").addEventListener('click', addCharMultiply);
document.getElementById("multiply").addEventListener('click', noDoubleMultiply);
document.getElementById("multiply").addEventListener('click', preventExtraChars);
document.getElementById("divide").addEventListener('click', addCharDivide);
document.getElementById("divide").addEventListener('click', noDoubleDivide);
document.getElementById("divide").addEventListener('click', preventExtraChars);
document.getElementById("sqrt").addEventListener('click', addSqrt);
document.getElementById("clear").addEventListener('click', clearField);
document.getElementById("deleteSymb").addEventListener('click', deleteSymb);
document.getElementById("powerOf").addEventListener('click', addPowerOf);
document.getElementById("openBracket").addEventListener('click', addCharOpenBracket);
document.getElementById("openBracket").addEventListener('click', bracketPattern);
document.getElementById("openBracket").addEventListener('click', preventExtraChars);
document.getElementById("closeBracket").addEventListener('click', addCharCloseBracket);
document.getElementById("closeBracket").addEventListener('click', bracketPattern);
document.getElementById("closeBracket").addEventListener('click', preventExtraChars);
document.getElementById("equals").addEventListener('click', calculateString);
document.getElementById("dot").addEventListener('click', addCharDot);
document.getElementById("dot").addEventListener('click', noDoubleDot);

function addChar0() {
    /*if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("0");
    } else {
        //numString.splice(0, numString.length);
        arr.push("0");
    }*/
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];

    if (lastChar === "0" && (previousChar === " + " 
        || previousChar === " - " 
        || previousChar === " * " 
        || previousChar === " / "
        || previousChar === "("
        || previousChar === undefined)) {
        arr.pop();
        arr.push("0");
    } else {
        arr.push("0");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar1() {
    /*if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("1");
    }*/
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];

    if (lastChar === "0" && (previousChar === " + " 
        || previousChar === " - " 
        || previousChar === " * " 
        || previousChar === " / "
        || previousChar === "("
        || previousChar === undefined)) {
        arr.pop();
        arr.push("1");
    } else {
        arr.push("1");
    }
    
    /*if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("1");
    } else {
        //numString.splice(0, numString.length);
        arr.push("1");
    }*/
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
    console.log("Last char is: " + lastChar);
    console.log("Previous char is: " + previousChar)
}

function addChar2() {
    /*if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("2");
    }*/
    /*if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("2");
    } else {
        //numString.splice(0, numString.length);
        arr.push("2");
    }*/
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];

    if (lastChar === "0" && (previousChar === " + " 
        || previousChar === " - " 
        || previousChar === " * " 
        || previousChar === " / "
        || previousChar === "("
        || previousChar === undefined)) {
        arr.pop();
        arr.push("2");
    } else {
        arr.push("2");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar3() {
    /*if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("3");
    }*/
    /*if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("3");
    } else {
        //numString.splice(0, numString.length);
        arr.push("3");
    }*/
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];

    if (lastChar === "0" && (previousChar === " + " 
        || previousChar === " - " 
        || previousChar === " * " 
        || previousChar === " / "
        || previousChar === "("
        || previousChar === undefined)) {
        arr.pop();
        arr.push("3");
    } else {
        arr.push("3");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar4() {
    /*if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("4");
    } else {
        //numString.splice(0, numString.length);
        arr.push("4");
    }*/
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];

    if (lastChar === "0" && (previousChar === " + " 
        || previousChar === " - " 
        || previousChar === " * " 
        || previousChar === " / "
        || previousChar === "("
        || previousChar === undefined)) {
        arr.pop();
        arr.push("4");
    } else {
        arr.push("4");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar5() {
    /*if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("5");
    }*/
    /*if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("5");
    } else {
        //numString.splice(0, numString.length);
        arr.push("5");
    }*/
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];

    if (lastChar === "0" && (previousChar === " + " 
        || previousChar === " - " 
        || previousChar === " * " 
        || previousChar === " / "
        || previousChar === "("
        || previousChar === undefined)) {
        arr.pop();
        arr.push("5");
    } else {
        arr.push("5");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar6() {
    /*if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("6");
    }*/
    /*if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("6");
    } else {
        //numString.splice(0, numString.length);
        arr.push("6");
    }*/
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];

    if (lastChar === "0" && (previousChar === " + " 
        || previousChar === " - " 
        || previousChar === " * " 
        || previousChar === " / "
        || previousChar === "("
        || previousChar === undefined)) {
        arr.pop();
        arr.push("6");
    } else {
        arr.push("6");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar7() {
    /*if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("7");
    }*/
    /*if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("7");
    } else {
        //numString.splice(0, numString.length);
        arr.push("7");
    }*/
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];

    if (lastChar === "0" && (previousChar === " + " 
        || previousChar === " - " 
        || previousChar === " * " 
        || previousChar === " / "
        || previousChar === "("
        || previousChar === undefined)) {
        arr.pop();
        arr.push("7");
    } else {
        arr.push("7");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar8() {
    /*if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("8");
    }*/
    /*if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("8");
    } else {
        //numString.splice(0, numString.length);
        arr.push("8");
    }*/
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];

    if (lastChar === "0" && (previousChar === " + " 
        || previousChar === " - " 
        || previousChar === " * " 
        || previousChar === " / "
        || previousChar === "("
        || previousChar === undefined)) {
        arr.pop();
        arr.push("8");
    } else {
        arr.push("8");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar9() {
    /*if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("9");
    }*/
    /*if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("9");
    } else {
        //numString.splice(0, numString.length);
        arr.push("9");
    }*/
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];

    if (lastChar === "0" && (previousChar === " + " 
        || previousChar === " - " 
        || previousChar === " * " 
        || previousChar === " / "
        || previousChar === "("
        || previousChar === undefined)) {
        arr.pop();
        arr.push("9");
    } else {
        arr.push("9");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharPlus() {
    arr.push(" + ");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharMinus() {
    arr.push(" - ");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharMultiply() {
    arr.push(" * ");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharDivide() {
    arr.push(" / ");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

// PART TWO

function addSqrt() {
    arr.push("&radic;(");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function clearField() {
    arr.splice(0, arr.length);
    arr.push("0")
    combined = "0";  //maybe i should just make it the way i have always done it?
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function deleteSymb() {
    arr.pop();
    if (arr.length < 1) {
        numString.push("0");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addPowerOf() {
    arr.push("&and;");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharOpenBracket() {
    let lastChar = arr[arr.length - 1]; // if statement could be replaced with for and an array with numbers
    let previousChar = arr[arr.length - 2];
    let testArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ")"];

    for (let countID = 0; countID < testArr.length; countID++) {
        if (lastChar === testArr[countID] && previousChar !== undefined) {
            arr.push(" * ");
            arr.push("(");
        } else if (lastChar === "0" && previousChar === undefined) {
            deleteSymbol();
            arr.push("(");
        }
    }

    if (lastChar === " + " || lastChar === " - " 
        || lastChar === " * " || lastChar === " / " || lastChar === "(") {
        arr.push("(");
    }

    /*if (lastChar !== " + " && lastChar !== " - " 
        && lastChar !== " * " && lastChar !== " / " 
        && lastChar !== "(" && !(arr[0] === "0")) {
        arr.push(" * ");
        arr.push("(")
    } else if (arr[0] === "0") {  //THERE IS A PROBLEM IN THIS CONDITION, THAT IS RELATED TO BUG #11
        arr.pop();
        arr.push("(");
    } else {
        arr.push("(");
    }*/

    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
    console.log("LAst char is^ " + lastChar);
}

function addCharCloseBracket() {
    let lastChar = arr[arr.length - 1];
    if (lastChar === "(") {
        arr.push("0");
        arr.push(")");
    } else {
        arr.push(")");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharDot() {
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];

    if (lastChar === ".") {
        noDoubleDot();
    }

    if (lastChar !== " + " && lastChar !== " - " 
        && lastChar !== " * " && lastChar !== " / " 
        && lastChar !== "(" && lastChar !== ")") {
        arr.push(".");
    } else if (lastChar === ")") {
        arr.push(" * ");
        arr.push("0");
        arr.push(".");
    } else {
        arr.push("0");
        arr.push(".");
    }

    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function deleteSymbol() {
    arr.pop();
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
}

function noDoubleDot() {
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];
    let lastDot = arr.lastIndexOf("."); 
    let previousDot = arr.lastIndexOf(".", lastDot - 1);
    let lastPlus = arr.lastIndexOf(" + ");
    let lastMinus = arr.lastIndexOf(" - ");
    let lastMultiply = arr.lastIndexOf(" * ");
    let lastDivide = arr.lastIndexOf(" / ");

    if (lastChar === "." && previousChar === ".") {
        deleteSymbol();
    }

    if (previousDot !== -1 && lastPlus === -1 
        && lastMinus === -1 && lastMultiply === -1 
        && lastDivide === -1) {
        deleteSymbol();
    }

    if (lastPlus > lastMinus && lastPlus > lastMultiply && lastPlus > lastDivide) {
        deleteDotIfPlus();
    }
    if (lastMinus > lastPlus && lastMinus > lastMultiply && lastMinus > lastDivide) {
        deleteDotIfMinus();
    }
    if (lastMultiply > lastMinus && lastMultiply > lastPlus && lastMultiply > lastDivide) {
        deleteDotIfMultiply();
    }
    if (lastDivide > lastMinus && lastDivide > lastMultiply && lastDivide > lastPlus) {
        deleteDotIfDivide();
    }

    console.log(lastDot);
    console.log(previousDot);
    console.log(lastPlus);
}

//YOU CAN DO ALL THESE FUNCTION WITH ONE CONSTRUCTOR
// also you can refer to this functions inside the ones that add operators
function deleteDotIfPlus() {
    let lastDot = arr.lastIndexOf("."); 
    let previousDot = arr.lastIndexOf(".", lastDot - 1);
    let lastPlus = arr.lastIndexOf(" + ");

    if (lastPlus < previousDot) {
        deleteSymbol();
    }
}

function deleteDotIfMinus() {
    let lastDot = arr.lastIndexOf("."); 
    let previousDot = arr.lastIndexOf(".", lastDot - 1);
    let lastMinus = arr.lastIndexOf(" - ");

    if (lastMinus < previousDot) {
        deleteSymbol();
    }
}

function deleteDotIfMultiply() {
    let lastDot = arr.lastIndexOf("."); 
    let previousDot = arr.lastIndexOf(".", lastDot - 1);
    let lastMultiply = arr.lastIndexOf(" * ");

    if (lastMultiply < previousDot) {
        deleteSymbol();
    }
}

function deleteDotIfDivide() {
    let lastDot = arr.lastIndexOf("."); 
    let previousDot = arr.lastIndexOf(".", lastDot - 1);
    let lastDivide = arr.lastIndexOf(" / ");

    if (lastDivide < previousDot) {
        deleteSymbol();
    }
}

function bracketPattern() {
    let lastOpenBracket = arr.lastIndexOf("(");
    let lastCloseBracket = arr.lastIndexOf(")");
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];
    let amountOfOpens = 0;
    let amountOfCloses = 0;

    if (lastOpenBracket === -1 && lastCloseBracket !== -1) {
        deleteSymbol();
    }

    if (lastChar === "(" && previousChar === ")") {
        deleteSymbol();
        arr.push(" * ");
        arr.push("(");
    }

    for (let countID = 0; countID < arr.length; countID++) {
        let possibleBracket = arr[countID];
        if (possibleBracket === "(") {
            amountOfOpens++;
        }
        if (possibleBracket === ")") {
            amountOfCloses++;
        }
    }

    if (amountOfCloses > amountOfOpens) {
        arr.pop();
        var combined = numString.join("");
        document.getElementById("btnInput").innerHTML = combined;
    }
    //NEW AND LATEST BUG FIX ATTENTION LOOK AT THIS HELL MAN
    for (let countID = 0; countID < arr.length; countID++) {
        let lastBracket = arr[countID];
        let previousBracket = arr[countID-1];
        if (lastBracket === ")" && previousBracket === "(") {
            arr[countID] = "0";
            arr.push(")");
        }
    }
}

// This function prevents unnecessary usage of dot and numbers in specific situations:
// (1 - nothing was added after dot) and (2 - a number was added after close bracket)

function preventExtraChars() {
    let lastChar = arr[arr.length - 1];
    let previousChar = arr[arr.length - 2];
    let checkArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 

    for (let countID = 0; countID < checkArr.length; countID++) {
        if (lastChar === checkArr[countID] && previousChar === ")") {
            deleteSymbol();
        }
    }

    for (let countID = 0; countID < arr.length; countID++) {
        if ((arr[countID] === " + " || arr[countID] === " - "
            || arr[countID] === " * " || arr[countID] === " / "
            || arr[countID] === ")") && arr[countID - 1] === ".") {
            arr.splice(countID - 1, 1);
        } 
    }

    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
}

// YOU CAN DO THIS WITH CONSTRUCTOR FUNCTION
function noDoublePlus() {

    let previousChar = arr[arr.length - 2];

    if (previousChar === " + " || previousChar === " - " 
        || previousChar === " * " || previousChar === " / ") {
        arr.pop();
        arr.pop();
        arr.push(" + ");
        var combined = numString.join("");
        document.getElementById("btnInput").innerHTML = combined;
    }
}

function noDoubleMinus() {

    let previousChar = arr[arr.length - 2];

    if (previousChar === " + " || previousChar === " - " 
        || previousChar === " * " || previousChar === " / ") {
        arr.pop();
        arr.pop();
        arr.push(" - ");
        var combined = numString.join("");
        document.getElementById("btnInput").innerHTML = combined;
    }
}

function noDoubleMultiply() {

    let previousChar = arr[arr.length - 2];

    if (previousChar === " + " || previousChar === " - " 
        || previousChar === " * " || previousChar === " / ") {
        arr.pop();
        arr.pop();
        arr.push(" * ");
        var combined = numString.join("");
        document.getElementById("btnInput").innerHTML = combined;
    }
}

function noDoubleDivide() {

    let previousChar = arr[arr.length - 2];

    if (previousChar === " + " || previousChar === " - " 
        || previousChar === " * " || previousChar === " / ") {
        arr.pop();
        arr.pop();
        arr.push(" / ");
        var combined = numString.join("");
        document.getElementById("btnInput").innerHTML = combined;
    }
}

function calculateString() {
    let amountOfOpens = 0;
    let amountOfCloses = 0;

    for (let countID = 0; countID < arr.length; countID++) {
        let possibleBracket = arr[countID];
        if (possibleBracket === "(") {
            amountOfOpens++;
        }
        if (possibleBracket === ")") {
            amountOfCloses++;
        }
        console.log(possibleBracket);
        console.log("last countID is: " + countID);
        console.log("Amount of open brackets: " + amountOfOpens);
        console.log("Amount of close brackets: " + amountOfCloses);
        console.log("This function is done with its work")
    }
    
    while(amountOfCloses < amountOfOpens) {
        arr.push(")");
        amountOfCloses++;
        //var combined = numString.join("");
        //document.getElementById("btnInput").innerHTML = combined;
    }
    bracketPattern();
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;

    var result = eval(combined);
    document.getElementById("result-field").innerHTML = result;

    console.log(arr);
}