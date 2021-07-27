/* 7 Kata: Letterbox Paint-Squad
https://www.codewars.com/kata/597d75744f4190857a00008d

You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.
Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...
But at the end of the day you realise not everybody did the same amount of work. To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.

// Task
Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.
Example: For start = 125, and end = 132

The letterboxes are:
125 = 1, 2, 5
126 = 1, 2, 6
127 = 1, 2, 7
128 = 1, 2, 8
129 = 1, 2, 9
130 = 1, 3, 0
131 = 1, 3, 1
132 = 1, 3, 2

The digit frequencies are:
0 is painted 1 time
1 is painted 9 times
2 is painted 6 times
etc...

and so the method would return [1,9,6,3,0,1,1,1,1,1]
Notes: 0 < start <= end

var paintLetterboxes = function (start, end) {
  // Your code here
  return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
};
*/

var paintLetterboxes = function (start, end) {
  // have digitCounter arr
  let digitCounter = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  // get all numbers in interval
  let interval = '';
  for (let i = start; i <= end; i++) {
    interval += i;
  }
  // console.log(interval);
  //loop numbers --> each value has that index in digitCounter --> add up
  interval.split('').map((x) => {
    digitCounter[x] += 1;
    // console.log(digitCounter[x]);
  });
  // return digitCounter values as arr
  return Object.values(digitCounter);
};

// console.log(paintLetterboxes(125, 132));

//Other Solution
function paintLetterboxes1(start, end) {
  const frequencies = new Array(10).fill(0);
  for (let number = start; number <= end; number++) {
    number
      .toString()
      .split('')
      .forEach((x) => frequencies[x]++);
  }
  return frequencies;
}

function multiTable(number) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    // console.log(i);
    let calc = `${i} * ${number} = ${i * number}`;
    // table.push(calc);
  }
  return table.join('\n');
}

// console.log(multiTable(5));

//Other Solution
function multiTable(n) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
    .join('\n');
}
