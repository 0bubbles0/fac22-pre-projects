/*
console.log([][1]);
console.log([undefined][0]);
*/

function eql(arr1, arr2) {
  let isEqual = true;
  if (arr1.length < arr2.length) {
    isEqual = false;
  }
  arr1.forEach((element, index) => {
    console.log(element, index, arr2[index]);
    if (element !== arr2[index]) {
      isEqual = false;
    }
  });
  return isEqual;
}

/*
console.log(eql([], [1]));
console.log(eql(['a', 'b', 'c'], ['a', 'x', 'c']));

let sliceTest = [0, 1, 2, 3, 4];
sliceTest.slice();
console.log(sliceTest);
*/

function uniq(arr) {
  let newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}

/*
console.log(uniq([1, 2, 3]), "Expect [1, 2, 3]");
console.log(uniq(['a', 'a', 'b']), "Expect ['a', 'b']");
console.log(uniq([1, 1, 1, 1]), "Expect [1]");

console.log(new Array(1000)); //[<1000 empty items>]
console.log(new Array(1000)[0]); // undefined
console.log(0 in new Array(1000)); // false
console.log(0 in new Array(1000).fill(true)); // true
console.log(1 in []); // false
*/

// Write a function that returns true if all array elements are true. Use reduce.
function allTrue(values) {
  return values.reduce((acc, x) => (acc && x) === true, true);
}

//Use reduce to write a function that behaves like filter. You can do this with only one reduce and no other loops.

// Remember to return acc inside your reduce callback.
// Remember to pass an initial value of [] as reduce's second argument.

// console.log(filter([1, 2, 3], (num) => num >= 0)); // Expected: [1, 2, 3]
//console.log(filter([1, 2, 3], (num) => num > 1)); // Expected: [2, 3]
// console.log(filter([1, 2, 3], num => num > 5)); // Expected: []
// console.log(filter([null, undefined], num => true)); // Expected: [null, undefined]
// console.log(filter([], (num) => true)); // Expected: []
//console.log(filter.toString().includes('reduce')); // You must use reduce.

function filter(arr, callback) {
  return arr.reduce((acc, current) => {
    // console.log(acc);
    // console.log(typeof acc);
    console.log(callback(current));
    if (callback(current)) {
      // console.log('make' + acc + current);
      return acc.concat(current);
    }
    return acc;
  }, []);
}

// Using reduce, write a function that behaves like join.
// Joining [] should produce ''
function join1(arr, separator) {
  return arr.reduce((acc, x) => acc.concat(x, separator), '');
}

// console.log(join(['a'], ','), 'want "a"'); //
// console.log(join(['a', 'b'], ','), 'want "a,b"'); //
// console.log(join(['a', 'b', 'c'], ''), 'want "abc"'); //
// console.log(join(['a', 'b', 'c', 'd'], 'x'), 'want "axbxcxd"'); //
// console.log(join(['a', 'b'], 'COMMA'), 'want "aCOMMAb"'); //
console.log(join(['', '', ''], ','), 'want ",,"'); //
// console.log(join([], ','), 'want ""'); //

function join(arr, separator) {
  return arr.reduce((acc, x, index) => {
    console.log(acc);
    if (index === 0) {
      return acc + x;
    }
    return acc + separator + x;
  }, '');
}

//SOLUTION
function joinSolution(arr, separator) {
  if (arr.length === 0) {
    return '';
  }
  return arr.reduce((acc, current) => {
    return acc + separator + current;
  });
}
