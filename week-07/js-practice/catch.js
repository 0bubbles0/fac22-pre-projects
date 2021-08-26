const promise = Promise.reject({ message: 'it failed' }).catch((reason) => {
  throw reason;
});
console.log(promise);
