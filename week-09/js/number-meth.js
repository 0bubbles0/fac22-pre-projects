function add(x, y) {
  return x + y;
}

const numbers = [1, 2];
console.log(add(...numbers));

function add(...numbers) {
  return;
}
const numbers2 = [1, 2, 3];
console.log(add(...numbers2));
