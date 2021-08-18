# Test Library Workshop

## Content

- Reading List
- Summary
- Notes
  - Setup
  - Begin to automate
  - Make it reusable
  - Separating tests
  - Custom messages

## Reading List

- [x] Workshop (_fac_):<https://learn.foundersandcoders.com/workshops/learn-testing/>

## Summary

- **Why test**

  - saves time, cost
  - later fixing/refactoring is harder than original writing
  - **test-driven development**: writing tests can guide towards solution
  - **Interview question**: Why is this not working? &rarr; _"Is there a test?"_

- **What is a test**

  - Not: `if (!ok) {throw error}`
  - Yes: Testing from outside, from `<script>` or folder, framework
  - **Bug reports**: What code failed? What should/did it do?
  - **Edge cases**: unusual values, network behaviour

- **Test types**

  - **Manual**: Quality Assurance &rarr; run, click, check &rarr; but time & mistakes!
  - **Automated**:
    - Testing **frameworks**: run code compared to an expected outcome
    - **Unit** Testing: small, isolated code. But all tests passing can still have broken app
    - **Integration** testing: several different units combined: UI, DOM interface, network requests
    - **End-to-end** testing: flaky, slow

- **Testing Library**

  ```js
  function equalM(actual, expected, message) {
    if (actual === expected) {
      const defaultM = `Pass: expected and got ${expected}.`;
      console.info('Pass: ' + (message || defaultM));
    } else {
      const defaultM = `Fail: expected ${expected}, but got ${actual}.`;
      console.error('Fail: ' + (message || defaultM));
    }
  }
  function notEqualM(actual, expected, message) {
    if (actual !== expected) {
      const defaultM = `Pass: expected ${expected} is different from ${actual}.`;
      console.info('Pass: ' + (message || defaultM));
    } else {
      const defaultM = `Fail: expected ${expected} is same as ${actual}.`;
      console.error('Fail: ' + (message || defaultM));
    }
  }

  test('Correctly squares integers', () => {
    const result = square(2);
    const expected = 4;
    equal(result, expected, 'square(2) should return 4');
  });
  ```

## Notes

### Setup

- `console.log(f(x));`
- repeat for each x
- hassle for many x, difficult maths

### Begin to automate

```js
function testSq(x, exp) {
  let expected = exp;
  let result = square(x);
  if (expected !== result) {
    console.error(
      `Failed square(${x}): expected ${expected}, but got ${result}.`
    );
  }
}
```

- still a lot of typing

### Make it reusable

- equal(x, exp) & notEqual(x, exp) for any function

```js
function equal(actual, expected) {
  if (actual === expected) {
    console.info(`Pass: expected and got ${expected}.`);
  } else {
    console.error(`Fail: expected ${expected}, but got ${actual}.`);
  }
}
equal(square(3.5), 12.25); // Pass
equal(square(3.5), 9999); // Fail

function notEqual(actual, expected) {
  if (actual !== expected) {
    console.info(`Pass: expected ${expected} is different from ${actual}.`);
  } else {
    console.error(`Fail: expected ${expected} is same as ${actual}.`);
  }
}
```

### Separating tests

- test(text, c) where c holds test-code

```js
function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd();
}
test('Correctly squares integers', () => {
  const result = square(2);
  const expected = 4;
  equal(result, expected);
});
```

### Custom feedback messages

- equal(actual, expected, message) & NotEqual(actual, expected, message)
- Now have Testing Library

  ```js
  function equal(actual, expected, message) {
    if (actual === expected) {
      const defaultMessage = `Expected ${expected} and received ${actual}`;
      console.info('Pass: ' + (message || defaultMessage));
    } else {
      const defaultMessage = `Expected ${expected} but received ${actual} instead`;
      console.error('Fail: ' + (message || defaultMessage));
    }
  }

  function notEqual(actual, expected, message) {
    if (actual !== expected) {
      const defaultMessage = `${expected} is different to ${actual}`;
      console.info('Pass: ' + (message || defaultMessage));
    } else {
      const defaultMessage = `${expected} is the same as ${actual}`;
      console.error('Fail: ' + (message || defaultMessage));
    }
  }

  test('Correctly squares integers', () => {
    const result = square(2);
    const expected = 4;
    equal(result, expected, 'square(2) should return 4');
  });
  ```
