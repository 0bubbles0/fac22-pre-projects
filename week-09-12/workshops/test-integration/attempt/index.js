const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculate(a, sign, b) {
  const aN = parseFloat(a);
  const bN = parseFloat(b);
  switch (sign) {
    case '+':
      return add(aN, bN);
    case '-':
      return subtract(aN, bN);
    case '*':
      return multiply(aN, bN);
    case '/':
      return divide(aN, bN);
    default:
      return 'Please enter a valid sign (+, -, *, /)';
  }
}

const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // get user input from form
  const data = new FormData(form);
  const a = data.get('a');
  const sign = data.get('sign');
  const b = data.get('b');

  // calculate result and update page
  const answer = calculate(a, sign, b);
  document.querySelector('#result').textContent = answer;
  event.target.reset();
});

// try writing form-function
function formData() {
  // get user input from form
  const data = new FormData(form);
  const a = data.get('a');
  const sign = data.get('sign');
  const b = data.get('b');

  // calculate result and update page
  const answer = calculate(a, sign, b);
  document.querySelector('#result').textContent = answer;
}
