# Integration Testing Workshop Notes

- Workshop: <https://learn.foundersandcoders.com/workshops/learn-integration-testing/>

## Summary

- handle multiple file: look at html, look at order of `<script>`, go through each file and run code in order &rarr; imagine it a bit

## Notes

- Only unit-testing can miss that overall app doesn't work!
- **Integration Testing**: Do whole code features work? Check multiple code units simultaneously

### Testing application logic

- coordinate several code bits
- can use **branching logic**
- e.g. Calculator test function

  ```js
  //pre-declare add(), subtract(), multiply(), divide()
  function calculate(a, sign, b) {
    switch(sign) {
      case "+": return add(a, b);
      ...
      default: return "Please enter valid sign (+, -, *, /)";
    }
  }
  // Write test for calculate
  ```

- equal function &rarr; is an **assertion**
- test &rarr; group assertions &rarr; can give message "10/20 passed"

#### Challenge

In index.test.js, Write **tests** with equal()-notEqual()-test() for each branch of **calculate()-switch**

- non-numerical input? --> Write **test** for **calculate(str)**
- **change original** calculate() so it can handle str-numbers (check parseFloat)

### Testing UI logic

- simulate a real browser DOM-update
- find input, change input value to "test", click submit, check result-display

```js
test("Uppercases the user's input and updates the page", () => {
  const input = document.querySelector('input'); // step 1
  input.value = 'test'; // step 2
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click(); // step 3
  const result = document.querySelector('#result');
  equal(result.textContent, 'TEST'); // step 4
  result.textContent = ''; // reset the page so it doesn't affect the page/other tests
});
```

#### Challenge

- write test to see if form works correctly

```js
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
```
