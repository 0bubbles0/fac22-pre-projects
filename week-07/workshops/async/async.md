# Functions, Callbacks, Async

## Content

- Questions
- Reading List
- Summary
- Notes

## Questions

## Reading List

- [x] Workshop: <https://learn.foundersandcoders.com/workshops/functions-callbacks-async/>

## Summary

## Notes

### Functions

- (first-class) function is a variable &rarr; interesting for async code
- **Declare**:

  - All same:
    ```javascript
    const num = 1;
    function returnsOne() {
      return 1;
    }
    const returnsOne = () => 1;
    ```
  - Inline:
    - use as an argument, can't reuse
    - e.g. EventListener
      ```javascript
      logger(function () {
        return 1;
      });
      logger(() => 1);
      ```

- **Call**:
  - can reuse/delay
  - makes difference when passing functions as arguments
    - don't always want to call function when passing it
  - `returnsOne;` &rarr; returns copy of function-code
  - `returnsOne();` &rarr; actual **calling**, returns result of running function, can have argument
    ```javascript
    window.addEventListener('click', mousePos); //will auto-call any function inside
    window.addEventListener('click', mousePos()); // undefined, because 2nd position expected to be function-block, not return-value
    ```
- **Return** statement:

  - with &rarr; var is replaced with return value
  - no &rarr; `undefined`

- **Callbacks**

  - f(c) &rarr; nested function
  - `x.addEventListener('click', c);` &rarr; only when clicked, runs c(event-object)
  - can use for async code to delay it
    ```javascript
    const one = (f) => f(1);
    one((x) => console.log(x));
    //OR
    const log = (x) => console.log(x);
    one(log);
    ```

- **Asynchronous callbacks**

  - usually, JS is single-threaded &rarr; everything happens immediately & in order
  - async can move things back in queue
  - `setTimeout(() => f(n), 1000);`

    - global function
    - time &rarr; 1000ms (=== 1s), relative to parent?, none moves behind normal functions
    - can nest these into each other (like a recursive function) &rarr; stagger delay

      ```javascript
      function light1(colour, callback) {
        setTimeout(() => {
          console.log(colour);
          if (callback) {
            callback(); //like recursive function
          }
        }, 1000);
      }

      light1('amber', () => {
        light1('green', () => {
          console.log('finished'); //breaks recursive function
        });
      });
      ```

### Workshop

#### Mini 1

```javascript
const returnsOne = () => 1;
function logger(arg) {
  console.log(arg);
}
logger(returnsOne); //shows returnsOne
logger(returnsOne()); //shows 1
```

#### Mini 2

```javascript
const logger = (arg) => console.log(arg);
logger(returnsOne()); // 1
const logger1 = (arg) => console.log(typeof arg);
logger1(returnsOne()); // number
```

#### Mini 3

```javascript
const mousePos = (event) => {
  console.log(event.clientX, event.clientY);
};
window.addEventListener('click', mousePos); //will auto-call any function inside
window.addEventListener('click', (event) => mousePos(event));
```

#### Mini 4

```javascript
const one = (f) => f(1);
one((x) => console.log(x));
//OR
const log = (x) => console.log(x);
one(log);
```

#### Mini 5

```javascript
function asyncDouble(n, f) {
  setTimeout(() => f(n * 2), 1000); //can't return double, because won't be processed in time
}
asyncDouble(10, (x) => console.log(x));
```

#### Workshop

- **Task**: 1sec between each green - amber - red - amber - green - finished
- staggers interval

```javascript
function light1(colour, callback) {
  setTimeout(() => {
    console.log(colour);
    if (callback) {
      callback(); //like recursive function
    }
  }, 1000);
}

light1('green', () => {
  light1('amber', () => {
    light1('red', () => {
      light1('amber', () => {
        light1('green', () => {
          console.log('finished'); //breaks recursive function
        });
      });
    });
  });
});
```
