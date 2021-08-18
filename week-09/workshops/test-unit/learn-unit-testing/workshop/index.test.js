/*Challenge 1

Open workshop/index.js in your editor and read the makeUrl definition
The equal, notEqual and test functions from the Learn Testing workshop are included on the page for you to use.
Open workshop/index.test.js and write a test for makeUrl
Open workshop/index.html and check your test passes

function makeUrl(name) {
  return 'https://pokeapi.co/api/v2/' + name;
}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}
*/

test('Test makeURL', () => {
  equal(makeUrl('pikachu'), 'https://pokeapi.co/api/v2/pikachu', 'sth');
  equal(makeUrl('bulbasaur'), 'https://pokeapi.co/api/v2/bulbasaur', 'sth');
});
