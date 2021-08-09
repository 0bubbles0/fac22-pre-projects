const promise = Promise.resolve({ name: 'Amir' }); // Promise { {name: 'Amir'}}

Object.assign({}, promise); // {}
JSON.parse(JSON.stringify(Promise.resolve().then(() => 5))); // {}
// Promise.reject(new Error('it failed')); // {rejected: 'Error: not found'}

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
