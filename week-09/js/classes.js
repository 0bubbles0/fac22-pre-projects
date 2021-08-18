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
