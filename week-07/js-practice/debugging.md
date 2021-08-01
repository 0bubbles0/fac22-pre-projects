# Debugging

## Questions

- JSON: JavaScript Object Notation

## Reading List

- [x] JavaScript Algorithms and Data Structures (_FCC_): <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging>

## Summary

- "Have idea what output should be before looking what it is"
- `console.log()` &rarr; show intermediate values.
- `typeof` to check data structure &rarr; calculations, function calls, JSON
  - Boolean, Null, Undefined, Number, String, Symbol, (mutables) Object
- `ReferenceError: x is not defined` &rarr; spelling/syntax mistakes
- `SyntaxError: unkown: Unexpected token, expected "," (1:22)` &rarr; close (), [], {}, ""
- careful mixing '', ""
- `=` is not equality operator
- calling `myFunction // returns myFunction` vs. `myFunction() // returns 'result'`
- correct **order of (arguments)** in function call. Otherwise could cause runtime error or illogical result
- **OBOE**, Off-by-one-errors with **index** &rarr; could otherwise be `ReferenceError: index out of range` &rarr; consider if method is incl/excl
- **variable resetting** in loops: sometimes should, sometimes shouldn't
- **infinite loop** can break browser:
  - if no terminal/break-out condition,
  - ++/-- counter in wrong direction,
  - resetting counter inside loop
