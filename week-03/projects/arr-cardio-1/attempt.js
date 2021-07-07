// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
/*
console.log(inventors[0]["year"]);
*/
function minMaxer(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

const born1500s = inventors.filter(
  person => {
    return person.year == minMaxer(person.year, 1500, 1599);
  }
);
//console.log(born1500s);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorNames = inventors.map(
  person => `${person.first} ${person.last}`
);
//console.log(inventorNames);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorSortBirths = inventors.sort(
  (a, b) => a.year - b.year
);
//console.log(inventorSortBirths)


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together? => Sum of all lived years
function totalYearsLong(inventors) {
  var totalYears = 0;
  for (var i = 0; i < inventors.length; i++) {
    totalYears += inventors[i].year;
  }
  return totalYears;
}

const lifeSpans = inventors.map(person => {
  let born = person.year;
  let died = person.passed;
  //console.log(died - born);
  return died - born;
})

const totalYearsMe = inventors.map(person => person.passed - person.year).reduce((total, value) => total + value, 0);

//console.log(totalYearsMe);


// 5. Sort the inventors by years lived
const inventorSortLifespans = inventors.sort(
  (a, b) => (a.passed - a.year) - (b.passed - b.year)
);
//console.log(inventorSortLifespans);



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
/*
https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
First: Get all DOM elments from this page
DevTools --> 
inspect all listed Boulevard --> querySelector('.mw-category') 
--> find links within it --> querySelectorAll('a') 
--> find a nodeList with all links --> convert to list of names 
--> filter for those include 'de'
const category = document.querySelector('.mw-category');
const links = [...category.querySelectorAll('a')];

const de = links.map(link => link.textContent).filter(a => a.includes('de'));
XMLHttpRequest
 XMLHttpRequest('XMLHttpRequest');
let urlParisBoul = fetch('https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris').then(res => res.text()).then((responseText) => {
  const doc = new DOMParser().parseFromString(responseText, 'text/html');
  const h1 = doc.querySelector('h1');
  console.log(h1.textContent);
});;
let urlP = 'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris';
let urlParisBoul = (new DOMParser()).parseFromString(urlP, 'text/html');

const short = Array.from(urlParisBoul.querySelector('.mw-category').querySelectorAll('a')).filter(a => a.textContent.includes('de'));
console.log(short);
*/


// 7. sort Exercise
// Sort the people alphabetically by last name
function lastNamer(str) {
  return str.split(", ")[0];
}
const peopleAlphNames = people.sort(
  (a, b) => {
    let c = lastNamer(a);
    let d = lastNamer(b);
    //  console.log(c - d);
  }
);
//console.log(peopleAlphNames);

/*
 (a, b) => {
    //    let c = a.split(", ")[0];
    return lastNamer(a) - lastNamer(b);
    // console.log(c);
    //    a[0] - b[0]
  }
*/

// 8. Reduce Exercise

// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
/* Know how many types --> 
cont opt
  loop arr --> if(arr[i] not in )
    numbers of each type
    
    function countInstances(arr) {
      const options = [];
      for (let i = 0; i < arr.length; i++) {
        if (options.indexOf(arr[i]) === -1) {
          options.push(arr[i]);
        }
      }
      const choices = arr.filter(x => choices.indexOf(x) === -1);
      console.log(choices);
    }
    
    console.log(countInstances(data));
    */

//Solution

const transportation = data.reduce(function (obj, item) {
  // console.log(item);
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {})

console.log(transportation);