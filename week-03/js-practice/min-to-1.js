/*
www.hackerrank.com/x/tests/all/322859/questions/538247/try
*/

function minimumStepsToOne1(num) {
  //base case
  if (num === 1) {
    return 0;
  }
  //check cache for repeated state
  if (num in cache) {
    return cache[num];
  }
  //recursive relations
  //sub1
  let steps = minimumStepsToOne1(num - 1);
  //divby2
  if (num % 2 === 0) {
    let divby2 = minimumStepsToOne1(num / 2);
    steps = Math.min(steps, divby2);
  }
  //divby3
  if (num % 3 === 0) {
    let divby3 = minimumStepsToOne1(num / 3);
    steps = Math.min(steps, divby3);
  }
  //return min # steps to 1 from num
  let res = 1 + steps;
  //store res in cache
  cache[num] = res;
  return res;
}
//without cache might run out of time
//Max call stack size --> max number of allowed back-to-back recursions



//optimise --> memoization (space complexity?)--> cache intermediate results in an object{repetitive-state: result-that-goes-with-it}, because possibility-tree keeps returning --> {2:1, 3:1, 5:3}
let cache = {};
function minimumStepsToOne2(num) {
  let result = minimumStepsToOne1(num);
  return result;
}


//After diagram
function minimumStepsToOne(num {
  //let result = minimumStepsToOneRec(num);
  // return result;
  //init tab
})


//Fi  nal Solution
/*
 * Complete the 'minimumStepsToOne' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER num as parameter.
 */
// let cache = {};
function minimumStepsToOne(n) {
  // let result = minimumStepsToOneRec(num);
  // return result;

  // init tab
  let tab = new Array(n + 1);


  // apply base case to tab
  tab[1] = 0;

  // loop tab filling in subproblem solutions
  for (let curr = 2; curr <= n; curr++) {
    // sub1
    let steps = tab[curr - 1];

    // divby2
    if (curr % 2 === 0) {
      let divby2 = tab[curr / 2];
      steps = Math.min(steps, divby2);
    }


    // divby3
    if (curr % 3 === 0) {
      let divby3 = tab[curr / 3];
      steps = Math.min(steps, divby3);
    }


    // return min # steps to 1 from num
    let res = 1 + steps;
    // store res in cache
    tab[curr] = res;
  }


  return tab[n];
}


function minimumStepsToOneRec(num) {
  // base case
  if (num === 1) {
    return 0;
  }
  // check cache for repeated state
  if (num in cache) {
    return cache[num];
  }

  // recursive relations
  // sub1
  let steps = minimumStepsToOneRec(num - 1);

  // divby2
  if (num % 2 === 0) {
    let divby2 = minimumStepsToOneRec(num / 2);
    steps = Math.min(steps, divby2);
  }


  // divby3
  if (num % 3 === 0) {
    let divby3 = minimumStepsToOneRec(num / 3);
    steps = Math.min(steps, divby3);
  }


  // return min # steps to 1 from num
  let res = 1 + steps;
  // store res in cache
  cache[num] = res;

  return res;
}

