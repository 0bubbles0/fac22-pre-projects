// // Construct instance
// class MsFluff {
//   name() {
//     return 'Ms. Fluff';
//   }
// }
// new MsFluff().name(); // 'Ms. Fluff'

// // Constructor
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
// }
// new Cat('Ms. Fluff').name; // Ms. Fluff is an instance of Cat if constructor()
// new Cat('Ms. Fluff'); // Ms. Fluff is an instance of Cat if constructor(name)

// // Property
// class Cat {
//   constructor(name, vaccinated) {
//     this.name = name;
//     this.vaccinated = vaccinated;
//   }
//   needsVaccination() {
//     return !this.vaccinated;
//   }
// }

// [
//   new Cat('Ms. Fluff', true).needsVaccination(),
//   new Cat('Keanu', false).needsVaccination(),
// ]; // RESULT: [false, true]

// //Method volumeFunction
// const rectangle3D = {
//   width: 3,
//   depth: 4,
//   height: 5,
//   baseArea() {
//     return this.width * this.depth;
//   },
//   volumeFunction() {
//     return () => this.height * this.baseArea();
//   },
// };
// rectangle3D.volumeFunction()();

// // Extend
// // super class
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// //sub class
// class Cat extends Animal {
//   constructor(name) {
//     super(name + ' the cat');
//   }
// }

// new Cat('Ms. Fluff').name; // 'Ms. Fluff the cat'

// // Leg Count
// class Animal {
//   constructor(legCount) {
//     this.legCount = legCount;
//   }
//   canWalk() {
//     return this.legCount > 0;
//   }
// }

// class Worm extends Animal {
//   constructor() {
//     super(0);
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super(4);
//   }
// }

// [new Worm().canWalk(), new Dog().canWalk()]; // RESULT: [false, true];

// // Greyhound
// class Animal {
//   constructor(legCount) {
//     this.legCount = legCount;
//   }

//   canWalk() {
//     return this.legCount > 0;
//   }
// }

// class Dog extends Animal {
//   constructor(runSpeedKmPerHour) {
//     super(4);
//     this.runSpeedKmPerHour = runSpeedKmPerHour;
//   }
// }

// class Greyhound extends Dog {
//   constructor() {
//     super(65);
//   }
// }

// class Pug extends Dog {
//   constructor() {
//     super(5);
//   }
// }

// [
//   new Greyhound().canWalk(),
//   new Greyhound().runSpeedKmPerHour,
//   new Pug().canWalk(),
//   new Pug().runSpeedKmPerHour,
// ];
// // [true, 65, true, 5]

// //Overrides
// class Bird {
//   speak() {
//     return 'chirp';
//   }
// }
// class Crow extends Bird {
//   speak() {
//     return 'CAW';
//   }
// }
// [new Bird().speak(), new Crow().speak()];
// // ['chirp', 'CAW']

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.isAdmin = false;
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
    this.isAdmin = true;
  }
}

const admin = new Admin('Amir', 'amir@example.com');
// const admin = new User('Amir', 'amir@example.com');
// console.log([admin.name, admin.email, admin.isAdmin]); // ['Amir', 'amir@example.com', true];

function createCat(name) {
  class Cat {
    constructor() {
      this.name = name;
    }
  }
  return new Cat();
}
// console.log(createCat('Ms. Fluff').name);

if (true) {
  class Person {}
}
console.log(new Person());

/*
Write a User class that:

Takes an initial name as a constructor argument.
Stores that in a names array property, representing a history of the user's names.
Has a name getter that returns the last (most recent) name in the array.
Has a name setter that adds a new name to the array (using this.names.push(...)).
*/

class User1 {
  constructor(name) {
    this.names = [name];
  }
  get name() {
    return this.names[this.names.length - 1];
  }
  set name(newName) {
    this.names.push(newName);
  }
}

const user = new User1('Amir');
user.name = 'Betty';
[user.name, user.names]; // ['Betty', ['Amir', 'Betty']]

// Computed Methods & Accessors
// Write a function named classWithMethod. It takes one argument: methodName. It returns a class with a method whose name comes from methodName. The method should return `this is ${methodName}`.
function classWithMethod(methodName) {
  return class {
    [methodName]() {
      return `this is ${methodName}`;
    }
  };
}
const methodReturnValues = [
  new (classWithMethod('aMethod'))().aMethod(),
  new (classWithMethod('anotherMethod'))().anotherMethod(),
];
methodReturnValues; // ['this is aMethod', 'this is anotherMethod']
