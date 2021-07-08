/* Club Bouncer

Write a function that 
- looks at a queue
- returns a guest list 
  - with the full names 
  - of all people aged 18+
  - **Bonus**: last names in alphabetical order

Example guest list:
['Austen, Jane', 'Potter, Harry']

*/

const queue = [
  { firstName: "Harry", lastName: "Baker", age: 15 },
  { firstName: "Emma", lastName: "Smith", age: 20 },
  { firstName: "Tom", lastName: "Smith", age: 18 },
  { firstName: "Jane", lastName: "Austen", age: 17 },
  { firstName: "Mary", lastName: "Shelley", age: 4 },
  { firstName: "Mary", lastName: "Shelley", age: 4 },
  { firstName: "Charles", lastName: "Dickens", age: 50 },
]

//console.log(queue[0].age); //15

function over18(arr) {
  // console.log(arr[0].age);
  return arr.filter(item => item.age >= 18);
}
//console.log(over18(queue));

function alphabeter(a, b) {
  if (a.lastName > b.lastName) {
    return 1;
  } else if ((a.lastName === b.lastName) && (a.firstName > b.firstName)) {
    return 1;
  }
  return -1;
}

function guestLister(arr) {
  //  console.log(arr[0].firstName);
  return arr
    .filter(item => item.age >= 18)
    .sort((a, b) => alphabeter(a, b))
    .map(item => `${item.lastName}, ${item.firstName}`);
}

function guestLister1(arr) {
  //  console.log(arr[0].firstName);
  let overAge = over18(arr);
  let sorted = overAge.sort((a, b) => {
    return (a.lastName > b.lastName) ? 1
      : ((a.lastName === b.lastName) && (a.firstName > b.firstName)) ? 1
        : -1;
    if (a.lastName > b.lastName) {
      return 1;
    } else if (a.lastName === b.lastName) {
      return a.firstName > b.firstName ? 1 : -1;
    }
    return -1;
  });
  console.log(sorted);
  let guestList = sorted.map(item => `${item.lastName}, ${item.firstName}`);
  return guestList;
}

console.log(guestLister(queue));
console.log("Should be ",)