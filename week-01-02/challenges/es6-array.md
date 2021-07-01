# ES6 Array methods & For loops

## Content
- Task
- Questions
- Reading List
- Notes
  - forEach()
    - Example
    - Description
    - Restrictions, specialties
    - Pro's - Con's
    - for loop
    - Interview questions
  - map()
  - filter()
  - reduce(), reduceRight()
  - every(), some()
  - find(), findIndex(), 
- Challenge 
  - Ideas
  - Sample Question
  - Test Writing
  - Make Setup
  - Bonus: Codewars?

## Task
- ES6 array methods: map, reduce, filter, forEach 
- implement with just a for-loop: 
- Research, 
- Set 1 challenge (Replit, function shell, test cases)

## Questions
- How use helpFunction(total, value, index, array)
- How to use this with accessing things inside objects


## Reading List
- [x] Higher Order Functions (*fcc*): <https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b>
- [x] HOF and Iterators (*Codecademy*) <https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet>
- [x] Array Iteration (*w3schools*): <https://www.w3schools.com/js/js_array_iteration.asp>
  - [x] forEach() (*w3schools*): <https://www.w3schools.com/jsref/jsref_foreach.asp>


## Keywords
Function | is a data type &rarr; can be assigned as values & invoked
Callback Function | passed as argument into another function
Higher order function | A function that accepts/returns/operates-on another function
. | Can use them as properties/methods
. | `add = (x) => (y) => x + y;` &rarr; `add(10)(20);`
. | `[1, 2, 3, 4].filter(isEven);`
currying | 

## Notes
- Example
- Description
- Restrictions, specialties
- Pro's - Con's
- for loop
- Interview questions

### forEach()
- Example
  ```javascript
  var text = "";
  var arr1 = [45, 4, 9];
  arr1.forEach(value => {txt = txt + value + "<br>";});
  ```
  OR &rarr; For each element in the array: update the value with 10 times the original value:
  ```javascript
  var numbers = [65, 44, 12, 4];
  function myFunction(item, index, arr) {
    arr[index] = item * 10;
  } 
  numbers.forEach(myFunction);
  ```
- Description
  - Use a function on each arr[item]
    - helpFunction(value, index, array)
- Restrictions, specialties
- Pro's - Con's
- for loop
- Interview questions


### map()
- Example
  `var numbers2 = numbers1.map(value => value *2);`
- Description
  - Use a function on each arr[item]
    - helpFunction(value, index, array)
  - doesn't change original array
  - can chain .reduce(), .sort(), .filter() behind it
- Restrictions, specialties
- Pro's - Con's
- for loop
  ```javascript
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    let insert = arr1[i] * 2;
    arr2.push(insert);
  }
  ```
  - With higher-order function:
    ```javascript
    getName = (user) => user.name;
    usernames = [];
    
    for (let i = 0; i < users.length; i++) {
    const name = getName(users[i]);
    usernames.push(name);
    }
    
    console.log(usernames);  // ["Yazeed", "Sam", "Bill"]
    //OR:
    usernames = users.map(getName);
    ```
- Interview questions

  ```javascript

  ```
### filter()
- Example
  `var arr2 = arr1.filter(value => value > 18);`
- Description
  - copy each item that passes the testFunction
    - testFunction(value, index, array) &rarr; returns true/false
- Restrictions, specialties
- Pro's - Con's
- for loop
  ```javascript
  let bOver18 = [];
  let condition = (item) => item.toLowerCase().startsWith('b');
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 18) {
      if (condition(arr[i])) {
        bOver18.push(arr1[i]);
      }
    }
  }
  ```
- Interview questions


### reduce(), reduceRight()
- Example
  ```javascript
  let arr1 = [45, 4, 9];
  let sum = arr1.reduce((total, value) => total + value, 0);
  console.log(sum); // 58
  ```
- Description
  - make all items into 1 value &rarr; left-to-right (`.reduce()`) OR right-to-left (`.reduceRight()`)
  - doesn't change original arr1
  - can give 0 as optional fallback if no total happens 
- Restrictions, specialties
- Pro's - Con's
- for loop
  ```javascript
  let arr1 = [45, 4, 9];
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  ```

- Interview questions


### every(), some()
### find(), findIndex()



## Challenge 
### Ideas
### Sample Question
### Test Writing
### Make Setup: Replit, function shell
### Bonus: Codewars?