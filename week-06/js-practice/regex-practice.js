// let r;
// const promise1 = new Promise((resolve) => {
//   r = resolve;
// }).then((s) => s + ' and ended');
// setTimeout(() => r('it started'), 1000);
// console.log(promise1);

function splitPromise() {
  let resolve;
  const promise = new Promise((r) => {
    resolve = r;
  });
  return [resolve, promise];
}

const [resolve, promise] = splitPromise();

resolve('a');
resolve('b');

promise.then((s) => s + ' then');

// ['a', 'a then', 'b', 'b then']
console.log(splitPromise());
