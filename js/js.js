const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function lol(){
    display.value = "Math.pow(" + display.value +"," ;
}

function sqrt(){
    try{
    display.value = Math.sqrt(display.value);
}
catch(error){
    display.value = "Error";
}
}

function log(){
    try{
    display.value = Math.log10(display.value)
}
catch(error){
    display.value = "Error";
}
}

function sin(){
    try{
    display.value = Math.sin(display.value)
}
catch(error){
    display.value = "Error";
}
}

function cos(){
    try{
    display.value = Math.cos(display.value)
}
catch(error){
    display.value = "Error";
}
}

function tan(){
    try{
    display.value = Math.tan(display.value)
}
catch(error){
    display.value = "Error";
}
}

function per(){
    display.value = display.value /100;
}

function calc(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
}