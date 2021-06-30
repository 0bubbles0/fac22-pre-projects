//Without E
/*
"If you can tell me why I shouldn't fire you without using the letter E, you can keep your job"
Remove any word that includes the letter "e" (not case-sensitive) and return the message.
If the message uses the number 3, then return "You're fired!".

Example:
Message: "Good morning everyone! Nice weather we're having."
Output: "Good morning having."

describe("Tests", () => {
  it("test", () => {
    var message1 = "Good morning everyone! Nice weather we're having.";
    var message2 = "I love working here";
    
    Test.assertEquals(woE(message1), "Good morning having.");
    Test.assertEquals(woE(message2), "I working")
  });
});

Good luck :)
*/


function woE1(message) {
  let result;
  let messageArr = message.split(" ");
  // console.log(messageArr);
  let rightArr = messageArr.filter(val => (/[e]/.test(val) === false));
  console.log(rightArr);
  return rightArr.join(" ");
}

function woE(message) {
  if (/[3]/.test(message)) {
    return "You're fired!";
  }
  return message.split(" ").filter(val => (/[e|E]/.test(val) === false)).join(" ");
}
console.log(woE("Good morning everyone! Nice weather we're having."));
console.log("Good morning having.");
console.log(woE("I love working here"));
console.log("I working");