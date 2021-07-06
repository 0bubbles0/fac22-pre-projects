/*
7 Kata: Triangle Area
Task.

Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

Hints: Ignore dots.

Example:

.
.      .
.      .       .      ---> tArea('\n.\n. .\n. . .\n') should return 2.0



.
.      .
.      .       .
.      .       .      .      ---> should return 4.5


tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n')--> should return 8
*/


function tArea1(str) {
  console.log(str);
  let dots = str.split("\n").filter(x => x != 0);
  console.log(dots);
  let a = dots.length - 1;
  let b = dots[dots.length - 1].split(" ").length - 1;
  console.log(`a is ${a}, b is ${b}`)

  return a * b / 2;
}

function tArea(tStr) {
  let dots = tStr.split("\n").filter(x => x != 0);
  let a = dots.length - 1;
  let b = dots[dots.length - 1].split(" ").length - 1;
  return a * b / 2;
}



console.log(tArea('\n.\n. .\n. . .\n'), "should return 2.0");
console.log(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n'), "should be 8")

// Other Solutions
function tArea3(tStr) {
  return (tStr.split`\n`.length - 3) ** 2 / 2
}