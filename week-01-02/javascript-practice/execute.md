# Execute Program

<https://www.executeprogram.com/>

## Contents

- [Modern JavaScript](#modern-javascript)
- [Arrays](#arrays)

## Modern JavaScript(#modern-javascript)

<https://www.executeprogram.com/courses/modern-javascript>

### Summary

- **Shadowing** let & const &rarr; nested `{let x = 2;}` is not visible/has no impact on an outside `let x = 1`;
- **const**: value can be muted, but not reassigned &rarr; e.g. can push to an array, but not assign a completely new array to variable name
-	arrays can be **sparse** &rarr; can have nothing at index 0, 1, …, 4, 7
-	**for … in** &rarr; iterates over **object’s keys**, not its values (arrays are also objects, keys are their index, eg. ‘0’. For in skips sparse positions &rarr; can lead to bugs)
-	**for…of** &rarr; iterates over **array’s values** (similar to for-each in other languages. Sparse positions are given undefined)
  - *Object* keys: `for (const key of Object.keys(obj)) { helpArr.push(key) }`
  - *String*: `for (const char of str)`
- **Template Literals**: 

  - ```javascript
    `${x}` === x.toString()
    `${{a: 1}}` === '[object Object]'
    `${[1, 2]}` === '1, 2'
  ```
- **... Rest Parameter**:
  -	`const f = (…args) => args;`
    - `f(1, 2, 3)` &rarr; `[1, 2, 3]`
  - `const f = (…numbers) => { can loop numbers as array }`
  - As function parameter: can only be **ONE** … at **last place** (i.e. “all remaining”)
  -	As function arguments: can call `add(…numbers)` &rarr; treat each number as separate argument

- **get, set**
  - objects can hold fixed or dynamic properties (function, which gets called when property is accessed user.userFunciton)
  - getter, setter can store history of changes (e.g. by pushing them into an array)
    ```javascript
    function createUser(userName) {
      return {
        names: [userName],
        get userName() { return this.names[this.names.length - 1]; },
        set userName(userName) { this.names.push(userName); }
      };
    }
    const user = createUser('Amir');
    user.userName = 'Betty';
    user.names;
    ```
    Result: ['Amir', 'Betty']

- **Object shorthand naming**
  - if name & age are already defined variables &rarr; `const user = { name: name, age: age}` SAME AS `const user = {name, age}`
  - 
    ```javascript 
      const rectangle3D = {
        width: 3, depth: 4, height: 5,
        baseArea() { return this.width * this.depth; },
        volume() { return this.baseArea() * this.height }
      };
      rectangle3D.volume(); // 60
      ```

- **Number.isNaN(X)**
  - old `isNaN(x)` (which converts x to number before checking) had error
    - true for `NaN`, `0/0`, typos, expressions with `undefined` &rarr; **but** `undefined` *is* a number
  - new `Number.isNAN(x)` does it properly &rarr; true for (`NaN`) / false for (`undefined`)
  - configure in eslint &rarr; configure no-restricted-globals &rarr; disallow isNaN()

-	**f.bind(thisA)**
  -	this is usually only the direct parent &rarr; how have transferrable parent?
  -	`.bind()` function method: can call function with a specific this, leave original function unchanged
  -	next step: arrow functions
  -	declare &rarr; `function objKeyVal() { return this.key; }`
  -	call &rarr; `objKeyVal.bind(obj) ();`

-	**Generators**:
  -	`function* numbers(a, b) { yield 1; yield a; yield b; }`
  -	yield is like return, can be used repeatedly (function running halts temporarily)
  -	can for-of over it, make `Array.from(numbers(1, 2))`

-	**Computed Properties**:
  -	Create key &rarr; `{[x]: 5}`
  -	`[‘Be’ + ‘tty’]`
    ```javascript
      const users = [
        {name: 'Amir', loginCount: 5},
        {name: 'Betty', loginCount: 16},
      ];

      function loginCount(user) {
        return {[user.name]: user.loginCount};
      }

      [loginCount(users[0]), loginCount(users[1])]; // Goal: [{Amir: 5}, {Betty: 16}]
    ```

-	**Tagged template literals**:
      ```javascript
        function returnsItsArguments(strings, ...values) {
          return {
            firstArg: strings,
            secondArg: values,
          };
        }
        returnsItsArguments`1${2}3`; // Result: {firstArg: ['1', '3'], secondArg: [2]}
      ```
- literal strings, passed as arr argument &rarr; `1, 3`
  - spaces count
  - might be padded with ‘’, so that always #literals > #interpolatedVal
- interpolated values, passed as rest parameters  ${…}
- Real example  making strings HTML-safe, e.g. turn < into &lt; (escape)  common-tags library's safeHtml



### Lessons

| # | Lesson | Date |
| ---: | --- | --- |
| 1. | Strict Mode | Jun 18, Fr |
| 2. | Let | Jun 21, Mon |
| 3. | Const | Jun 22, Tue |
| 4. | For of | Jun 23, Wed |
| 5. | Template Literals| Jun 24, Thu |
| 6. | Rest Parameter | Jun 28, Mon |
| 7. | Accessors in object literals (get & set)| Jun 29, Tue |
| 8. | Shorthand properties | Jun 30, Wed |
| 9. | Shorthand methods | Jul 1, Thu |
| 10. | Number.isNaN(x) | Jul 5, Mon |
| 11. | f.bind() | Jul 6, Tue|
| 12. | Generator f | Jul 7, Wed |
| 13. | Computed properties | Jul 8, Thu |
| 14. | Tagged template literals | Jul 9, Fr |
<!--
| | | |
| | | |
| | | |
 -->

## Arrays (#arrays)

 

