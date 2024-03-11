let currentDisplay = "";
let storedNumber = "";
let currentOperation = "";

function addNumber(number) {
    currentDisplay += number;
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = "";
    storedNumber = "";
    currentOperation = "";
    updateDisplay();
}

function calculate(operation) {
    if (!storedNumber) {
        storedNumber = currentDisplay;
        currentDisplay = "";
    }
    currentOperation = operation;
}

function calculateResult() {
    if (!storedNumber || !currentDisplay) {
        return;
    }

    switch (currentOperation) {
        case 'add':
            currentDisplay = parseFloat(storedNumber) + parseFloat(currentDisplay);
            break;
        case 'subtract':
            currentDisplay = parseFloat(storedNumber) - parseFloat(currentDisplay);
            break;
        case 'multiply':
            currentDisplay = parseFloat(storedNumber) * parseFloat(currentDisplay);
            break;
        case 'divide':
            if (currentDisplay === "0") {
                alert("Error! Division by zero is not allowed.");
                return;
            }
            currentDisplay = parseFloat(storedNumber) / parseFloat(currentDisplay);
            break;
    }

    storedNumber = "";
    currentOperation = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').innerText = currentDisplay;
}