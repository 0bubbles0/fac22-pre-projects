// const promise = Promise.reject({ message: 'it failed' }).catch();

// console.log(promise);

// const key = 'name';
// const { [key]: value } = { name: 'Amir' }; // value is 'Amir'

// console.log(value); //'Amir'
// console.log(name);
// console.log(key); //'name'

const originalPromise = Promise.reject(new Error('something went wrong'));
const chainedPromise = Promise.resolve(originalPromise);
console.log(chainedPromise);
