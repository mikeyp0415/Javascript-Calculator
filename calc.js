
    var preOutput = "";

    var Output = 0;

    var Output1 = 0;

    var OutputAdd = 0;

    var OutputSubtract = 0;

    var OutputMultiply = 0;

    var OutputDivide = 0;


function Go7() {

    if (document.getElementById("Seven").click) {
        preOutput += "" + 7;
    } 
document.getElementById("Output2").innerHTML = preOutput;

}

function Go8() {

    if (document.getElementById("Eight").click) {
        preOutput += "" + 8;
    } 
document.getElementById("Output2").innerHTML = preOutput;

}

function Go9() {

    if (document.getElementById("Nine").click) {
        preOutput += "" + 9;
    } 
document.getElementById("Output2").innerHTML = preOutput;

}

function Go4() {

    if (document.getElementById("Four").click) {
        preOutput += "" + 4;
    } 
document.getElementById("Output2").innerHTML = preOutput;

}

function Go5() {

    if (document.getElementById("Five").click) {
        preOutput += "" + 5;
    } 
document.getElementById("Output2").innerHTML = preOutput;

}

function Go6() {

    if (document.getElementById("Six").click) {
        preOutput += "" + 6;
    } 
document.getElementById("Output2").innerHTML = preOutput;

}

function Go1() {

    if (document.getElementById("One").click) {
        preOutput += "" + 1;
    } 
document.getElementById("Output2").innerHTML = preOutput;

}

function Go2() {

    if (document.getElementById("Two").click) {
        preOutput += "" + 2;
    } 
document.getElementById("Output2").innerHTML = preOutput;

}

function Go3() {

    if (document.getElementById("Three").click) {
        preOutput += "" + 3;
    } 
document.getElementById("Output2").innerHTML = preOutput;

}

function Go0() {

    if (document.getElementById("Zero").click) {
        preOutput += "" + 0;
    } 
document.getElementById("Output2").innerHTML = preOutput;

}

function Add() {

    if (document.getElementById("Add").click) {
        OutputAdd = preOutput;
        preOutput = "";
    } 
document.getElementById("Output2").innerHTML = OutputAdd;
}

function Subtract() {

    if (document.getElementById("Subtract").click) {
        OutputSubtract = preOutput
        preOutput = "";
    } 
document.getElementById("Output2").innerHTML = OutputSubtract;
}

function Multiply() {

    if (document.getElementById("Multiply").click) {
        OutputMultiply = preOutput;
        preOutput = "";
    } 
document.getElementById("Output2").innerHTML = 0;
}

function Divide() {

    if (document.getElementById("Divide").click) {
        OutputDivide = preOutput;
        preOutput = "";
    } 
document.getElementById("Output2").innerHTML = 0;
}


function Decimal() {

    if (document.getElementById("Decimal").click) {
        preOutput += "."
    } 
document.getElementById("Output2").innerHTML = preOutput;
}




function Equals() {

    if (OutputAdd > OutputSubtract) {
        if (document.getElementById("Equals").click) {
            var OutputEquals = Number(OutputAdd) + Number(preOutput);
            document.getElementById("Output2").innerHTML = OutputEquals;
        } 
    } else if (OutputSubtract > OutputAdd) {
        if (document.getElementById("Equals").click) {
            var OutputEquals = Number(OutputSubtract) - Number(preOutput);
            document.getElementById("Output2").innerHTML = OutputEquals;
        } 
    } else if (OutputMultiply > OutputAdd) {
        if (document.getElementById("Equals").click) {
            var OutputEquals = Number(OutputMultiply) * Number(preOutput);
            document.getElementById("Output2").innerHTML = OutputEquals;
        } 
    } else if (OutputDivide > OutputAdd) {
        if (document.getElementById("Equals").click) {
            var OutputEquals = Number(OutputDivide) / Number(preOutput);
            document.getElementById("Output2").innerHTML = OutputEquals;
        } 
    }
}


function Reload() {
preOutput = "";

 Output = 0;

Output1 = 0;

OutputAdd = 0;

OutputSubtract = 0;

OutputMultiply = 0;

 OutputDivide = 0;

 document.getElementById("Output2").innerHTML = 0;
}