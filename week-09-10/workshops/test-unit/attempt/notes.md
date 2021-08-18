# Unit Testing Workshop

On: <https://learn.foundersandcoders.com/workshops/learn-unit-testing/>

## Summary

- Unit Testing:
  - have small, 1-step-functions
  - test each function does what it should, all edge cases

index.html:

    ```html
    <script src="test-helpers.js"></script>
    <!-- Include our actual code -->
    <script src="index.js"></script>
    <!-- Include the tests for our code (it's best to keep these separate) -->
    <script src="index.test.js"></script>
    ```

    ```js
    // Library test-helpers.js
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

    function test(name, testFunction) {
      console.group(name);
      testFunction();
      console.groupEnd(name);
    }
    ```

1. Test Pokémon-URL-maker

   ```js
   // index.js
   function makeUrl(name) {
     return 'https://pokeapi.co/api/v2/' + name;
   }
   // index.test.js
   test('Test makeURL', () => {
     equal(makeUrl('pikachu'), 'https://pokeapi.co/api/v2/pikachu', 'sth');
     equal(makeUrl('bulbasaur'), 'https://pokeapi.co/api/v2/bulbasaur', 'sth');
   });
   ```

2. Write function & tests that translates str --> obj with key-value pairs

   ```js
   // index.js
   function searchParamsToObject(str) {
     let result = {};
     const strParts = str.split('&');
     // console.log(strParts);
     for (let i = 0; i < strParts.length; i++) {
       const keyVal = strParts[i].split('=');
       const key = keyVal[0];
       const val = keyVal[1];
       result[key] = val;
       // console.log(keyVal);
     }
     return result;
   }

   //index.test.js
   test('Test searchParamsToObject Function', () => {
     const actual = searchParamsToObject(
       'name=oliver&email=hello@oliverjam.es'
     );
     const expected = { name: 'oliver', email: 'hello@oliverjam.es' };
     equal(actual.name, expected.name);
     equal(actual.email, expected.email);
   });
   ```

3. Write funciton & tests to check for Leap Year

   ```js
   function isLeapYear(year) {
     // console.log(year % 4 === 0);
     if (year % 4 !== 0 || year < 0) {
       return false;
     } else if (year % 100 === 0 && year % 400 !== 0) {
       return false;
     }
     return true;
   }

   function isLeapYear1(year) {
     if (typeof year !== 'number') return false;
     if (year < 0) return false;
     if (year % 400 === 0) return true;
     if (year % 100 === 0) return false;
     if (year % 4 === 0) return true;
     return false;
   }
   // index.test.js
   test('Test  isLeapYear Function', () => {
     equal(isLeapYear1(20), true);
     equal(isLeapYear1(1325), false);
     equal(isLeapYear1(1900), false);
     equal(isLeapYear1(2000), true);
     equal(isLeapYear1(-20), false);
     equal(isLeapYear1('love'), false);
   });
   ```
