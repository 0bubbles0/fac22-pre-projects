/* CHALLENGE 1
1. Find the second paragraph on the page
2. Add a class of "highlight", or
3. Remove the class of "highlight" if already present
e.g. "<p class="para">Hello</p>" -> "<p class="para highlight">Hello</p>"
*/
const toggleButton = document.querySelector('#toggle-hightlight');

function toggleHighlight() {
  const p2 = document.querySelectorAll('.font-serif')[1];
  p2.classList.toggle('highlight');
}

/* CHALLENGE 2
1. Take an array of strings as a parameter
1. Return a new `ul` containing an `li` containing a string for each element in the array
e.g. generateList(["hello", "world"]) -> <ul>
                                           <li>hello</li>
                                           <li>world</li>
                                          </ul>
*/
function generateList(array) {
  // your code here
  // console.log(array);
  //make ul
  let ul = document.createElement('ul');
  //make il
  for (let i of array) {
    const li = document.createElement('li');
    li.append(i);
    ul.append(li);
  }
  // let liS = array.map((x) => `<li>${x}</li>`).join('');

  // console.log(`<ul>${liS}</ul>`);
  return ul;
}

/* CHALLENGE 3a
 */
// 1. Take a `textarea` element as a parameter
// const textarea = document.querySelector('textarea');
// 2. Count how many characters have been typed into it
//Access text-content as str, count .length
//.textContent OR value OR .textLength
// console.log(textarea);
// console.log(textarea.value.length);
// console.log(textarea.textLength);

// 3. If it contains > 140 characters set the `aria-invalid="true"` attribute
//My solution
function validateTweet(textarea) {
  let inpTxtLength = textarea.textLength;
  if (inpTxtLength > 140) {
    textarea.setAttribute('aria-invalid', 'true');
    console.log('Too long');
  } else {
    textarea.setAttribute('aria-invalid', 'false');
    console.log('Good length');
  }
}
//Other Solution
function validateTweet1(textarea) {
  const length = textarea.value.length;
  textarea.setAttribute('aria-invalid', length > 180 ? true : false);
}

/* CHALLENGE 3b
 */
// 1. Find the textarea with ID "tweet"
// 2. Whenever a user types into it validate it using the previous function
function validateTweetOnInput() {
  // your code here
  const tweet = document.querySelector('#tweet');
  tweet.addEventListener('input', () => {
    validateTweet(tweet);
  });
}

/* CHALLENGE 4
1. Find all buttons with a classname of "toggle-button"
2. When each button is clicked show/hide the next sibling following the button
e.g. <button class="toggle-button">Toggle</button>
     <p>This should appear/disappear when the button is clicked</p>
*/
function setupToggleButtons() {
  const toggleButtons = document.querySelectorAll('.toggle-button');
  const firstSibls = document.querySelectorAll('.toggle-button ~ p');
  toggleButtons.forEach((button, index) =>
    button.addEventListener('click', () => {
      console.log('Clicked a toggle-button');
      let sibl = firstSibls[index];
      // child.style.display = 'hidden';
      sibl.classList.toggle('hidden');
    })
  );
}

//Other solution
function setupToggleButtons1() {
  const buttons = document.querySelectorAll('.toggle-button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const nextEl = button.nextElementSibling;
      nextEl.hidden = !nextEl.hidden;
    });
  });
}
