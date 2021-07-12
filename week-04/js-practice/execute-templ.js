/*
Write a doubleNumbers template literal tag. It mimics normal string interpolation, but doubles all of the interpolated values as they're inserted.
*/


function doubleNumbers(strings, ...values) {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += values[i] * 2;
    }
  }
  return result;
}
console.log(doubleNumbers`the numbers ${1} and ${2}`); // GOAL: 'the numbers 2 and 4'


function returnsItsArguments(strings, ...values) {
  return {
    firstArg: strings,
    secondArg: values,
  };
}

console.log(returnsItsArguments`first${'second'}`);