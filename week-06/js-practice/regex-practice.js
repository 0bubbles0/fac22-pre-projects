const connections = {
  Lille: ['London', 'Paris', 'Brussels'],
  London: ['Lille'],
  Paris: ['Lille'],
  Brussels: ['Lille', 'Antwerp'],
  Antwerp: ['Brussels'],
};
// console.log([
// connections['Paris'].includes('London'),
// connections['London'].includes('Lille'),
// ]);

const emails = new Map();
emails.set('Cindy', 'cindy@example.com');
emails.set('Cindy', 'cindy+nospam@example.com');
// console.log(emails.get('Cindy'));

// Map test
class SocialGraph {
  constructor() {
    this.map = new Map();
  }
  addFollow(user1, user2) {
    // console.log(user1);
    // console.log(this.map.has(user1));
    if (!this.map.has(user1)) {
      this.map.set(user1, []);
    }
    this.map.get(user1).push(user2);
    // console.log(this.map);
    // this.map.set(user);
  }
  follows(user1, user2) {
    console.log(this.map.get(user1).includes(user2));
    return this.map.get(user1).includes(user2);
  }
}

const amir = { name: 'Amir' };
const betty = { name: 'Betty' };
const cindy = { name: 'Cindy' };

const socialGraph = new SocialGraph();
socialGraph.addFollow(amir, betty);
socialGraph.addFollow(amir, cindy);
socialGraph.addFollow(betty, cindy);

[
  socialGraph.follows(amir, betty),
  // socialGraph.follows(amir, cindy),
  // socialGraph.follows(betty, amir),
  // socialGraph.follows(betty, cindy),
  // socialGraph.follows(cindy, amir),
  // socialGraph.follows(cindy, betty),
];
// [true, true, false, true, false, false];
