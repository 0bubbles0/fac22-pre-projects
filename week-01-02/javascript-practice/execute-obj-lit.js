/*
let userName = 'Amir';

const user = {
  userName = get userName() { return userName; }
}

const name1 = user.userName;
userName = 'Betty';
const name2 = user.userName;
[name1, name2]; //['Amir', 'Betty']
*/

// Write a function that takes a user and returns a login count object for them, mapping their name to their loginCount. Use a computed property to construct the object. Our pre-written code will call your function for multiple users.

const users = [
  { name: 'Amir', loginCount: 5 },
  { name: 'Betty', loginCount: 16 },
];

function loginCount(user) {
  let a = user.name;
  let b = user.loginCount;
  // console.log(a + b);
  return { [user.name]: user.loginCount };
}

const resultObjProp = [loginCount(users[0]), loginCount(users[1])];

// console.log(resultObjProp);

function returnsItsArguments(strings, ...values) {
  return {
    firstArg: strings,
    secondArg: values,
  };
}

// console.log(returnsItsArguments`1${2}`);

/*
function multiplyMany(...numbers, toMultiply) {
  const result = [];
  for (const n of numbers) {
    result.push(n * toMultiply);
  }
  return result;
}
*/
// console.log(multiplyMany(1, 7.7, 1000, 100));

function doubleNumbers(strings, ...values) {
  console.log(strings);
  console.log(values);
  let result = '';
  for (let i = 0; i < strings.length - 1; i++) {
    console.log(strings[i]);
    console.log(values[i]);
    result += strings[i];
    result += values[i] * 2;
  }
  return result;
}

//Solution
function doubleNumbers2(strings, ...values) {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += (2 * values[i]).toString();
    }
  }
  return result;
}

console.log(doubleNumbers`the numbers ${1} and ${2}`);
