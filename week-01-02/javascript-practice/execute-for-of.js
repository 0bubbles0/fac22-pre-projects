/*
Use for...of to write a simple version of the pick function from Underscore.js and Lodash.js. It takes an object and an array of keys. It returns an object containing the selected keys, as well as their values from the original object. For example:

    pick({a: 1}, ['a']) gives {a: 1}.
    pick({a: 1, b: 2}, ['b']) gives {b: 2}.
    pick({a: 1, b: 2}, ['b', 'a']) gives {a: 1, b: 2}.

*/

function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    result[key] = obj[key];
    console.log(result[key]);
  }
  console.log(result);
  return 'end';
  //  return result;
}

console.log(pick({ a: 1, b: 2, c: 3, d: 4 }, ['c', 'b', 'c']));
console.log({ b: 2, c: 3 });

/* ... Rest Parameter
 */

function sum(...numbers) {
  //console.log(numbers);
  let numArr = [0, ...numbers];
  // console.log(numArr);
  return numArr.reduce((total, val) => total + val);
}

const sums = [sum(), sum(100), sum(2000, 1), sum(-500, -300)];

console.log(sums);

//Solution
function sum1(...numbers) {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum;
}
