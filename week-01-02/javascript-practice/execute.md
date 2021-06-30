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
<!--
| | | |
| | | |
| | | |
 -->

## Arrays (#arrays)

 
