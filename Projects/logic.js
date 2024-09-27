
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){

    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
function negativeValue(){
    if(display.value != ""){
        display.value = String(-parseFloat(display.value))
    }
}
function clearLastEntry(){
    display.value = display.value.slice(0,-1);
}