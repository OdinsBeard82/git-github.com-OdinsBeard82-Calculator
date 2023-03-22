const answer = document.querySelector('.answer');
const buttons = document.querySelectorAll('button');

let currentAnswer = '0';
let operator = '';
let previousNumber = '';
let currentNumber = '';

function updateDisplay() {
    answer.textContent = currentAnswer;
}

function clear() {
    currentAnswer = '0';
    operator = '';
    previousNumber = '';
    currentNumber = '';
}

function calculate() {
    switch (operator) {
        case '+':
            currentAnswer = String(Number(previousNumber) + Number(currentNumber));
            break;
        case '-':
            currentAnswer = String(Number(previousNumber) - Number(currentNumber));
            break;
        case 'x':
            currentAnswer = String(Number(previousNumber) * Number(currentNumber));
            break;
        case '/':
            currentAnswer = String(Number(previousNumber) / Number(currentNumber));
            break;
        case '%':
            currentAnswer = String(Number(previousNumber) % Number(currentNumber));
            break;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('add')) {
            operator = '+';
            previousNumber = currentAnswer;
            currentAnswer = '';
        }
        else if (button.classList.contains('subtract')) {
            operator = '-';
            previousNumber = currentAnswer;
            currentAnswer = '';
        }
        else if (button.classList.contains('multipy')) {
            operator = 'x';
            previousNumber = currentAnswer;
            currentAnswer = '';
        }
        else if (button.classList.contains('divide')) {
            operator = '/';
            previousNumber = currentAnswer;
            currentAnswer = '';
        }
        else if (button.classList.contains('%')) {
            operator = '%';
            previousNumber = currentAnswer;
            currentAnswer = '';
        }
        else if (button.classList.contains('equals')) {
            currentNumber = currentAnswer;
            calculate();
            operator = '';
            previousNumber = '';
            currentNumber = '';
       
