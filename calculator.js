/*import React from 'react';
import ReactDOM from 'react-dom';
import './calculator.css';
*/

/* This section defines how the character icons of interface are transformed into
   single line of characters for further calculations */
var arr = []; //container for characters
var numString = arr; //the copu that we will work with
var combined = ""; //container for final string

document.getElementById("zero").addEventListener('click', addChar0);
document.getElementById("one").addEventListener('click', addChar1);
document.getElementById("two").addEventListener('click', addChar2);
document.getElementById("three").addEventListener('click', addChar3);
document.getElementById("four").addEventListener('click', addChar4);
document.getElementById("five").addEventListener('click', addChar5);
document.getElementById("six").addEventListener('click', addChar6);
document.getElementById("seven").addEventListener('click', addChar7);
document.getElementById("eight").addEventListener('click', addChar8);
document.getElementById("nine").addEventListener('click', addChar9);
document.getElementById("plus").addEventListener('click', addCharPlus);
document.getElementById("minus").addEventListener('click', addCharMinus);
document.getElementById("multiply").addEventListener('click', addCharMultiply);
document.getElementById("divide").addEventListener('click', addCharDivide);

document.getElementById("sqrt").addEventListener('click', addSqrt);
document.getElementById("clear").addEventListener('click', clearField);
document.getElementById("deleteSymb").addEventListener('click', deleteSymb);
document.getElementById("powerOf").addEventListener('click', addPowerOf);
document.getElementById("openBrace").addEventListener('click', addCharOpenBrace);
document.getElementById("closeBrace").addEventListener('click', addCharCloseBrace);
//document.getElementById("equals").addEventListener('click', calculate);
document.getElementById("dot").addEventListener('click', addCharDot);
document.getElementById("dot").addEventListener('click', noDoubleDot);

function addChar0 () {
    //arr.push("0");
    if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("0");
    } else {
        //numString.splice(0, numString.length);
        arr.push("0");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar1 () {
    /*arr.push("1");
    if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("1");
    }*/
    if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("1");
    } else {
        //numString.splice(0, numString.length);
        arr.push("1");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar2 () {
    //arr.push("2");
    /*if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("2");
    }*/
    if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("2");
    } else {
        //numString.splice(0, numString.length);
        arr.push("2");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar3 () {
    //arr.push("3");
    /*if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("3");
    }*/
    if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("3");
    } else {
        //numString.splice(0, numString.length);
        arr.push("3");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar4 () {
    //arr.push("4");
    if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("4");
    } else {
        //numString.splice(0, numString.length);
        arr.push("4");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar5 () {
    /*arr.push("5");
    if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("5");
    }*/
    if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("5");
    } else {
        //numString.splice(0, numString.length);
        arr.push("5");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar6 () {
    /*arr.push("6");
    if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("6");
    }*/
    if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("6");
    } else {
        //numString.splice(0, numString.length);
        arr.push("6");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar7 () {
    /*arr.push("7");
    if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("7");
    }*/
    if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("7");
    } else {
        //numString.splice(0, numString.length);
        arr.push("7");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar8 () {
    /*arr.push("8");
    if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("8");
    }*/
    if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("8");
    } else {
        //numString.splice(0, numString.length);
        arr.push("8");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addChar9 () {
    /*arr.push("9");
    if (numString[0] === "0") {
        numString.splice(0, numString.length);
        arr.push("9");
    }*/
    if (numString[0] === "0" && numString[1] !== ".") {
        numString.splice(0, numString.length);
        arr.push("9");
    } else {
        //numString.splice(0, numString.length);
        arr.push("9");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharPlus () {
    arr.push(" + ");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharMinus () {
    arr.push(" - ");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharMultiply () {
    arr.push(" * ");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharDivide () {
    arr.push(" / ");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

// PART TWO

function addSqrt () {
    arr.push("sqrt(");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function clearField () {
    arr.splice(0, arr.length);
    combined = "0";
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function deleteSymb () {
    arr.pop();
    if (arr.length < 1) {
        numString.push("0");
    }
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addPowerOf () {
    arr.push("&and;");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharOpenBrace () {
    arr.push("(");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharCloseBrace () {
    arr.push(")");
    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function addCharDot () {
    //arr.push(".");
    let lastChar = arr[arr.length - 1];

    //let lastDot = arr.lastIndexOf(".");
    //let beforeLastChar = arr.length - 2; 
    //let previousDot = arr.lastIndexOf(".", beforeLastChar);
    
    /*let lastPlus = arr.lastIndexOf(" + ");
    let lastMinus = arr.lastIndexOf(" - ");
    let lastMultiply = arr.lastIndexOf(" * ");
    let lastDivide = arr.lastIndexOf(" / ");*/

    if (lastChar === ".") {
        noDoubleDot();
    }

    if (lastChar === " + " || lastChar === " - " || lastChar === " * " || lastChar === " / ") {
        arr.push("0");
        arr.push(".");
    } else if (lastChar === undefined){
        arr.push("0");
        arr.push(".");
    } else {
        arr.push(".");
    }

    var combined = numString.join("");
    document.getElementById("btnInput").innerHTML = combined;
    console.log(arr);
}

function deleteSymbol() {
    arr.pop();
}

function noDoubleDot () {
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

    if (previousDot !== -1 && lastPlus === -1 && lastMinus === -1 && lastMultiply === -1 && lastDivide === -1) {
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