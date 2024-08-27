const display = document.getElementById('display');




function clearDisplay() {
    display.value = '';
}


function addToDisplay(value) {
    display.value += value;
}
function calculate() {
    try {
        display.value = eval(display.value);}
    catch (e) {        
        display.value = 'Error :(';
    }
}
function backspace() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.substring(0, display.length - 1);
}

// keyboard support
document.addEventListener("keydown", function(event) {
    let key = event.key;
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        addToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});


