// script.js

// Variables to store the current input and the calculation result
let displayValue = '0';
let operator = null;
let firstOperand = null;

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Function to update the display
function updateDisplay() {
    display.textContent = displayValue;
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        // Handle clear button
        if (button.id === 'clear') {
            displayValue = '0';
            operator = null;
            firstOperand = null;
        }
        // Handle equals button
        else if (button.id === 'equal') {
            if (operator && firstOperand !== null) {
                const secondOperand = parseFloat(displayValue);
                displayValue = performCalculation(firstOperand, operator, secondOperand).toString();
                operator = null;
                firstOperand = null;
            }
        }
        // Handle operator buttons
        else if (button.classList.contains('operator')) {
            if (operator && firstOperand !== null) {
                const secondOperand = parseFloat(displayValue);
                displayValue = performCalculation(firstOperand, operator, secondOperand).toString();
            }
            operator = value;
            firstOperand = parseFloat(displayValue);
            displayValue = '0';
        }
        // Handle number and decimal point
        else {
            if (displayValue === '0' && value !== '.') {
                displayValue = value;
            } else {
                displayValue += value;
            }
        }

        updateDisplay();
    });
});

// Perform the calculation
function performCalculation(firstOperand, operator, secondOperand) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

// Initialize the display
updateDisplay();
