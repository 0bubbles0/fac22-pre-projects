/*
5 Kata: Write out numbers
Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999.999.
Examples

number2words(0)  ==>  "zero"
number2words(1)  ==>  "one"
number2words(9)  ==>  "nine"
number2words(10)  ==>  "ten"
number2words(17)  ==>  "seventeen"
number2words(20)  ==>  "twenty"
number2words(21)  ==>  "twenty-one"
number2words(45)  ==>  "forty-five"
number2words(80)  ==>  "eighty"
number2words(99)  ==>  "ninety-nine"
number2words(100)  ==>  "one hundred"
number2words(301)  ==>  "three hundred one"
number2words(799)  ==>  "seven hundred ninety-nine"
number2words(800)  ==>  "eight hundred"
number2words(950)  ==>  "nine hundred fifty"
number2words(1000)  ==>  "one thousand"
number2words(1002)  ==>  "one thousand two"
number2words(3051)  ==>  "three thousand fifty-one"
number2words(7200)  ==>  "seven thousand two hundred"
number2words(7219)  ==>  "seven thousand two hundred nineteen"
number2words(8330)  ==>  "eight thousand three hundred thirty"
number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"
*/

function number2words(n) {
  console.log(n);
  //catch 0
  if (n == 0) { return `zero`; }
  //set up number-catalogues
  const einer = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(" ");
  const zehner = 'zero ten twenty thirty forty fifty sixty seventy eighty ninety'.split(" ");
  //input: know each digit
  let digits = String(n).split("");
  //.map(a => Number(a));
  //  console.log(digits.length);
  function zeroCatcher(a) { return (a == undefined) ? 0 : a }
  //let tensInd = digits[digits.length - 2] + digits[digits.length - 1];
  //console.log(tensInd);
  //let arrZehner = zeroCatcher(digits[digits.length - 2]);
  //console.log(arrZehner);
  function decideTens(z, e) {
    let arrE = zeroCatcher(digits[e]);
    let arrZ = zeroCatcher(digits[z]);
    let arrZE = Number(arrZ + arrE);
    console.log(einer[arrZE]);
    // console.log(einer[arrLookup]);
    if (arrZE == 0) { return ``; }
    if (arrE == 0) { return `${zehner[arrZ]}`; }
    if (arrZE < 20) {
      return `${einer[arrZE]}`;
    }
    return `${zehner[arrZ]}-${einer[arrE]}`;
  }
  function decideHund(h) {
    //  console.log(typeof digits[h]); //can be -1 if short number
    let arrH = digits[h];
    return (zeroCatcher(digits[h]) == 0) ? `` : (`${einer[digits[h]]} hundred `);
  }
  function decideThousands(z, e) {
    if (digits.length < 4) {
      return ``;
    }
    return `${decideTens(z, e)} thousand `;
  }
  let tens = decideTens(digits.length - 2, digits.length - 1);
  let hundreds = decideHund(digits.length - 3);
  let tThs = `${decideThousands(digits.length - 5, digits.length - 4)}`;
  let hThs = decideHund(digits.length - 6);
  //  console.log(hundreds + tens);
  // let word = zehner[3] + "-" + einer[2];
  //console.log(word);
  return hThs + tThs + hundreds + tens;
}

console.log(number2words(100)); // "nine"

/*
function arrTest(a, b) {
  let arr = [1, 0, 'a', '0'];
  return `${arr[arr.length - a]} and ${arr[arr.length - b]}`;
}
console.log(arrTest(1, 3));
*/

/*
console.log(number2words(0)); // "zero"
console.log(number2words(17)); // "seventeen"
console.log(number2words(1)); // "one"
console.log(number2words(10)); //  "ten"
console.log(number2words(20)); // "twenty"
console.log(number2words(21)); // "twenty-one"
console.log(number2words(45)); // "forty-five"
console.log(number2words(80)); // "eighty"
console.log(number2words(99)); // "ninety-nine"
console.log(number2words(100)); // "one hundred"
console.log(number2words(301)); // "three hundred one"
console.log(number2words(799)); // "seven hundred ninety-nine"
console.log(number2words(800)); // "eight hundred"
console.log(number2words(1000)); // "nine hundred fifty"
console.log(number2words(1000)); // "one thousand"
console.log(number2words(1002)); // "one thousand two"
console.log(number2words(3051)); // "three thousand fifty-one"
console.log(number2words(888888)); // "eight hundred eighty-eight thousand eight hundred eighty-eight"
*/