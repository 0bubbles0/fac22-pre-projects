const promise = Promise.resolve({ name: 'Amir' }); // Promise { {name: 'Amir'}}

console.log(Promise.resolve()); // {fulfilled: undefined}

Object.assign({}, promise); // {}
JSON.parse(JSON.stringify(Promise.resolve().then(() => 5))); // {}
// Promise.reject(new Error('it failed')); // {rejected: 'Error: not found'}

const discounts = [{ code: 'first-month-free' }, { code: 'annual-sale' }];
function findDiscountCode(code) {
  const discount = discounts.find((d) => d.code === code);
  if (discount === undefined) {
    return Promise.reject(new Error('discount does not exist'));
  } else {
    return Promise.resolve(discount);
  }
}
findDiscountCode('x').catch(() => {}); // {fulfilled: undefined}

const users = [
  { id: 1, name: 'Amir' },
  { id: 2, name: 'Betty' },
];

function getUser(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      resolve(user);
    } else {
      reject(new Error('no such user'));
    }
  });
}

getUser(1);

Promise.resolve()
  .then(() => {
    throw new Error('user not found');
  })
  .catch(() => 'rejection was caught');
//Execute Program {fulfilled: 'rejection was caught'}
//VSCode Promise {<pending>}

Promise.resolve().then(() => {
  throw new Error('user does not exist');
});
// {rejected: 'Error: user does not exist'}

const array = [];
array.push('before');

const promise1 = Promise.resolve('this value is ignored');
const promise2 = promise1.then(() => {
  array.push('then');
});

promise2.then(() => {
  array.push('after');
  return array;
});
// { fulfilled: ['before', 'then', 'after'];}

const interval = setInterval(() => {
  /* do nothing */
});

clearInterval(interval);
typeof interval;
// Execute Program 'number'
//VSCode 'object'

new Promise((resolve, reject) => {
  resolve('it worked');
}); // {fulfilled: 'IT WORKED!'}

// !Promise.resolve('anything'); // false

const arrayM = [];

arrayM.push(1);
new Promise((resolve) => {
  setTimeout(resolve, 1000);
  arrayM.push(2);
}).then(() => {
  arrayM.push(3);
});
arrayM.push(4);

// console.log(arrayM);
