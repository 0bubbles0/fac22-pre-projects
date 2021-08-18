// Challenge 1. This is given
// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"
function makeUrl(name) {
  return 'https://pokeapi.co/api/v2/' + name;
}

// // Challenge 2. Write a function that translates str --> obj with key-values
function searchParamsToObject(str) {
  let result = {};
  const strParts = str.split('&');
  // console.log(strParts);
  for (let i = 0; i < strParts.length; i++) {
    const keyVal = strParts[i].split('=');
    const key = keyVal[0];
    const val = keyVal[1];
    result[key] = val;
    // console.log(keyVal);
  }
  return result;
}

console.log(searchParamsToObject('name=oliver&email=hello@oliverjam.es'));

/* Challenge 3. 
Write isLeapYear(){ error-message || boolean}
Check for edge-cases: skip every 100 years, skip the skip every 400 years
*/
function isLeapYear(year) {
  // console.log(year % 4 === 0);
  if (year % 4 !== 0 || year < 0) {
    return false;
  } else if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  return true;
}

function isLeapYear1(year) {
  if (typeof year !== 'number') return false;
  if (year < 0) return false;
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

console.log(isLeapYear(20)); // true
console.log(isLeapYear(1325)); // false
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(-20)); // false
console.log(isLeapYear('love')); // false
