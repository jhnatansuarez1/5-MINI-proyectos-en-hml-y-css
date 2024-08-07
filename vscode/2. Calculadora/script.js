const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteDigit() {
    display.value = display.value.slice(0, -1);
}

function appendDigit(digit) {
    display.value += digit;
}

function appendOperator(operator) {
    display.value += ` ${operator} `;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
