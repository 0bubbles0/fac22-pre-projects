var re1 = /^(cat|)$/;

var re = /\d\d\d\d\d/;
//console.log(re.test('98210'));

// console.log(['x', null, 'y', undefined].join());

//US Phone Numbers
/*
American phone numbers can be local or long-distance. 
A local number looks like 555-1234. 
A long-distance number adds an area code, like 206-555-1234. 
Write a regex that can recognize both types.
*/

//true
console.log(re.test('555-5555'));
console.log(re.test('555-1234'));
console.log(re.test('999-5555'));
console.log(re.test('206-555-1234'));
console.log(re.test('216-999-9999'));

console.log('Here come false');
//false
console.log(re.test('55-5555'));
console.log(re.test('555-555'));
console.log(re.test('5555-5555'));
console.log(re.test('555-55555'));
console.log(re.test('55555555'));
console.log(re.test(''));
console.log(re.test('junk-555-1234'));
console.log(re.test('555-1234-junk'));
console.log(re.test('999-999-999-9999'));

var re = /^(\d\d\d-)?\d\d\d-\d\d\d\d$/;
var re1 = /555-5555/;
