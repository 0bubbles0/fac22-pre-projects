// Task: Write a map function with TDD

test('map requires arr and fn args', () => {
  // (1): input arr?
  equal(map(), 'Please pass an arr');
  // (2): input fn?
  equal(map([]), 'Please pass a mapping fn');
});

// (3): output arr?
test('map should return an arr', () => {
  const result = map([], () => {});
  console.log(result);
  equal(Array.isArray(result), true);
});

// (4): input-fn works for 1 item
test('map should transform 1 element using fn', () => {
  const result = map([1], (x) => x * 2);
  equal(result[0], 2);
});

// (5): input-fn works for 2 items
test('map should transform 2 elements using fn', () => {
  const result = map([1, 2], (x) => x * 2);
  equal(result[0], 2);
  equal(result[1], 4);
});

// (6): input-fn works for 10 items
test('map should transform 2 elements using fn', () => {
  const result = map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) => x * 2);
  equal(result[9], 20);
});

// What else can an actual map do? --> consider index, arr

function map(arr, f) {
  // (1): Error, eg for arr=undefined would usually throw an error
  if (!Array.isArray(arr)) return 'Please pass an arr';

  // (2):
  if (typeof f !== 'function') return 'Please pass a mapping fn';

  // (3):
  // const result = [];
  // return result;

  // (4):
  // const result = [];
  // const item = array[0];
  // const mappedItem = f(item);
  // result.push(mappedItem);
  // return result;

  // (5):
  // const result = [];

  // const item1 = array[0];
  // const mappedItem1 = f(item1);
  // result.push(mappedItem1);

  // const item2 = array[1];
  // const mappedItem2 = f(item2);
  // result.push(mappedItem2);

  // return result;

  // (5.1): Aha! Repetition --> for loop!
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = array[i];
    const mappedItem = f(item);
    result.push(mappedItem);
  }
  return result;
}
