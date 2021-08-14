const promise = Promise.reject({ message: 'it failed' }).catch();

console.log(promise);
