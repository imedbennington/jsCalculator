const display = document.getElementById('display');

function appendOnDisplay(input){
    display.value+=input;
    console.log(display);
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value="error";
    }
}