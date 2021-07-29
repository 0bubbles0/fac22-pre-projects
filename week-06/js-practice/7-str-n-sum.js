/* 7 Kata: Sum of integers in string
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
 */

function sumOfIntegersInString(s) {
  return; // what the function name says
}

console.log(sumOfIntegersInString('12.4'), ', want 16');
console.log(sumOfIntegersInString('h3ll0w0rld'), ', want 3');
console.log(sumOfIntegersInString('2 + 3 = '), ' , want 5');
console.log(
  sumOfIntegersInString(
    'Our company made approximately 1 million in gross revenue last quarter.'
  ),
  ' , want 1'
);
console.log(
  sumOfIntegersInString('The Great Depression lasted from 1929 to 1939.'),
  ' , want 3868'
);
console.log(sumOfIntegersInString('Dogs are our best friends.'), ' , want 0');
console.log(sumOfIntegersInString('C4t5 are 4m4z1ng.'), ' , want 18');
console.log(
  sumOfIntegersInString(
    'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
  ),
  ' , want 3635'
);
