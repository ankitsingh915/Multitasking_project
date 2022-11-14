// function to display values on screen
function dis(value){
    document.getElementById("screen").value += value;
}


//function for evaulation
function solve(){
    x= document.getElementById("screen").value;
    y= eval(x);
    document.getElementById('screen').value = y;
}


//function for clearing the screen
function clr(){
    document.getElementById('screen').value=""
}


//function for backspace button
function backspace(){
    screen= document.getElementById('screen').value;
    document.getElementById('screen').value= screen.substring(0, screen.length -1);
}