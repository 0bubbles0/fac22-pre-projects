let userName = 'Amir';

const user = {

  userName = get useRname() { return userName; }

}

const name1 = user.userName;
userName = 'Betty';
const name2 = user.userName;
[name1, name2]; //['Amir', 'Betty']


// Write a function that takes a user and returns a login count object for them, mapping their name to their loginCount. Use a computed property to construct the object. Our pre-written code will call your function for multiple users.

const users = [
  { name: 'Amir', loginCount: 5 },
  { name: 'Betty', loginCount: 16 },
];

function loginCount(user) {
  let a = user.name;
  let b = user.loginCount;
  // console.log(a + b);
  return { [user.name]: user.loginCount };
}

const resultObjProp = [
  loginCount(users[0])
  , loginCount(users[1]),
];

console.log(resultObjProp);