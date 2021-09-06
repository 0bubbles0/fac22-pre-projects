// testing map()
test('map() requires arr and fn args', () => {
  // (1): input arr?
  equal(map(), 'Please pass an arr');
  // (2): input fn?
  equal(map([]), 'Please pass a mapping fn');
});

// (3): output arr?
test('map() should return an arr', () => {
  const result = map([], () => {});
  console.log(result);
  equal(Array.isArray(result), true);
});

// (4): # return items? <= than orignal
test('map() should return an array with the same number of elements', () => {
  const result = map([1, 3, 5], () => {});
  equal(result.length, 3);
});

// (5) map should transform items with fn
// 1 item
test('map() should transform 1 element using fn', () => {
  const result = map([1], (x) => x * 2);
  equal(result[0], 2);
});

// 2 items
test('map() should transform 2 elements using fn', () => {
  const result = map([1, 2], (x) => x * 2);
  equal(result[0], 2);
  equal(result[1], 4);
});

// transform any items

test('map() should transform each element of the array using the fn argument', () => {
  const result = map([1, 15, 109], (x) => x + 1);
  equal(result[0], 2);
  equal(result[1], 16);
  equal(result[2], 110);
});

// filter()
// Array.filter() is used to remove elements you don’t want from an array. It takes a function as an argument, then loops over each element in the array and calls the function with each one. If the function returns true the element is kept, otherwise it is filtered out.

// Test inputs & outputs
test('filter() requires arr and fn args', () => {
  // (1): input arr?
  equal(filter(), 'Please pass an arr');
  // (2): input fn?
  equal(filter([]), 'Please pass a filter fn');
});
// (3): output arr?
test('filter() should return an arr', () => {
  const result = filter([], () => {});
  console.log(result);
  equal(Array.isArray(result), true);
});

// (4) Test filtering
test('callback on an item returns true/false', () => {
  // const callback = (x) => x > 5;
  // const result = filter([2, 11, 5], callback);
  // // (4a): callback on 1 array-item returns true or false
  // equal(result[0], false);
  // // (4b): callback on 2 array-items returns true or false
  // equal(result[1], true);
  // // (4c): callback on all items returns true or false
  // equal(result[2], false);
});

// (5) Only add an item to result if callback returns true
test('only add an item if callback returns true', () => {
  const callback = (x) => x > 5;
  const result = filter([2, 11, 5, 210], callback);
  equal(result[0], 11);
  equal(result[1], 210);
  equal(result[2], undefined);
  equal(result[3], undefined);
});

// (6) result.length <= arr.length
test('result should be <= length of arr', () => {
  const arr = [2, 11, 5, 210];
  const callback = (x) => x > 5;
  const result = filter(arr, callback);
  equal(result.length <= arr.length, true);
});

test('filter: works for str', () => {
  const callbackSTR = (x) => x === 'b';
  const result4 = filter(['a', 'b', 'b'], callbackSTR);
  equal(result4, ['b', 'b']);
  const result5 = filter(['a', 'd', 'c'], callbackSTR);
  equal(result5, []);
});

// Every
test('every() requires arr and fn args', () => {
  // (1): input arr?
  equal(every(), 'Please pass an arr');
  // (2): input fn?
  equal(every([]), 'Please pass a test fn');
});

// (3): output true/false?
// test('every(1 item) should return boolean', () => {
//   const callback = (x) => x > 5;
//   const result1 = every([2, 11, 210], callback);
//   equal(result1, false);
//   const result2 = every([11, 210], callback);
//   equal(result2, true);
// });

// (4): if any item is false, return false
// test('if 1st item is true, return fn(2nd item)', () => {
//   const callback = (x) => x > 5;
//   const result1 = every([11, 210], callback);
//   equal(result1, true);
//   const result2 = every([11, 2], callback);
//   equal(result2, false);
// });

// (5): loop arr: if(!fn(item_i)) return false else true
test('return false at first !fn(i), else true', () => {
  const callback = (x) => x > 5;
  const result1 = every([11, 2, 210], callback);
  equal(result1, false);
  const result2 = every([2, 11, 2, 210], callback);
  equal(result2, false);
  const result3 = every([6, 11, 20, 210], callback);
  equal(result3, true);
});

test('every(): works for str', () => {
  const callbackSTR = (x) => x === 'b';
  const result = every(['b', 'b', 'b'], callbackSTR);
  equal(result, true);
  const result1 = every(['a', 'b', 'c'], callbackSTR);
  equal(result1, false);
});

// SOME
// Test inputs & outputs
test('some() requires arr and fn args', () => {
  // (1): input arr?
  equal(some(), 'Please pass an arr');
  // (2): input fn?
  equal(some([]), 'Please pass a test fn');
});
// (3): output true/false?
test('some(wrong-item) should return false', () => {
  const callback = (x) => x > 5;
  // const result = some([2, 11, 210], callback);
  // equal(result, false);
  const result1 = every([2, 11, 210], callback);
  equal(result1, false);
  // const result2 = every([11, 210], callback);
  // equal(result2, true);
});

// (4): if any fn(item) true => return true
test('some: If any fn(item) true, return true', () => {
  const callback = (x) => x > 5;
  const result1 = some([11, 2, 210], callback);
  equal(result1, true);
  const result2 = some([2, 11, 210], callback);
  equal(result2, true);
  const result3 = some([1, 3, 1], callback);
  equal(result3, false);
});

test('some: works for str', () => {
  const callbackSTR = (x) => x === 'b';
  const result4 = some(['a', 'b', 'c'], callbackSTR);
  equal(result4, true);
  const result5 = some(['a', 'd', 'c'], callbackSTR);
  equal(result5, false);
});

// FIND
// find: return an item that passes
test('find(): if an item passes the test, return item', () => {
  const callback = (x) => x > 5;
  const result1 = find([11, 2, 210], callback);
  equal(result1, 11);
});

test('find(): return 1st correct item OR undefined', () => {
  const callback = (x) => x > 5;
  const result1 = find([11, 2, 210], callback);
  equal(result1, 11);
  const result2 = find([4, 2, 210], callback);
  equal(result2, 210);
  const result3 = find([4, 2, 1], callback);
  equal(result3, undefined);
  const callbackSTR = (x) => x === 'b';
  const result4 = find(['a', 'b', 'c'], callbackSTR);
  equal(result4, 'b');
});

// REDUCE
// const finalTotal = reduce(arr, (total, x) => total + x, 0);

test('reduce() returns a sum (n or str)', () => {
  const callback = (total, x) => total + x;
  const start = 0;
  const result = reduce([], callback, start);
  equal(result, 0);
  const result1 = reduce([1, 3, 10], callback, start);
  equal(result1, 14);
  const startStr = '';
  const result2 = reduce(['a', 'b', 'c'], callback, startStr);
  equal(result2, 'abc');
});

// FLAT
test('flat() should return an array', () => {
  const result = flat([1, [2, [3]]]);
  equal(Array.isArray(result), true);
  // equal(result, 1); // make n optional
});

test('flat() goes 1 level deep', () => {
  const result = flat([1, [2, 3]], 1);
  equal(result[0], 1);
  equal(result[1], 2);
  equal(result[2], 3);
});

test('flat() goes 2 levels deep', () => {
  const result = flat([1, [2, [3]]], 2);
  equal(result[0], 1);
  equal(result[1], 2);
  equal(result[2], 3);
});

// test('', () => { const result; equal(result[0], ) })
// test();
