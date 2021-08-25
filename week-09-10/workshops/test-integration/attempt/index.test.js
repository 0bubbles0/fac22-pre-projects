/*
// Challenge 1, Task 2: Write tests with equal()-notEqual()-test() for each branch of calculate()-switch
- non-numerical input? --> Write test for calculate(str)
- change original calculate() so it can handle str-numbers (check parseFloat)
*/

test('Test calculate branches & str', () => {
  // equal(actual, expected, message);
  equal(calculate(9, '+', 3), 12);
  equal(calculate(3, '-', 1), 2);
  equal(calculate(2, '*', 3), 6);
  equal(calculate(6, '/', 3), 2);
  //invalid sign
  equal(calculate(6, 'a', 3), 2, 'Please enter a valid sign');
  // str input
  equal(calculate('9', '+', '3'), 12);
  equal(calculate(9, '+', '3'), 12);
  equal(calculate('9', '+', 3), 12);
});

// Challenge 2: Write test to simulate form result
//wouldn't want this to show up in console like that:
test('Test form works correctly', () => {
  const input1 = document.querySelector('#a');
  const input2 = document.querySelector('#b');
  const select = document.querySelector('#sign');
  const submitB = document.querySelector("button[type='submit']");
  const result = document.querySelector('#result');
  input1.value = '9';
  select.value = '-';
  input2.value = '5';
  submitB.click();
  equal(result.textContent, '12');
  result.textContent = '';
});

// test('Test form works correctly with index.js items', () => {});
