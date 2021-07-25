# Execute Program: Array

## Basic

- `arr.push('x');` &rarr; adds at end, returns new arr.length, changes original arr
  - `arr.unshift('x');` &rarr; adds at front
- `arr.pop();` &rarr; removes last item, returns the removed end element, changes original arr
  - `arr.shift();`&rarr; removes first item
  - rotate items &rarr; `arr.unshift(arr.pop())`
- `arr.slice(2);` &rarr; returns copies in new arr, from begin index, empty if begin index is not in arr. No (arg) &rarr; slice whole arr. Doesn't change original arr
  - negative values count from back
- `arr.join()`&rarr; `,` is default. `null` & `undefined` turn to ''
- `arr.sort()`, `arr.reverse()` work for numbers & str, change original arr
- **concat**: returns new arr, doesn't change original
  - arr1 + arr2 &rarr; will convert both arr to str first! &rarr; `[1, 2] + [3]; // '1,23'`
    ```javascript
    [1, 2] + [3, 4]; // '1,23,4'
    [1, 2].concat([3, 4]); // [1, 2, 3, 4]
    ```
- includes &rarr; `['a', 'b'].includes('a'); // true`
- index: returns -1 if none found
  - `arr.indexOf('b')`
  - `arr.findIndex((val, val's index, whole arr)=>)` &rarr; can nest function, more nuanced/flexible item-description
    - can customise start-index for search, here after 2nd element: `arr.findIndex((elem, index) => index > 1 && elem === 'a');`
  - `arr.find( =>)` &rarr; returns 1st matching value

## Special

- **Empty** slots:

  - `new Array(1)[0]; // undefined`
  - `0 in ['a']; // true` or [undefined]
  - `0 in new Array(1).fill('a');; // true` or (undefined)
  - `0 in new Array(1); // false`
  - `(new Array(1)).length;; // 1`
  - replacing elements past the end of an array causes the array to grow
  - but _better_ use use new Array with fill

- `[1, 2].fill(3); //[3, 3]` overwrites each value, returns arr

  - create an array and immediately fill (otherwise this array would be undefined) &rarr; `new Array(3).fill('d'); // ['d', 'd', 'd']`
  - e.g. dynamically create x items for _progress bar_

- can add key-value pairs to an array, but **shouldn't**:

  ```javascript
  const arr = ['a', 'b', 'c'];
  arr.five = 5; //adds five: 5 to arr, but arr.length remains 3
  ```

  - `arr[-1] = 'd';` &rarr; assigns `'-1'='d'` key-value pair to arr
    - will show up in Object.keys(arr), .findIndex(f)
    - won't show up with forEach

- **flatten nested** arrays
  - **flat()** returns new array
    - `arr.flat();` &rarr; flattens 1 level,
    - `arr.flat(3);` 3 levels,
    - `arr.flat(Infinity);` all levels
    - same as:
      ```javascript
      function flatten(arrOuter) {
        const flattened = [];
        arrOuter.forEach((arrInner) => {
          arrInner.forEach((element) => {
            flattened.push(element);
          });
        });
        return flattened;
      }
      ```
  - **flatMap()** === `arr.map().flat()`, returns new array
    ```javascript
    const arr1 = [{ numbers: [1, 2] }, { numbers: [3, 4] }];
    arr.map((obj) => obj.numbers); // returns [[1, 2], [3, 4]]
    arr.flatMap((obj) => obj.numbers); // returns [1, 2, 3, 4]
    ```

## ES6 Methods:

- **forEach**
  ````javascript
    let sum = 0;
    function addToSum(n) {
      sum += n;
    }
    [1, 2, 3, 4].forEach(addToSum);
    sum;
  - check arr equality:
  ```javascript
    function eql(arr1, arr2) {
      let result = arr1.length === arr2.length;
      arr1.forEach((value, i) => {
        if (value !== arr2[i]) {
          result = false;
        }
      });
      return result;
    }
  ````
- **map** &rarr; returns new array. Often shorter code than forEach
- `arr.some(f)` & `arr.every()` &rarr; returns true or false. [].some(f) //false, .every //true
  - `!arr.some(f)` &rarr; none
- **sort** &rarr; changes & returns original array

  - if sorted in new arr &rarr; arr.slice().sort()
  - .sort() turns items into str & compares &rarr; "200" < "3"
  - custom f for numbers &rarr; .sort(f)
    - 0->10: f(a, b) {a-b}
    - 10->0: f(a, b) {b-a}
    - a->z: .sort()
    - words: f(a,b) {(a>b)? 1; -1} // abc < bc &rarr; moves item back/forth in arr
    - by arr.length: {a.length - b.length}
    - by property: arr.sort((a, b) => {return a.age - b.age;}).map(item => item.name)

- **reduce** returns number/str/arr/obj, a combination of arr

  - `arr.reduce((acc, x) => acc + x, 0)` &rarr; acc is accumulator
  - can store intermediate Sums in help-arr:
  - if no ,0) at end &rarr; sum is initiated with arr[0], first operation happens directly with arr[1]
  - [].reduce() with no ,0) &rarr; TypeError
  - words: can use like .join()
  - **reduceRight** &rarr; same for number-sums, but different for subtractions or str
  - better use loop if too complex reduce, even if more lines!

  ```javascript
  const intermediateSums = [];
  [1, 20, 300].reduce((sum, current) => {
    sum = sum + current;
    intermediateSums.push(sum);
    return sum;
  }, 0);
  intermediateSums; // RESULT: [1, 21, 321]

  [1, 200, 30].reduce((acc, current) => Math.max(acc, current)); // 200
  [true, false, true].reduce((acc, current) => acc && current); // false
  [true, false, true].reduce((acc, current) => acc || current); // true
  [false, false, false].reduce((acc, current) => acc || current); // false
  [[1], [2, 3], [4]].reduce((acc, current) => acc.concat(current)); // [1, 2, 3, 4]
  ```

## Lessons (48 &rarr; 8/day)

|   # | Lesson                        | Date        |
| --: | ----------------------------- | ----------- |
|  1. | Basics                        | Jul 16, Fr  |
|  2. | Empty                         | Jul 16, Fr  |
|  3. | Element access                | Jul 16, Fr  |
|  4. | Element assignment            | Jul 16, Fr  |
|  5. | Stack                         | Jul 16, Fr  |
|  6. | For each                      | Jul 16, Fr  |
|  7. | Equality                      | Jul 16, Fr  |
|  8. | Count                         | Jul 16, Fr  |
|  9. | Slice                         | Jul 16, Fr  |
| 10. | Copy array                    | Jul 16, Fr  |
|  -- | -------------------           | ----------  |
| 11. | Get first element             | Jul 18, So  |
| 12. | Slice with negative           | Jul 18, So  |
| 13. | Concat                        | Jul 18, So  |
| 14. | Includes                      | Jul 18, So  |
| 15. | Implement uniq                | Jul 18, So  |
| 16. | New and fill                  | Jul 18, So  |
| 17. | Fill dynamically              | Jul 18, So  |
| 18. | Arrays are objects            | Jul 18, So  |
| 19. | Map                           | Jul 18, So  |
| 20. | Square                        | Jul 18, So  |
|  -- | ----------------------------- | ----------  |
| 21. | Index of                      | Jul 19, Mo  |
| 22. | Join                          | Jul 19, Mo  |
| 23. | Filter                        | Jul 19, Mo  |
| 24. | Implement filter with forEach | Jul 19, Mo  |
| 25. | Even numbers                  | Jul 19, Mo  |
| 26. | Implement compact             | Jul 19, Mo  |
| 27. | Empty slots                   | Jul 19, Mo  |
|  -- | -------------------           | ----------- |
| 28. | Some and every                | Jul 21, Wed |
| 29. | Implement none                | Jul 21, Wed |
| 30. | Has null                      | Jul 21, Wed |
| 31. | Sort                          | Jul 21, Wed |
| 32. | Sort by word length           | Jul 21, Wed |
| 33. | Reduce                        | Jul 21, Wed |
| 34. | Sum squared odds              | Jul 21, Wed |
| 35. | All true                      | Jul 21, Wed |
|  -- | ----------------------------  | ----------- |
| 36. | Implement Filter With Reduce  | Jul 22, Thu |
| 37. | Implement Join                | Jul 22, Thu |
|  -- | -----------------             | ----------- |
| 38. | Shift                         | Jul 23, Fri |
| 39. | Rotate right                  | Jul 23, Fri |
| 40. | Reverse                       | Jul 23, Fri |
| 41. | Find index                    | Jul 23, Fri |
| 42. | Reduce right                  | Jul 23, Fri |
| 43. | Implement Reverse             | Jul 23, Fri |
| 44. | flat and flatMap              | Jul 23, Fri |
|  -- | ------                        | ----        |
| 45. | Find                          | Jul 25, Sun |
| 46. | Negative array indexes        | Jul 25, Sun |
| 47. | Implement find                | Jul         |
| 48. |                               | Jul         |

<!--
| | | |
| | | |
| | | |
| | | |
 -->
