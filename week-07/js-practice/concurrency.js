const promise = Promise.resolve({ name: 'Amir' }); // Promise { {name: 'Amir'}}

Object.assign({}, promise); // {}
JSON.parse(JSON.stringify(Promise.resolve().then(() => 5))); // {}
Promise.reject(new Error('it failed')); // {rejected: 'Error: not found'}

console.log();
