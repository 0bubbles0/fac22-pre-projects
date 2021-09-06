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
  if (typeof fn !== 'function') return 'Please pass a test fn';

  // Break false for first wrong one
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) return false;
  }
  // if all
  return true;
  // const item1 = arr[0];
  // const item2 = arr[1];
  // if (fn(item1)) {
  //   return fn(item2);
  // }
  // return false;
  // return true;
}

function some(arr, fn) {
  // Errors:
  if (!Array.isArray(arr)) return 'Please pass an arr';
  if (typeof fn !== 'function') return 'Please pass a test fn';
  // Break true for first true one
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) return true;
  }
  // if none
  return false;
}

function find(arr, fn) {
  // Errors:
  if (!Array.isArray(arr)) return 'Please pass an arr';
  if (typeof fn !== 'function') return 'Please pass a test fn';

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (fn(item)) return item;
  }
}

function reduce(arr, fn, start) {
  // Errors:
  if (!Array.isArray(arr)) return 'Please pass an arr';
  if (typeof fn !== 'function') return 'Please pass a test fn';

  let accum = start;

  for (let i = 0; i < arr.length; i++) {
    accum = fn(accum, arr[i]);
  }

  return accum;
}

function flat(arr, depth = 1) {
  // Errors:
  // if (!Array.isArray(arr)) return 'Please pass an arr';
  // let nr = n;
  // if (!n) nr = 1;

  let catcher = [];
  // 1 level deep
  // arr.forEach((item1) => {
  //   if (!Array.isArray(item1)) {
  //     console.log('not array');
  //     catcher.push(item1);
  //   } else {
  //     console.log('sub-array');
  //     item1.forEach((item2) => {
  //       catcher.push(item2);
  //     });
  //   }
  // });
  // recursive
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item) && depth > 0) {
      catcher = catcher.concat(flat(item), depth - 1);
      //WRONG? catcher.push(flat(item, depth - 1));
    } else {
      catcher.push(item);
    }
  }
  return catcher;
}

console.log(flat([1, [2, [3]]]));
