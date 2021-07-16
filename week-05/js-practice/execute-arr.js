/*
console.log([][1]);
console.log([undefined][0]);
*/

function eql(arr1, arr2) {
  let isEqual = true;
  if (arr1.length < arr2.length) {
    isEqual = false;
  };
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
*/

let sliceTest = [0, 1, 2, 3, 4];
sliceTest.slice();
console.log(sliceTest);