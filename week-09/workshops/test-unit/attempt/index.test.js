// Challenge 1
test('Test makeURL Function', () => {
  equal(makeUrl('pikachu'), 'https://pokeapi.co/api/v2/pikachu', 'sth');
  equal(makeUrl('bulbasaur'), 'https://pokeapi.co/api/v2/bulbasaur');
});

// Challenge 2. Remember that we can't compare 2 objects with each other!

test('Test searchParamsToObject Function', () => {
  const actual = searchParamsToObject('name=oliver&email=hello@oliverjam.es');
  const expected = { name: 'oliver', email: 'hello@oliverjam.es' };
  equal(actual.name, expected.name);
  equal(actual.email, expected.email);
});

// Challenge 3. Leap year test
test('Test  isLeapYear Function', () => {
  equal(isLeapYear1(20), true);
  equal(isLeapYear1(1325), false);
  equal(isLeapYear1(1900), false);
  equal(isLeapYear1(2000), true);
  equal(isLeapYear1(-20), false);
  equal(isLeapYear1('love'), false);
});
