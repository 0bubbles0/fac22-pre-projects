// console.log(JSON.parse(JSON.stringify([1, 2, [undefined]])));

// console.log(JSON.parse('<!doctype html>'));

// const size = 1 + 2;
// new Array(size)[0];

// const values = new Array(10);
// values[1] = 'some value';
// values[2] = 'another value';

// let valuesCounted = 0;
// values.forEach((x) => {
//   valuesCounted += 1;
// });
// valuesCounted; // 2

// ['a', null, undefined, 'b'].join(); // 'a,,,b'

// // console.log([10, 20].slice(2, 3));

// function fulfilledValues(promises) {
//   return Promise.allSettled(promises).then((results) => {
//     return results
//       .filter((result) => result.status == 'fulfilled')
//       .map((result) => result.value);
//   });
// }

// console.log(
//   fulfilledValues([
//     Promise.resolve('Amir'),
//     Promise.reject(new Error("User doesn't exist")),
//     Promise.resolve('Cindy'),
//   ])
// );
// // {fulfilled: ['Amir', 'Cindy']}

// const cities = {
//   lille: { name: 'Lille', population: 232787 },
//   london: { name: 'London', population: 8908081 },
//   paris: { name: 'Paris', population: 2140526 },
//   brussels: { name: 'Brussels', population: 1208542 },
//   antwerp: { name: 'Antwerp', population: 523248 },
// };

// const connections = {
//   [cities.lille]: [cities.london, cities.paris, cities.brussels],
//   [cities.london]: [cities.lille],
//   [cities.paris]: [cities.lille],
//   [cities.brussels]: [cities.lille, cities.antwerp],
//   [cities.antwerp]: [cities.brussels],
// };

// console.log(Object.keys(connections));

// function* emptyStringGenerator() {
//   yield '';
// }
// const iterable = emptyStringGenerator();
// const iterator = iterable[Symbol.iterator]();
// console.log(iterator.next());

// let canceled = false;

// const promiseJ = new Promise((resolve) => setTimeout(resolve, 1000)).then(
//   () => {
//     if (canceled === true) {
//       return;
//     }
//     return 'it ran';
//   }
// );

// Set the canceled flag after 500 ms
// setTimeout(() => {
// canceled = true;
// }, 500);

// console.log(promiseJ);

// const user = {
//   name: 'Amir',
//   [Symbol.toStringTag]: 'Amir',
// };
// console.log(user.toString());

// console.log(JSON.parse(JSON.stringify([1, undefined, 2])));

// console.log(JSON.parse('*@& oh no &@*'));

// console.log(
//   JSON.parse(
//     JSON.stringify({
//       name: 'Amir',
//       toJSON: () => ({ thisWas: 'Amir' }),
//     })
//   )
// );

if (true) {
  class Person {}
}
// console.log(new Person());

const f = () => 1;
console.log(f.name);

// console.log()
// console.log()
