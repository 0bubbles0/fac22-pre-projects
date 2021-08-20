# Modern JavaScript - Execute Program

<https://www.executeprogram.com/>

## Contents

- [Modern JavaScript](#modern-javascript)

## Further Reading

- [ ] JSON syntax (_MDN_): <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON>
  - [ ] JSON.stringify (_MDN_): <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify>
- [ ] Classes & React: <https://reactjs.org/>

## Modern JavaScript(#modern-javascript)

<https://www.executeprogram.com/courses/modern-javascript>

### Summary

- **Shadowing** let & const &rarr; nested `{let x = 2;}` is not visible/has no impact on an outside `let x = 1`;
- **const**: value can be muted, but not reassigned &rarr; e.g. can push to an array, but not assign a completely new array to variable name
- arrays can be **sparse** &rarr; can have nothing at index 0, 1, …, 4, 7
- **for … in** &rarr; iterates over **object’s keys**, not its values (arrays are also objects, keys are their index, eg. ‘0’. For in skips sparse positions &rarr; can lead to bugs)
- **for…of** &rarr; iterates over **array’s values** (similar to for-each in other languages. Sparse positions are given undefined)
- _Object_ keys: `for (const key of Object.keys(obj)) { helpArr.push(key) }`
- _String_: `for (const char of str)`

- **Number.isNaN(x)**

  - old `isNaN(x)` (which converts x to number before checking) had error
    - **true** for `NaN`, `0/0`, typos, expressions with `undefined` &rarr; **but** `undefined` _is_ a number
  - new `Number.isNAN(x)` does it properly &rarr; **true** for (`NaN`) / **false** for (`undefined`)
  - configure in eslint &rarr; configure no-restricted-globals &rarr; disallow isNaN()

- **Number.isFinite(x)**

  - **false** for `Infinity` or `-Infinity`, `NAN` (i.e. str...)

- **Number.isSafeInteger()** &rarr; false for str, n outside min-max

  - safe interval for floating point arithmetic: x+1 behaves correctly
  - `Number.MAX_SAFE_INTEGER; // 9 007 199 254 740 991`
  - `Number.MIN_SAFE_INTEGER; // -9 007 199 254 740 991`

- **Exponential**: x^y === `Math.pow(x, y) === x ** y`

- **... Rest Parameter**:

  - `const f = (…args) => args;`
  - `f(1, 2, 3)` &rarr; `[1, 2, 3]`
  - `const f = (…numbers) => { can loop numbers as array }`
  - As function parameter: can only be **ONE** … at **last place** (i.e. “all remaining”)
  - As function arguments: can call `add(…numbers)` &rarr; treat each number as separate argument

- **... Spread Operator**:

  - can be at any place
  - improvement on arr1.concat(arr2)

  ```js
  // As f(arguments)
  function add(x, y) {
    return x + y;
  }
  const numbers = [1, 2];
  add(...numbers); // 3

  // insert arr
  const insertNumbers = [1, ...[2, 3], 4]; // [1, 2, 3, 4]

  // Insert obj
  const user1 = { name: 'Amir', age: 36 };
  const user2 = { name: 'Betty', };
  {...obj1, ...obj2} // {name: 'Betty', age: 36}
  ```

- **Function name property**

  - if function assigned to variable &rarr; have .name property

  ```js
  function f() {}
  const f = function () {};
  f.name; // 'f'
  (function () {}.name); // ''
  const f2 = f; // f2.name still 'f'

  class Cat {} // Cat.name is 'Cat'
  ```

- **Function default parameters**

  - can use **number, variable, obj...** as backup if not provided in call
  - can change default later, because JS doesn't look at it until call (unlike Python, there can't change after declaration)

  ```js
  function add(x, y) {
    return x + y;
  }
  add(1); // runs add(1, undefined) --> returns NaN
  function add1(x, y = 0) {
    return x + y;
  }
  // Destructure
  function addObjects({ x }, yObj = { y: x }) {
    return x + yObj.y;
  }
  addObjects({ x: 1 }); // 2
  // ... Rest
  function addToLength(x = 3, ...elements) {
    return x + elements.length;
  }
  addToLength(5, 'a'); // 6
  addToLength(); // 3
  ```

- **Generators**:

- `function* numbers(a, b) { yield 1; yield a; yield b; }`
- yield is like return, can be used repeatedly (function running halts temporarily)
- can for-of over it, make `Array.from(numbers(1, 2))`

- **Array Destructuring**:

- destructuring makes code **predictable**: new variables are safety copy of original &rarr; can use any methods, not worry which alter orignal/which don't
  - get property perhaps different: unwanted side-effects could change an object
- pick in
- **error** if try to destructure non-structured/non-iterables null, undefined, number
- **undefined** for any non-existent index, can set default with `='d'`

```javascript
const letters = ['a', 'b', 'c'];
//want ['a', 'b', 'c']
//Long form
const a = letters[0],
  b = letters[1],
  c = letters[2];
[a, b, c];
//OR. These declare multiple variables, can call as arr [a, b, c]
const [a, b, c] = letters; //['a', 'b', 'c']
const [a, , c] = letters; //['a', 'c'] sparse arr destructuring
const [a, b, c] = null; // error, also for number, undefined
const [a, b, c, d = 'd', e] = letters; // ['a', 'b', 'c', 'd', undefined]
const [a, ...others] = letters; // others are ['b', 'c'], always arr-format
// strings
const s = 'abc';
const [a, b, c] = s; // b is 'b'
const [...char] = s; // chars[2] is 'c'
//
```

- **Object Destructuring**:

  - **error** trying to destructure null, undefined
  - **undefined** if trying on non-existent key
  - interacts well with **get**: obj-key is a getter &rarr; destructure val, getter returns value

  ```javascript
  const user = { name: 'Amir', email: 'amir@example.com', age: 36 };
  const { name, age } = user;
  [name, age]; // ['Amir', 36]
  const { name } = null; // error. Also for null, undefined
  const { height } = user; // height is undefined
  const { height = 36 } = user; // default, height is 36
  const { name, ...rest } = user; // rest is {email: 'amir@example', age: 36}
  const { name: userName } = { name: 'Amir', email: 'amir@example.com' }; // userName is 'Amir'

  //assign pre-declared variable
  const key = 'name';
  const { [key]: value } = { name: 'Amir' }; // value is 'Amir'

  const user = {
    get name() {
      return 'Be' + 'tty';
    },
  };
  const { name } = user; // name is 'Betty'
  ```

- **Nested destructuring**:

  ```js
  // Arr
  const dataPoints = [
    [10, 20],
    [30, 40],
  ];
  const [, [x2]] = dataPoints; // 30

  // Obj
  const user = {
    name: 'Amir',
    address: {
      city: 'Paris',
    },
  };
  const {
    address: { city }, // use address to access city. address is not a var
  } = user;
  city; // RESULT: 'Paris'

  // OR
  const {
    address,
    address: { city },
  } = user;
  [city, address]; // ['Paris', {city: 'Paris'}]

  // Arr & Obj
  const users = [{ name: 'Amir' }, { name: 'Betty' }];
  const [, { name }] = users; // name is 'Betty'

  // Multiple sources
  const [{ name }, { city }] = [user, address]; // get values from 2 obj
  ```

- **Destructuring real examples**:

  ```javascript
  //arr
  function getFirstArrayElement([first]) {
    return first;
  }
  getFirstArrayElement(['cat', 'dog', 'horse']); // 'cat'

  //obj
  function getUserName({ name }) {
    return name;
  }
  getUserName({ name: 'Ebony' }); // 'Ebony'

  //for-of
  const users = [{ name: 'Amir' }, { name: 'Betty' }];
  const names = [];
  for (const { name } of users) {
    names.push(name);
  }
  names; // ['Amir', 'Betty']
  //rest: remove 1st arr-item
  const rest1 = ([, ...rest]) => rest; // rest1(1, 2, 3) -> [2, 3]
  const rest2 = (_, ...rest) => rest; // rest2(1, 2, 3) -> [2, 3]
  ```

- **Object shorthand naming**

  - order of obj.keys is as they were defined
    - same key: last-assigned value wins (also with ...spread)
  - also for `JSON.parse(`{"name": "Amir"}`);`, `JSON.stringify()`
  - exception number keys: `{1: 'Amir'}` &rarr; come first, sorted, as str
    ```js
    const user = { name: 'Amir', age: 36 };
    user.email = 'amir@example.com';
    Object.keys(user); // ['name', 'age', 'email']
    ```
  - if name & age are already defined variables &rarr; `const user = { name: name, age: age}` SAME AS `const user = {name, age}`
  - `obj.method` SAME AS `obj['method name']`

    ```javascript
    const rectangle3D = {
      width: 3,
      depth: 4,
      height: 5,
      baseArea() {
        return this.width * this.depth;
      },
      volume() {
        return this.baseArea() * this.height;
      },
    };
    rectangle3D.volume(); // 60
    ```

- **Computed Properties**:

  - Create key &rarr; `{[x]: 5}`
  - `[‘Be’ + ‘tty’]`

    ```javascript
    const users = [
      { name: 'Amir', loginCount: 5 },
      { name: 'Betty', loginCount: 16 },
    ];

    function loginCount(user) {
      return { [user.name]: user.loginCount };
    }

    [loginCount(users[0]), loginCount(users[1])]; // Goal: [{Amir: 5}, {Betty: 16}]
    ```

- **f.bind(thisA)**

  - this is usually only the direct parent &rarr; how have transferrable parent?
  - `.bind()` function method: can call function with a specific this, leave original function unchanged
  - next step: arrow functions
  - declare &rarr; `function objKeyVal() { return this.key; }`
  - call &rarr; `objKeyVal.bind(obj) ();`

- **Arrow functions**

  - easier scoping rules than normal functions &rarr; arrow has same scope-level (this) as parent
    - can avoid .bind()
    - useful for callbacks that don't loose scope

  ```js
  const rest = (first, ...rest) => rest;
  rest(1, 2, 3, 4); // [2, 3, 4]

  // Make different from an object with ()
  const getUser = () => ({ name: 'Amir', age: 36 });
  getUser().name; // 'Amir'

  // Avoid .bind() with clear this
  const address = {
    city: 'Paris',
    country: 'France',
    addressString() {
      return () => `${this.city}, ${this.country}`;
    },
  };
  address.addressString()(); // 'Paris, France'
  ```

- **get, set**

  - objects can hold fixed or dynamic properties (function, which gets called when property is accessed user.userFunction)
  - getter, setter can store history of changes (e.g. by pushing them into an array)
    ```javascript
    function createUser(userName) {
      return {
        names: [userName],
        get userName() {
          return this.names[this.names.length - 1];
        },
        set userName(userName) {
          this.names.push(userName);
        },
      };
    }
    const user = createUser('Amir');
    user.userName = 'Betty';
    user.names;
    // Result: ['Amir', 'Betty']
    ```

- **Template Literals**:

  ```javascript
  ((`${x}` === x.toString()`${{ a: 1 }}`) === '[object Object]'`${[1, 2]}`) ===
    '1, 2';
  ```

- **Tagged template literals**:

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
    - might be padded with '', so that always #literals > #interpolatedVal
  - interpolated values, passed as rest parameters &rarr; ${…}
  - Real example &rarr; making strings HTML-safe, e.g. turn < into &lt; (escape) &rarr; common-tags library's safeHtml

- **Catch & throw**

  - `throw new Error('Fail!');` doesn't need return

- **Sets**

  - iterator that accepts iterators as arguments
  - .includes() is **O(n)** &rarr; would loop 10,000 items
  - Set data type is a collection, ordered, of unique values
    - other languages unordered
  - based on Set theory (Georg Cantor)
  - `.has()` very fast &rarr; O(1) always same time regardless of size
  - typical common Set operations: **union**, **intersection**, **difference**
    - **Union**
      - could `arr1.concat(arr2)` &rarr; but would have repeats
      - new Set() & ... spread-operator
    - **Intersection**: arr1.filter(set2.has(n))
    - **Difference**: all items in set1 that are NOT in set2

  ```js
  const names = new Set(['Amir', 'Betty', 'Cindy']);
  names.has('Amir'); // true
  names.add('Dali'); // now names.has('Dali')
  names.delete('Dali'); // now names.has('Dali')
  Array.from(names.values()); // ['Amir', 'Betty', 'Cindy']
  names.size(); // 3
  names.clear(); // []

  // Union, Intersection, Difference
  const set1 = new Set([1, 2, 3]);
  const set2 = new Set([2, 3, 4]);
  const unionSet = new Set([...set1, ...set2]); // Set(4) {1, 2, 3, 4}
  const intersectionSet = new Set(Array.from(set1).filter((n) => set2.has(n))); // Set(2) {2, 3}
  const differenceSet = new Set(Array.from(set1).filter((n) => !set2.has(n))); // Set(1) {1}
  ```

- **Classes**

  - don't use if not necessary
  - classes can have constructor &rarr; method to initialise obj
  - construct instance of class &rarr; `new MyClass()`
  - Similar to **object-oriented** languages (Java, C#, Python, Ruby), although JS object system is **prototype-based**
    - **better use classes** &rarr; better understood
    - React components used to be defined with classes (this.props, this.setState easy)
  - In JS: **class is function**
  - describe **shape of an object**, its properties & methods
    - **methods**: functions on individual instance.
      - Can access obj-properties with `this.property`
      - need `new Cat(...).property` to instantiate
      - Class method definitions like literal objects &rarr; `methodName() {}`
    - **properties**: eg accessors like **get**, **set**
  - can use in function or if, but rarely should! &rarr; set up class outside, inside new Cat('A')
  - **Scope**:
    - can access everything inside function,
    - class not visible outside (like let, const)
    - can't class(class)
  - **Extend**
    - super
    - sub: extends, super()
    - x `instanceof` Super &rarr; understands if in Super or any of its Subs.
      - true if x = new Super()
    - subs can define/override super methods/properties
    - cant inherit from multiple supers at once (unlike Python, C++)

  ```js
  // Construct instance
  class MsFluff {
    name() {
      return 'Ms. Fluff';
    }
  }
  new MsFluff().name(); // 'Ms. Fluff'

  // Constructor
  class Cat {
    constructor(name) {
      this.name = name;
    }
  }
  new Cat('Ms. Fluff').name; // Ms. Fluff is an instance of Cat if constructor()
  new Cat('Ms. Fluff'); // Ms. Fluff is an instance of Cat if constructor(name)

  // Inline
  new (class {
    speak() {
      return 'yaong';
    }
  })().speak(); // has .name ''

  // Property
  class Cat {
    constructor(name, vaccinated) {
      this.name = name;
      this.vaccinated = vaccinated;
    }
    needsVaccination() {
      return !this.vaccinated;
    }
  }

  [
    new Cat('Ms. Fluff', true).needsVaccination(),
    new Cat('Keanu', false).needsVaccination(),
  ]; // RESULT: [false, true]

  // Property: Accessors get, set
  class User {
    constructor(name) {
      this.actualName = name;
    }
    get name() {
      return `${this.actualName} the user`;
    }
    set name(newName) {
    this.actualName = newName;
  }
  const user = new User('Betty').name; // 'Betty'
  user.name = 'Amir'; // user.actualName is 'Amir'

  //Method volumeFunction
  const rectangle3D = {
    width: 3,
    depth: 4,
    height: 5,
    baseArea() {
      return this.width * this.depth;
    },
    volumeFunction() {
      return () => this.height * this.baseArea();
    },
  };
  rectangle3D.volumeFunction()();

  // Extend
  // super class
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  //sub class
  class Cat extends Animal {
    constructor(name) {
      super(name + ' the cat');
    }
  }
  const cat = new Cat('Ms. Fluff').name; // 'Ms. Fluff the cat'
  cat instanceof Animal; // true

  // Example: inheritance
  const classes = [];
  classes.push(class {});
  classes.push(class extends classes[0] {});
  const ParentClass = classes[0];
  const ChildClass = classes[1];
  new ChildClass() instanceof ParentClass;
  //true
  ```

- **JSON**

  - **J**ava**S**cript **O**bject **N**otation
  - JSON "keys",
  - `undefined` become JSON-null, remain null if turned back
  - `JSON.stringify(obj, replacer)` method turns obj &rarr; JSON-string
    - optional replacer:
      - `['a', 'b']`: only 'a', 'b' keys will be included
      - `f(key, value)`
        - find key-match in any obj or its nested
        - return current value, another value, undefined (i.e. remove key)
  - `JSON.parse(JSONstr)` method turns JSON-string &rarr; obj

  ```js
  JSON.stringify({ a: 2 }) === '{"a":2}'; // true
  JSON.stringify([1, undefined, 2]); // '[1,null,2]'
  JSON.parse('{"a": 1, "b"   :   2}'); // {a: 1, b: 2}

  JSON.parse('&&& invalid syntax &&&'); // SyntaxError

  // Customise with toJSON
  const user = {
    name: 'Amir',
    toJSON: () => 'This is Amir!',
  };
  JSON.parse(JSON.stringify(user)); // 'This is Amir!'

  //no circular obj
  const circularObject = {};
  circularObject.someKey = circularObject;
  circularObject; // {someKey: (circular reference)}
  JSON.stringify(circularObject); // TypeError

  // replacer
  JSON.parse(
    JSON.stringify(
      {catName: 'Ms. Fluff', city: 'Paris', name: 'Amir'},
      (key, value) => {
        if (key === 'catName') {
          return undefined;
        } else if (typeof value === 'string') {
          return 'New ' + value;
          } else {
          return value;
        }
      }
    )
  );
  {city: 'New Paris', name: 'New Amir'}
  ```

### Lessons

|   # | Lesson                                   | Date        |
| --: | ---------------------------------------- | ----------- |
|  1. | Strict Mode                              | Jun 18, Fri |
|  2. | Let                                      | Jun 21, Mon |
|  3. | Const                                    | Jun 22, Tue |
|  4. | For of                                   | Jun 23, Wed |
|  5. | Template Literals                        | Jun 24, Thu |
|  6. | Rest Parameter                           | Jun 28, Mon |
|  7. | Accessors in object literals (get & set) | Jun 29, Tue |
|  8. | Shorthand properties                     | Jun 30, Wed |
|  9. | Shorthand methods                        | Jul 1, Thu  |
| 10. | Number.isNaN(x)                          | Jul 5, Mon  |
| 11. | f.bind()                                 | Jul 6, Tue  |
| 12. | Generator f                              | Jul 7, Wed  |
| 13. | Computed properties                      | Jul 8, Thu  |
| 14. | Tagged template literals                 | Jul 9, Fri  |
| 15. | Basic array destructuring                | Aug 14, Sat |
| 16. | Basic object destructuring               | Aug 14, Sat |
| 17. | Places where destructuring is allowed    | Aug 14, Sat |
| 18. | Nested destructuring                     | Aug 15, Sun |
| 19. | Arrow functions                          | Aug 15, Sun |
| 20. | Classes                                  | Aug 15, Sun |
| 21. | JSON stringify and parse                 | Aug 16, Mon |
| 22. | Class scoping                            | Aug 16, Mon |
| 23. | Extending classes                        | Aug 16, Mon |
| 24. | String keyed methods                     | Aug 16, Mon |
| 25. | Sets                                     | Aug 16, Mon |
| 26. | Function name property                   | Aug 16, Mon |
| 27. | Set operations                           | Aug 18, Wed |
| 28. | Property order                           | Aug 18, Wed |
| 29. | Customizing JSON serialization           | Aug 18, Wed |
| 30. | New number methods                       | Aug 18, Wed |
| 31. | Spread                                   | Aug 18, Wed |
| 32. | Anonymous and inline classes             | Aug 19, Thu |
| 33. | Accessor properties on classes           | Aug 19, Thu |
| 34. | Default parameters                       | Aug 19, Thu |
| --: | ---------------------------------------- | ----------- |
|     | Static methods                           |             |
|     | Computed methods and accessors           |             |
|     | Symbol basics                            |             |
|     | Builtin Symbols                          |             |
|     | Defining iterators                       |             |
|     | Problems with obj keys                   |             |
|     | Iterators                                |             |
|     | Maps                                     |             |
|     | Symbols are metadata                     |             |
|     | Map iterators                            |             |

<!--
  ```

  ```

 -->
