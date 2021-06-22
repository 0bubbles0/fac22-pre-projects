/*
7 kata: Mumbling
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.


describe("accum",function() {
it("Basic tests",function() {    
  Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
  Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
  Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
  Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
  Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
})})
*/

function accum1(str) {
  let result = [];
  //  console.log(str);
  //get each letter, in lowerCase
  let lowLetters = str.toLowerCase().split("");
  //console.log(lowLetters);
  //loop letters | know each position (index+1) | repeat the letter (index+1 times)
  let phrase = lowLetters.map(
    (value, index) => value.repeat(index + 1)
  );
  //  console.log(phrase);
  //make first letters uppercase
  for (let i = 0; i < phrase.length; i++) {
    let phraseWords = phrase[i].split("");
    phraseWords[0] = phraseWords[0].toUpperCase();
    result.push(phraseWords.join(""));
  }
  return result.join("-");
}

function accum(str) {
  let result = [];
  //  console.log(str);
  //get each letter, in lowerCase | loop letters | know each position (index+1) | repeat the letter (index+1 times) | put into resultArr
  let phrase = str.toLowerCase().split("").map(
    (value, index) => value.repeat(index + 1)
  );
  //make first letters uppercase
  phrase.forEach(
    (word) => {
      let letters = word.split("");
      letters[0] = letters[0].toUpperCase();
      result.push(letters.join(""));
    }
  )
  /*
  for (let i = 0; i < phrase.length; i++) {
    let phraseWords = phrase[i].split("");
    phraseWords[0] = phraseWords[0].toUpperCase();
    result.push(phraseWords.join(""));
  }
  */
  return result.join("-");
}

console.log(accum("RqaEzty"));
console.log("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
/*
console.log(accum("abcd"));
console.log("A-Bb-Ccc-Dddd");
console.log(accum("cwAt"));
console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
console.log(accum("EvidjUnokmM"));
console.log(accum("HbideVbxncC"));
*/


//Other Solutions
function accum2(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accum3(s) {
  return s.split('').map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase())).join('-');
}