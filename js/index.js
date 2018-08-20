const display = document.querySelector('.calc .display');

document.querySelectorAll('.calc .num, .calc .operator, .calc .dot')
    .forEach( btn => btn.addEventListener('click', numOperatorClick));   
 
function numOperatorClick(e) {  
   display.value += e.target.innerText;   
}

document.querySelector('.calc .delete')
    .addEventListener('click', function() {
        display.value = '';
    });

document.querySelector('.calc .clear')
    .addEventListener('click', backspace);

function backspace() {
    const number = display.value;
    const len = number.length - 1;
    const newNumber = number.substring(0, len);
    display.value = newNumber;
}

document.querySelector('.calc .eq')
    .addEventListener('click', function(){
        display.value = eval(display.value);
    })