function map(arr, fn) {
  // (1): Error, eg for arr=undefined would usually throw an error
  if (!Array.isArray(arr)) return 'Please pass an arr';

  // (2):
  if (typeof fn !== 'function') return 'Please pass a mapping fn';
  // (3): Output arr
  const result = [];
  // iteration
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    // could use i as index-input
    const mappedItem = fn(item);
    result.push(mappedItem);
  }
  return result;
}

function filter(arr, fn) {
  // Errors:
  if (!Array.isArray(arr)) return 'Please pass an arr';
  if (typeof fn !== 'function') return 'Please pass a filter fn';

  const result = [];

  // const item1 = arr[0];
  // const filteredItem1 = fn(item1);
  // result.push(filteredItem1);

  // const item2 = arr[1];
  // const filteredItem2 = fn(item2);
  // result.push(filteredItem2);

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    // could use i as index-input
    if (fn(item)) {
      result.push(item);
    }
  }

  return result;
}

function every(arr, fn) {
  // Errors:
  if (!Array.isArray(arr)) return 'Please pass an arr';
  if (typeof fn !== 'function') return 'Please pass a filter fn';

  return false;
  return true;
}

// function some() {}
// function find() {}
// function reduce() {}
// function flat() {}
