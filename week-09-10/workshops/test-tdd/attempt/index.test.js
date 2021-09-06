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

// Every
test('every() requires arr and fn args', () => {
  // (1): input arr?
  equal(every(), 'Please pass an arr');
  // (2): input fn?
  equal(every([]), 'Please pass a test fn');
});

// (3): output true/false?
test('every() should return an arr', () => {
  const result = every([], () => {});
  console.log(result);
  equal(typeof result, 'boolean');
});

// test('', () => { const result; equal(result[0], ) })
// test('', () => { const result; equal(result[0], ) })
// test('', () => { const result; equal(result[0], ) })
// test();
