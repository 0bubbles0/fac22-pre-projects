# Execute Program: Array

- `arr.push('x');` &rarr; returns new arr.length
- `arr.pop();` &rarr; returns the removed element
- `arr.slice(2);` &rarr; returns copies in new arr, from begin index, empty if begin index is not in arr. No (arg) &rarr; slice whole arr. Doesn't change original arr 
  - negative values count from back
- concat: returns new arr, doesn't change original
  - arr1 + arr2 &rarr; will convert both arr to str first! &rarr; `[1, 2] + [3]; // '1,23'`
    ```javascript
      [1, 2] + [3, 4]; // '1,23,4'
      [1, 2].concat([3, 4]); // [1, 2, 3, 4]
    ```
- includes &rarr; `['a', 'b'].includes('a'); // true`
- `[1, 2].fill(3); //[3, 3]` overwrites each value, returns arr
  - create an array and immediately fill (otherwise this array would be undefined) &rarr; `new Array(3).fill('d'); // ['d', 'd', 'd']` 
  - e.g. dynamically create x items for *progress bar*
- can add key-value pairs to an array, but **shouldn't**:
  ```javascript
    const arr = ['a', 'b', 'c'];
    arr.five = 5; //adds five: 5 to arr, but arr.length remains 3
  ```
- ES6 Methods:
  - forEach
      ```javascript
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
      ```
  - map &rarr; returns new array. Often shorter code than forEach

  <!--
  ```javascript
  ```
  ```javascript
  ```
  ```javascript
  ```
  -->

  ### Lessons (48 &rarr; 8/day)

| # | Lesson | Date |
| ---: | --- | --- |
| 1. | Basics | Jul 16, Fr |
| 2. | Empty | Jul 16, Fr |
| 3. | Element access| Jul 16, Fr |
| 4. | Element assignment| Jul 16, Fr |
| 5. | Stack | Jul 16, Fr |
| 6. | For each| Jul 16, Fr |
| 7. | Equality| Jul 16, Fr |
| 8. | Count | Jul 16, Fr |
| 9. | Slice | Jul 16, Fr |
| 10. | Copy array | Jul 16, Fr |

| 11. | Get first element | Jul 18, So |
| 12. | Slice with negative | Jul 18, So |
| 13. | Concat | Jul 18, So |
| 14. | Includes | Jul 18, So |
| 15. | Implement uniq | Jul 18, So |
| 16. | New and fill | Jul 18, So |
| 17. | Fill dynamically | Jul 18, So |
| 18. | Arrays are objects | Jul 18, So |
| 19. | Map | Jul 18, So |
| 20. | Square | Jul 18, So |

<!--
| | | |
| | | |
| | | |
| | | |
 -->