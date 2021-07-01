let arr1 = [45, 4, 9, 12, 5, 6];
function jackpotSize(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
function jackpotSize2(arr) {
  return arr.filter(x => x % 2 === 0).reduce((total, value) => total + value, 0);
}

//console.log(jackpotSize2([1, 2, 3, 4, 5, 6]), "Should return 12");
console.log(jackpotSize([1, 2, 3, 4, 5, 6]), "Should return 12");
console.log(jackpotSize([45, 4, 9, 12, 5, 6]), "Should return 22");
console.log(jackpotSize([1, 3, 5, 7]), "Should return 0");
console.log(jackpotSize([2, 2, 2, 12, 6]), "Should return 24");


//let sum2 = arr1.reduce((total, value) => total += value, 0);
//let sum3 = arr1.reduce((total, value) => total *= value, 1); //1620
//console.log(sum); //81 ... 22
//console.log(sum2);
//console.log(sum3);



/*

Even numbered tickets win!

Every guest at a party draws a numbered ticket.

Even ticket numbers get chocolate.

Uneven ticket numbers get biscuits.

Task:
Write a function that tells us,
- given an array of drawn ticket numbers,
- the number of chocolates we need

Bonus: We only bought 10 chocolates. Adjust the function, so that it tells us that either "There is enough chocolate" or "We're out of chocolate".

*/