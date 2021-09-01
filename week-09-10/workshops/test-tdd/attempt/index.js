function map(array) {
  // (1): Error, eg for arr=undefined would usually throw an error
  if (!Array.isArray(arr)) return 'Please pass an arr';

  // (2):
  if (typeof f !== 'function') return 'Please pass a mapping fn';
  // (3): Output arr
  const result = [];
  // iteration
  for (let i = 0; i < arr.length; i++) {
    const item = array[i];
    const mappedItem = f(item);
    result.push(mappedItem);
  }
  return result;
}

function filter(arr, fn) {
  // (1): Error, eg for arr=undefined would usually throw an error
  if (!Array.isArray(arr)) return 'Please pass an arr';

  // (2):
  if (typeof f !== 'function') return 'Please pass a mapping fn';

  // Output arr
}
