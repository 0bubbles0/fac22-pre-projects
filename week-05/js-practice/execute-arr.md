# Execute Program: Array

- `arr.push('x');` &rarr; returns new arr.length
- `arr.pop();` &rarr; returns the removed element
- `arr.slice(2);` &rarr; returns copies in new arr, from begin index, empty if begin index is not in arr. No (arg) &rarr; slice whole arr. Doesn't change original arr 
- ES6 Methods:
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

| 11. | Get first element | Jul  |
| 12. |  | Jul  |
| 13. |  | Jul  |

<!--
| | | |
| | | |
| | | |
| | | |
 -->