/*
7 - Highest and Lowest
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");

Notes:

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.


*/

function highAndLow(str) {
  let result = "";
  // console.log(str);
  let numArr = str.split(" ").map(x => parseInt(x)).sort((a, b) => a - b);
  /*
  console.log(numArr);
  console.log(numArr[0]);
  console.log(numArr[numArr.length - 1]);
  */
  return result.concat(numArr[numArr.length - 1], " ", numArr[0]);
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")); // return "542 -214"
/*
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
*/

//Other Solutions
function highAndLow1(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

