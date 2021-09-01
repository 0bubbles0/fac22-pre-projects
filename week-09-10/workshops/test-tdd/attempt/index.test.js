// testing map()

test('map() should return an array with the same number of elements', () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test('map() should transform each element of the array using the fn argument', () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

// filter()
// Array.filter() is used to remove elements you don’t want from an array. It takes a function as an argument, then loops over each element in the array and calls the function with each one. If the function returns true the element is kept, otherwise it is filtered out.

// Test inputs
test('map requires arr and fn args', () => {
  // (1): input arr?
  equal(map(), 'Please pass an arr');
  // (2): input fn?
  equal(map([]), 'Please pass a mapping fn');
});
test();
