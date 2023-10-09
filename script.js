const answerDiv = document.querySelector('.answer');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
button.addEventListener('click', () => {
if (button.value === '=') {
answerDiv.textContent = eval(answerDiv.textContent);
} else if (button.value === 'AC') {
answerDiv.textContent = '0';
} else {
if (answerDiv.textContent === '0') {
answerDiv.textContent = '';
}
answerDiv.textContent += button.value;
}
});
});