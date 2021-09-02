// console.log(JSON.parse(JSON.stringify([1, 2, [undefined]])));

// console.log(JSON.parse('<!doctype html>'));

const size = 1 + 2;
new Array(size)[0];

const values = new Array(10);
values[1] = 'some value';
values[2] = 'another value';

let valuesCounted = 0;
values.forEach((x) => {
  valuesCounted += 1;
});
valuesCounted; // 2

['a', null, undefined, 'b'].join(); // 'a,,,b'

// console.log([10, 20].slice(2, 3));

function fulfilledValues(promises) {
  return Promise.allSettled(promises).then((results) => {
    return results
      .filter((result) => result.status == 'fulfilled')
      .map((result) => result.value);
  });
}

console.log(
  fulfilledValues([
    Promise.resolve('Amir'),
    Promise.reject(new Error("User doesn't exist")),
    Promise.resolve('Cindy'),
  ])
);
// {fulfilled: ['Amir', 'Cindy']}
