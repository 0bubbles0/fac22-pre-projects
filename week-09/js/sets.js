// Write a hasDuplicates function. It should use a set to decide whether an array of numbers has any duplicates. It should return true if there are duplicates; otherwise it should return false.

// There are multiple ways to solve this problem with sets. Here's one possible solution. Begin with an empty set. Then, for each number, check for whether the number is in the set. If it's in the set then we must have seen it earlier in the array, so it's a duplicate, so we can return true immediately. If we get to the end of the array then we never saw any number twice, so we can return false.

function hasDuplicates1(numbers) {
  const n = new Set();
  console.log(n);
  numbers.forEach((x) => {
    // console.log(x);
    console.log(n.has(x));
    if (n.has(x)) {
      console.log('has');
      return true;
    } else {
      console.log('has not');
      n.add(x);
    }
    console.log(n.has(x));
  });
  return false;
}

//Right
function hasDuplicates(numbers) {
  const n = new Set();
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i];
    if (n.has(x)) {
      return true;
    } else {
      n.add(x);
    }
  }
  return false;
}

// console.log([
// hasDuplicates([]),
// hasDuplicates([1, 2, 3]),
// hasDuplicates([10, 20, 20]),
// hasDuplicates([100, 200, 300, 100]),
// ]);
// GOAL: [false, false, true, true]

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const unionSet = new Set([...set1, ...set2]);
[unionSet.has(1), unionSet.has(4)];
console.log(unionSet);

const intersectionSet = new Set(Array.from(set1).filter((n) => set2.has(n)));
// console.log(intersectionSet);

function setIntersection(set1, set2) {
  return new Set(Array.from(set1).filter((n) => set2.has(n)));
}

const intersection = setIntersection(new Set([1, 2, 3]), new Set([2, 3, 4]));

console.log(intersection);
