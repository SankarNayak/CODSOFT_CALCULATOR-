// function sqrtFunction() {
//     const result = `Math.sqrt(${expression})`
//     display.value = `√${expression}`;
//     expression = result.toString();
// }

// function powerFunction(char) {
//     expression += char;
//     display.value = expression;
//     expression = result.toString();
// }

let display = document.getElementById('display');
let expression = '';

function appendCharacter(char) {
    expression += char;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

function calculateResult() {
    try {
        const result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

function sqrtFunction() {
    const value = display.value;
    const sqrtValue = Math.sqrt(parseFloat(value));
    display.value = sqrtValue;
}

function powerFunction() {
    expression += char;
    display.value = expression;
    expression = result.toString();
    const value = display.value;
    const squaredValue = Math.pow(parseFloat(value), 2);
    display.value = squaredValue;
}